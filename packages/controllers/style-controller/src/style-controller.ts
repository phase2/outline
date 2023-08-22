/*
  Instructions for using in a component:
  import slotStyles from './outline-styled-text.css.lit';
  stylesManager = new StyleManager(this, slotStyles);
*/
import { CSSResult, ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * StyleManager class
 * @implements {ReactiveController}
 */
export class StyleManager implements ReactiveController {
  protected host: ReactiveControllerHost & Element;
  protected cssStyles: CSSResult;

  constructor(host: ReactiveControllerHost & Element, cssStyles: CSSResult) {
    this.host = host;
    this.cssStyles = cssStyles;
    host.addController(this);
  }

  hostConnected(): void {
    // @TODO: Add an HTML comment when debug/dev mode is on
    this.addSlotStyles(this.cssStyles);
  }

  /**
   * Adds the CSS styles to the host element by creating a nested CSS rule with the element's unique ID.
   * @param cssStyles - The CSS styles to be applied to the host element.
   */
  addSlotStyles(cssStyles: CSSResult) {
    const documentSheet = new CSSStyleSheet();

    // Add a random ID for this specific instance of the component
    this.host.id = `${this.host.tagName}-${this.generateRandomString(4)}`;

    // Create nested CSS rule with the element's unique id
    const ruleStringWithElementAsPrefix =
      '#' +
      this.host.id +
      ` { ${this.addPrefixToCurlyGroups(cssStyles, '& ')};  }`;

    // Add all the rules to the document's stylesheet
    documentSheet.replaceSync(ruleStringWithElementAsPrefix);
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      documentSheet,
    ];
  }

  /**
   * Removes the given rules from the input string.
   * @param inputString - The string to remove rules from.
   * @param rules - An array of rules to remove from the input string.
   * @returns The modified string with the specified rules removed.
   */
  removeRules(inputString: string, rules: string[]) {
    let modifiedString = inputString;

    rules.forEach(rule => {
      modifiedString = modifiedString.replace(rule, '');
    });

    return modifiedString;
  }

  /**
   * Adds a special prefix before each group of curly brackets in the input CSS.
   * @param inputCSS - The CSS to modify.
   * @param prefix - The prefix to add before each group of curly brackets.
   * @returns The modified CSS with the special prefix added before each group of curly brackets.
   */
  addPrefixToCurlyGroups(inputCSS: CSSResult, prefix = '& ') {
    // Convert the CSSResult object to a string
    const inputString = this.removeRules(inputCSS.cssText, [':host', ':root']);

    // This regular expression matches a string containing any characters that
    // are not curly braces, followed by a pair of curly braces containing any
    // whitespace characters and non-whitespace characters.
    // The `g` flag at the end of the regular expression indicates that it
    // should match all occurrences in the input string, not just the first one.
    // This regular expression is used to extract CSS selectors and their
    // corresponding styles from a CSS file.

    const regex = /([^{}]*)(\{[\s\S]*?\})/g;

    // Replace each match found by the regular expression with a modified string
    const modifiedString = inputString.replace(regex, (_, before, group) => {
      // Return the modified string with the special prefix added before the captured group
      return `${prefix}${before}${group}`;
    });

    // Return the final modified string
    return modifiedString;
  }

  /**
   * Generates a random string of the specified length.
   * @param length - The length of the string to generate.
   * @returns A random string of the specified length.
   */
  generateRandomString(length: number) {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charsetArray = charset.split('');
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsetArray.length);
      result += charsetArray[randomIndex];
    }

    return result;
  }
}
