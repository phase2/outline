export interface notifyCallback {
  (error: Error, result: IArguments): void;
}

interface Dictionary<T> {
  [Key: string]: T;
}

export class ScriptLoaderMap {
  private static instance: ScriptLoaderMap;
  private apiMap: Dictionary<ScriptLoader> = {}; // { hash -> Loader }

  public require(
    url: string,
    notifyCallback: notifyCallback,
    jsonpCallbackName: string | null
  ) {
    const name = this.nameFromUrl(url);

    // create a loader as needed
    if (!this.apiMap[name])
      this.apiMap[name] = new ScriptLoader(name, url, jsonpCallbackName);

    // ask for notification
    this.apiMap[name].requestNotify(notifyCallback);
  }

  public static getInstance(): ScriptLoaderMap {
    if (!ScriptLoaderMap.instance) {
      ScriptLoaderMap.instance = new ScriptLoaderMap();
    }

    return ScriptLoaderMap.instance;
  }

  private nameFromUrl(url: string): string {
    return url.replace(/[:/%?&.=\-,]/g, '_') + '_api';
  }
}

class ScriptLoader {
  error: Error;
  result: IArguments;
  notifiers: Array<notifyCallback>;
  callbackName: string;
  callbackMacro = '%%callback%%';
  loaded = false;
  script: HTMLScriptElement | null = null;

  constructor(name: string, url: string, callbackName: string | null) {
    this.notifiers = [];

    // callback is specified either as callback name
    // or computed dynamically if url has callbackMacro in it
    if (!callbackName) {
      if (url.indexOf(this.callbackMacro) >= 0) {
        callbackName = name + '_loaded';
        url = url.replace(this.callbackMacro, callbackName);
      } else {
        // eslint-disable-next-line
        console.error(
          'ScriptLoader class: a %%callback%% parameter is required in libraryUrl'
        );
        return;
      }
    }

    this.callbackName = callbackName;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[this.callbackName] = this.success.bind(this);
    this.addScript(url);
  }

  addScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.onerror = this.handleError.bind(this);
    const s = document.querySelector('script') || document.body;
    s.parentNode?.insertBefore(script, s);
    this.script = script;
  }

  removeScript() {
    if (this.script?.parentNode) {
      this.script.parentNode.removeChild(this.script);
    }
    this.script = null;
  }

  handleError() {
    this.error = new Error('Library failed to load');
    this.notifyAll();
    this.cleanup();
  }

  success() {
    this.loaded = true;
    // TODO: Resolve es error: Use the rest parameters instead of 'arguments'
    // TS2741: Property 'callee' is missing in type 'any[]' but required in type 'IArguments'.
    // Per https://eslint.org/docs/rules/prefer-rest-params this can be ignored for ES2015 and newer
    /* eslint-disable */
    this.result = Array.prototype.slice.call(
      arguments
    ) as unknown as IArguments;
    /* eslint-enable */
    this.notifyAll();
    this.cleanup();
  }

  cleanup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any)[this.callbackName];
  }

  notifyAll() {
    this.notifiers.forEach((notifyCallback: notifyCallback) => {
      notifyCallback(this.error, this.result);
    });
    this.notifiers = [];
  }

  requestNotify(notifyCallback: notifyCallback) {
    if (this.loaded || this.error) {
      notifyCallback(this.error, this.result);
    } else {
      this.notifiers.push(notifyCallback);
    }
  }
}
