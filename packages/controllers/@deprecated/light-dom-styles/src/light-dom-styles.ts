/* eslint-disable no-console */
import { ReactiveControllerHost, CSSResultGroup, CSSResult } from 'lit';
import * as cssTools from '@adobe/css-tools';

/**
 * Helper function to add Scope to a specific CSS Selector.
 * Handles :host and ::slotted conversions.
 */
const _scopeSelector = (selector: string, scopeId: string) => {
  // Check if selector is already scoped.
  if (selector.startsWith(scopeId)) {
    return selector;
  }
  // Skip :root selectors.
  else if (selector.includes(':root')) {
    return selector;
  }
  // Convert ":host(Something)" to "ScopeSomething"
  else if (selector.includes(':host(')) {
    return selector.replace(/:host\((.+?)\)/, scopeId + '$1');
  }
  // Convert remaining ":host" to "Scope"
  else if (selector.includes(':host')) {
    return selector.replace(':host', scopeId);
  }
  // Convert "::slotted(Something)" to "Scope Something".
  else if (selector.includes('::slotted(')) {
    return selector.replace(/::slotted\((.+?)\)/, scopeId + ' $1');
  }
  // Otherwise, just prefix selector with Scope.
  return scopeId + ' ' + selector;
};

/**
 * Add scope to a single CSS rule.
 */
const _processCssRule = (rule: cssTools.CssAtRuleAST, scopeId: string) => {
  if ('selectors' in rule && rule.selectors.length > 0) {
    for (let i = 0; i < rule.selectors.length; i++) {
      rule.selectors[i] = _scopeSelector(rule.selectors[i], scopeId);
    }
  } else if ('rules' in rule) {
    // Handle rules that have recursive rules (such as media)
    rule.rules?.forEach((innerRule: cssTools.CssAtRuleAST) => {
      _processCssRule(innerRule, scopeId);
    });
  }
};

/**
 * Add the scopeId to each CSS rule selector.
 * Handle the :host and ::slotted selectors.
 */
const addScopeToStyles = (cssStyles: string, scopeId: string) => {
  // Use css-tools to parse the string into a tree.
  const ast = cssTools.parse(cssStyles);
  if (ast && ast.stylesheet && ast.stylesheet.rules.length > 0) {
    ast.stylesheet.rules.forEach(function (rule: cssTools.CssAtRuleAST) {
      _processCssRule(rule, scopeId);
    });
  }

  // Convert tree back to a string and return the new css.
  return cssTools.stringify(ast, { compress: true });
};

/**
 * The LightComStyles ReactiveController.
 *
 * This controller allows components to inject styles into the light-dom.
 *
 * @param host The host element
 */

export declare type ComponentStyles = {
  name: string;
  styles: CSSResultGroup;
};

export class LightDomStyles {
  // The scope to wrap the rules, defaults to the component name (tag).
  // If scopeId is empty, rules are added to light dom but not scoped.
  scopeId: string;

  // The parent component (host).
  protected host: ReactiveControllerHost & Element;

  // The host component name
  protected componentName: string;

  // Internal holder of styles to be processed.
  protected cssStyles: CSSResultGroup;

  // Counter used internally for multiple rules in a group.
  protected ruleIndex = 0;

  constructor(
    host: ReactiveControllerHost & Element,
    cssStyles: CSSResultGroup,
    scopeId = ''
  ) {
    // Store a reference to the host
    this.host = host;
    this.componentName = host.tagName.toLowerCase();
    // Store the css styles to be injected.
    this.cssStyles = cssStyles;
    this.scopeId = scopeId;
    // Register for lifecycle updates
    host.addController(this);
  }

  hostConnected(): void {
    // Add a comment that this component is using light-dom.
    const annotationComment = `'${this.componentName}' using light DOM styles injected into <head>`;
    this.host.before(document.createComment(annotationComment));

    // Only add light-dom styles for this scopeId (component name) once.
    if (!document.getElementById(this.componentName)) {
      this.ruleIndex = 0;
      this._addLightDomGroup(this.cssStyles);
    }
  }

  /**
   * Add styles from a CSSResult to the light-dom, scoped by the scopeId.
   * Only add if style element doesn't already exist.
   */
  _addLightDomStyle(cssStyles: CSSResult) {
    // If this is the first rule, use the component name as the element id,
    // otherwise add a "-INDEX" counter to the element id.
    const elementId =
      this.ruleIndex !== 0
        ? this.componentName + '-' + this.ruleIndex
        : this.componentName;
    if (!document.getElementById(elementId)) {
      const scopedStyleElement = document.createElement('style');
      scopedStyleElement.id = elementId;

      // Add scope to css rules if scope isn't "none"
      let rawStyles = `${cssStyles}`;
      if (this.scopeId !== '') {
        rawStyles = addScopeToStyles(rawStyles, this.scopeId);
      }
      scopedStyleElement.innerHTML = rawStyles;

      // Prepend so consumer theme can still override.
      document.head.prepend(scopedStyleElement);

      // Add a comment to the style to indicate which component injected it.
      const annotationComment = `styles injected into DOM by '${this.componentName}'`;
      scopedStyleElement.before(document.createComment(annotationComment));
    }
    this.ruleIndex++;
  }

  /**
   * Add styles from a CSSResultGroup to the light-dom.
   */
  _addLightDomGroup(cssStyles: CSSResultGroup, depth = 0) {
    if (cssStyles instanceof Array) {
      // Loop through style array backwards since addLightDomStyle uses
      // prepend and we want to keep the original order.
      for (let index = cssStyles.length - 1; index >= 0; index--) {
        const item = cssStyles[index];
        if (item instanceof Array) {
          // A CSSResultGroup can be an array of other result groups.
          this._addLightDomGroup(item, depth + 1);
        } else if (item instanceof CSSResult) {
          this._addLightDomStyle(item);
        }
      }
    } else if (cssStyles instanceof CSSResult) {
      // Process a single result.
      this._addLightDomStyle(cssStyles);
    }
  }
}
