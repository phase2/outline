import { OutlineAccordionPanel as OutlineComponent } from '../outline-accordion-panel';
import { expect, waitUntil } from '@open-wc/testing';

const componentElementName = 'outline-accordion-panel';

describe(componentElementName, () => {
  const addBaseStyles = () => {
    const defaultCSS = document.createElement('link');
    defaultCSS.setAttribute('rel', 'stylesheet');
    defaultCSS.setAttribute('href', '/outline.theme.css');

    document.head.append(defaultCSS);
  };

  before(() => {
    addBaseStyles();
  });

  it('Make sure to load necessary component JS', () => {
    const componentElement = document.createElement(componentElementName);

    expect(componentElement).is.instanceOf(OutlineComponent);
  });

  it('Default slot content.', () => {
    const panelInstance = document.createElement(componentElementName);

    const panelContent = document.createElement('p');
    panelContent.innerText =
      'Aliquam eu nunc. Aenean vulputate eleifend tellus. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra.';
    panelInstance.append(panelContent);

    document.body.append(panelInstance);

    waitUntil(() => panelContent.assignedSlot !== null, 'Message is slotted.');
  });

  it('Heading slot.', () => {
    const componentElement = document.createElement(componentElementName);

    const headingSlotElement = document.createElement('span');
    headingSlotElement.setAttribute('slot', 'heading');
    headingSlotElement.innerText = 'Heading Text';
    componentElement.append(headingSlotElement);

    document.body.append(componentElement);

    waitUntil(
      () => headingSlotElement.assignedSlot !== null,
      'Header is slotted.'
    );
  });
});
