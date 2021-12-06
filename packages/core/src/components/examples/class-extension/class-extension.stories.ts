import { html, TemplateResult } from 'lit-html';

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

export const MyElement = (): TemplateResult => {
  return html`
    <my-element>
      <p>This is an instance of &lt;my-element&gt;.</p>
    </my-element>
  `;
};

export const ExtendedElement = (): TemplateResult => {
  return html`
    <extended-element>
      <p>
        This is an instance of &lt;extended-element&gt; that extends
        &lt;my-element&gt;.
      </p>
    </extended-element>
  `;
};

export const DoubleExtendedElement = (): TemplateResult => {
  return html`
    <double-extended-element>
      <p>
        This is an instance of &lt;double-extended-element&gt; that extends
        &lt;extended-element&gt;.
      </p>
    </double-extended-element>
  `;
};

export const SimpleExample = (): TemplateResult => {
  return html` <my-element></my-element> `;
};
