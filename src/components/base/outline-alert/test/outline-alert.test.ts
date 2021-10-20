import { OutlineAlert as OutlineComponent } from '../outline-alert';
import { expect, waitUntil } from '@open-wc/testing';

// We are using these generic names so we can hopefully generalize this process or at least make copy & paste easier.
const componentElementName = 'outline-alert';

describe(componentElementName, () => {
  // We don't get base styles automatically. Is there a better way?
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
    // If we don't use the component at least once, its JS will never be loaded and the component won't render. :(
    const componentElement = document.createElement(componentElementName);

    expect(componentElement).is.instanceOf(OutlineComponent);
  });

  it('Slot message.', () => {
    const alertElement = document.createElement(componentElementName);

    const messageElement = document.createElement('p');
    messageElement.innerText = 'Test message';
    alertElement.append(messageElement);

    document.body.append(alertElement);

    // Wait for the component to render. :(

    waitUntil(
      () => messageElement.assignedSlot !== null,
      'Message is slotted.'
    );
  });

  it('Slot header.', () => {
    const alertElement = document.createElement(componentElementName);

    const headerSlotElement = document.createElement('span');
    headerSlotElement.setAttribute('slot', 'outline-alert--header');
    headerSlotElement.innerText = 'Test header text';
    alertElement.append(headerSlotElement);

    document.body.append(alertElement);

    waitUntil(
      () => headerSlotElement.assignedSlot !== null,
      'Header is slotted.'
    );
  });
});
