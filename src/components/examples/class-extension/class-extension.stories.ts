import { html, HTMLTemplateResult } from 'lit';

import './double-extended-element/double-extended-element';
import './extended-element/extended-element';
import './my-element/my-element';

export default {
  title: 'Code Examples/LIT Class Extension',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
};

export const MyElement = (): HTMLTemplateResult => {
  return html`
    <my-element>
      <p>This is an instance of &lt;my-element&gt;.</p>
    </my-element>
  `;
};

export const ExtendedElement = (): HTMLTemplateResult => {
  return html`
    <extended-element>
      <p>
        This is an instance of &lt;extended-element&gt; that extends
        &lt;my-element&gt;.
      </p>
    </extended-element>
  `;
};

export const DoubleExtendedElement = (): HTMLTemplateResult => {
  return html`
    <double-extended-element>
      <p>
        This is an instance of &lt;double-extended-element&gt; that extends
        &lt;extended-element&gt;.
      </p>
    </double-extended-element>
  `;
};

export const SimpleExample = (): HTMLTemplateResult => {
  return html` <my-element></my-element> `;
};
