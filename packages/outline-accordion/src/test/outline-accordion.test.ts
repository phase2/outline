import { OutlineAccordion as Accordion } from '../outline-accordion';
import { OutlineAccordionPanel as Panel } from '../outline-accordion-panel/outline-accordion-panel';
import { expect, waitUntil } from '@open-wc/testing';

const AccordionElementName = 'outline-accordion';
const PanelElementName = 'outline-accordion-panel';

describe(AccordionElementName, () => {
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
    const componentElement = document.createElement(AccordionElementName);

    expect(componentElement).is.instanceOf(Accordion);
  });

  it('Panels slot content.', () => {
    const accordionInstance = document.createElement(
      AccordionElementName
    ) as Accordion;
    const panelInstance = document.createElement(PanelElementName) as Panel;
    const panelHeading = document.createElement('span');
    const panelContent = document.createElement('p');
    panelHeading.setAttribute('slot', 'heading');
    panelHeading.innerText = 'Panel Heading';
    panelContent.innerText =
      'Aliquam eu nunc. Aenean vulputate eleifend tellus. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra.';
    panelInstance.append(panelHeading);
    panelInstance.append(panelContent);
    panelInstance.setAttribute('slot', 'panels');
    accordionInstance.append(panelInstance);

    document.body.append(accordionInstance);

    waitUntil(
      () => accordionInstance.assignedSlot !== null,
      'Message is slotted.'
    );
  });
});
