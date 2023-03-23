import cssTools from '@adobe/css-tools';

/**
 * Helper function to add Scope to a specific CSS Selector.
 * Handles :host and ::slotted conversions.
 */
const _scopeSelector = (selector, scopeId) => {
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
const _processCssRule = (rule, scopeId) => {
  if ('selectors' in rule && rule.selectors.length > 0) {
    for (let i = 0; i < rule.selectors.length; i++) {
      rule.selectors[i] = _scopeSelector(rule.selectors[i], scopeId);
    }
  } else if ('rules' in rule) {
    // Handle rules that have recursive rules (such as media)
    rule.rules.forEach(innerRule => {
      _processCssRule(innerRule, scopeId);
    });
  }
};

/**
 * Add the scopeId to each CSS rule selector.
 * Handle the :host and ::slotted selectors.
 */
const addScopeToStyles = (cssStyles, scopeId) => {
  // Use css-tools to parse the string into a tree.
  const ast = cssTools.parse(cssStyles);
  if (ast && ast.stylesheet && ast.stylesheet.rules.length > 0) {
    ast.stylesheet.rules.forEach(function (rule) {
      _processCssRule(rule, scopeId);
    });
  }

  // Convert tree back to a string and return the new css.
  return cssTools.stringify(ast, { compress: true });
};

export { addScopeToStyles };
