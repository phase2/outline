/**
 * @file Bundles a lazy loading Outline loader for consumer applciations.
 * @todo Ensure this utilizes the customizable `dist` directory.
 */
import outline from './resolved-outline-config';
import customElements from './component-list.json';

// keep a record of the components we've loaded in this way
const imported = {};
// Set up our observer:
const observer = new IntersectionObserver((entries, observerRef) => {
  // The callback is run when the visibility of one or more of the elements
  // being observed has changed. It's also called on page load.
  // console.log(entries);

  entries.forEach(async entry => {
    //`isIntersecting` will be `true` if any part of the element is currently visible
    if (entry.isIntersecting) {
      // We are assuming here that your Web Component is located in a file
      // named after it's tag name
      const name = entry.target.nodeName.toLowerCase();
      // @ts-expect-error - manually added property
      const componentPath = entry.target.outlinePath
        .replace('.ts', '.js')
        .replace('./', '');

      // Once we've observed this element come into view, we can safely remove
      // the observer since we won't need to import the WC code again
      observerRef.unobserve(entry.target);
      // @ts-expect-error - because
      if (!imported[name]) {
        // Keep a note of which WCs have been loaded so if we have multiple
        // instances we don't import twice
        // @ts-expect-error - because
        imported[name] = true;
        // Dynamic import.
        const importPath = `../dist/${componentPath}`;
        import(importPath);
      }
    }
  });
});

// Observe all components with the desired class
let selector = '';
customElements.tags.forEach((tag, index) => {
  selector += `${tag.name}${
    index !== customElements.tags.length - 1 ? ', ' : ''
  }`;
});
const elements = document.querySelectorAll(selector);
// console.log(elements)
// console.log(selector);
// console.log(customElements)
// @ts-expect-error - because
const components = [];

elements.forEach((el, i) => {
  const tagName = el.tagName.toLowerCase();
  outline.components.bundle.forEach(bundle => {
    const element = customElements.tags.filter(obj => {
      return obj.name === tagName;
    });
    //console.log(element[0].path)

    if (tagName.indexOf(`${bundle}-`) == 0) {
      // @ts-expect-error - manually added property
      elements[i].outlineBundle = bundle == 'outline' ? 'base' : bundle;
      // @ts-expect-error - manually added property
      elements[i].outlinePath = element[0].path;
      // console.log(elements[i])
      components.push(elements[i]);
    }
  });
});
// @ts-expect-error - because
components.forEach(el => {
  observer.observe(el);
});
