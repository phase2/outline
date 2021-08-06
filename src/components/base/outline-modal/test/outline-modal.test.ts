import { OutlineModal as OutlineComponent } from '../outline-modal';
import { expect, waitUntil } from '@open-wc/testing';

// We are using these generic names so we can hopefully generalize this process or at least make copy & paste easier.
const componentElementName = 'outline-modal';

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

  it('Slot elements while interacting with the modal.', async () => {
    const modalElement = document.createElement(
      componentElementName
    ) as OutlineComponent;

    /**
     * <button slot="outline-modal--trigger">
     *  Open small modal.
     * </button>
     */
    const triggerElement = document.createElement('button');
    triggerElement.setAttribute('slot', 'outline-modal--trigger');
    triggerElement.innerText = 'Open small modal';
    modalElement.append(triggerElement);

    /**
     * <h2 slot="outline-modal--header">Modal header text</h2>
     */
    const headerElement = document.createElement('h2');
    headerElement.setAttribute('slot', 'outline-modal--header');
    headerElement.innerText = 'Modal header text';
    modalElement.append(headerElement);

    /**
     * <p>Test message</p>
     */
    const messageElement = document.createElement('p');
    messageElement.innerText = 'Test message';
    modalElement.append(messageElement);

    document.body.append(modalElement);

    await waitUntil(
      () => triggerElement.assignedSlot !== null,
      'Trigger is slotted'
    );

    expect(triggerElement.assignedSlot, 'Trigger is slotted.').is.not.null;

    expect(headerElement.assignedSlot, 'Header is not yet slotted.').is.null;

    expect(messageElement.assignedSlot, 'Message is not yet slotted.').is.null;

    modalElement.open();

    await waitUntil(() => modalElement.isOpen === true, 'Modal is open');

    expect(headerElement.assignedSlot, 'Header is slotted.').is.not.null;

    expect(messageElement.assignedSlot, 'Message is slotted.').is.not.null;

    modalElement.close();

    await waitUntil(() => modalElement.isOpen === false, 'Modal is closed');

    expect(headerElement.assignedSlot, 'Header is no longer slotted.').is.null;

    expect(messageElement.assignedSlot, 'Message is no longer slotted.').is
      .null;
  });
});
