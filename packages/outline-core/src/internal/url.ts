export function updateUrlSearchParam(param: string, value: string | null) {
  const url = new URL(window.location.href);
  if (value) {
    url.searchParams.set(param, value);
  } else {
    url.searchParams.delete(param);
  }
  window.history.pushState({}, '', url);
}

export function getUrlSearchParam(params: Array<string> | []) {
  const urlParams = new URLSearchParams(document.location.search);
  const filteredParams: {[key: string]: string | null} = {};

  if(params.length) {
    // Returns only the requested parameters
    params.forEach((value: string) => {
      filteredParams[value] = urlParams.get(value);
    });
  } else {
    // Returns all parameters
    urlParams.forEach((value, key) => {
      filteredParams[key] = value;
    });
    return urlParams;
  }
  return filteredParams;
}
