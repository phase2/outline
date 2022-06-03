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
  let property = null;
  // eslint-disable-next-line
  // @ts-ignore
  property = currentElement[query];

  if (property) {
    if (typeof property === 'string') {
      property = property.trim();
    }
    if (typeof property == 'object') {
      // eslint-disable-next-line
      // @ts-ignore
      property = property.filter(el => {
        return el != null && el != '';
      });
    }
  }

  return !!property;
}

export function deepSearch(
  query: string,
  elements: HTMLElement | Array<HTMLElement>,
  type: String = 'element',
  nodes: Array<HTMLElement> = []
) {
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
    if (node.children) {
      const childrenNodes = deepSearch(query, node.children, type);
      nodes.push(...childrenNodes);
    }
    if (node.shadowRoot) {
      const deepNodes = deepSearch(
        query,
        node.shadowRoot.querySelectorAll('*'),
        type
      );
      nodes.push(...deepNodes);
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
