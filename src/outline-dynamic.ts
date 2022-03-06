//import outline from './resolved-outline-config';
import customElements from './component-list.json';
import {
  outlineComponentSelector,
  // outlineComponents,
  // @ts-expect-error - whatever
} from '../dist/outline-components.js';
// import { ReactiveElement } from 'lit';

// keep a record of the components we've loaded in this way
const imported: String[] = [];

const dynamicLoader = (entry: Element) => {
  const name = entry.nodeName.toLowerCase();
  const element = customElements.tags.filter(obj => {
    return obj.name === name;
  });

  const importPath = element[0].path;

  const componentPath = importPath.replace('.ts', '.js').replace('./', '');

  if (!imported.includes(name)) {
    // Dynamic import.
    import(`../dist/${componentPath}`);
    // Keep a note of which WCs have been loaded so if we have multiple
    // instances we don't import twice
    imported.push(name);
  }
};

const elements = document.querySelectorAll(outlineComponentSelector);
elements.forEach(el => {
  dynamicLoader(el);
});
