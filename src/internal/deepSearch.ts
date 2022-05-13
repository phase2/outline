// Search for element or attribute under a given element

function elementFound(query: string, currentElement: HTMLElement) {
  return currentElement.localName.includes(query);
}

function attributeFound(query: string, currentElement: HTMLElement) {
  const isAttr = currentElement.getAttribute(query);
  return !!isAttr;
}

function classFound(query: string, currentElement: HTMLElement) {
  const isClass = currentElement.classList;
  return isClass && isClass.contains(query);
}

function propertyFound(query: string, currentElement: HTMLElement) {
  const isAttr = currentElement.hasOwnProperty(query);
  return isAttr;
}

export function deepSearch(
  query: string,
  elements: HTMLElement | Array<HTMLElement>,
  type: String = 'element'
) {
  const nodes: Array<HTMLElement> = [];

  Array.prototype.forEach.call(elements, node => {
    switch (type) {
      case 'attribute':
        if (attributeFound(query, node)) {
          nodes.push(node);
        }
        break;
      case 'class':
        if (classFound(query, node)) {
          nodes.push(node);
        }
        break;
      case 'property':
        if (propertyFound(query, node)) {
          nodes.push(node);
        }
        break;
      default:
        if (elementFound(query, node)) {
          nodes.push(node);
        }
    }

    // If the element has shadow DOM, dig deeper.
    if (node.shadowRoot) {
      deepSearch(query, node.shadowRoot.querySelectorAll('*'));
    }
  });
  return nodes;
}

/* usage example
 this.deepSearch(
	'div',
	document.querySelector('#main-document').querySelectorAll('*')
);
*/
