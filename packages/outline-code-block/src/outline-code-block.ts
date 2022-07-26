import { CSSResultGroup, TemplateResult, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { OutlineElement } from '@phase2/outline-core';

// eslint-disable-next-line
// @ts-ignore
import Prism from './prism.js';
import componentStyles from './outline-code-block.css.lit';

export type CodeLanguages =
  | 'css'
  | 'graphql'
  | 'html'
  | 'javascript'
  | 'json'
  | 'markdown'
  | 'reactjsx'
  | 'reacttsx'
  | 'svg'
  | 'typescript'
  | 'xml'
  | 'jsx'
  | 'tsx';
/**
 * The OutlineCodeBlock component
 * @element outline-code-block
 */
@customElement('outline-code-block')
export class OutlineCodeBlock extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @query('slot')
  codeSlot: HTMLElement;

  @query('#code-block-template')
  template: HTMLElement;

  /**
   * The code snippet to be displayed - default '<p>Hello World</p>'
   * @param code
   */
  @property({})
  code = `<p>Hello World</p>`;

  /**
   * Whether or not to display the line numbers for code block
   * @param lineNumbers
   */
  @property({ type: Boolean, attribute: 'line-numbers' })
  lineNumbers: boolean;

  /**
   * Language of code block - default 'typescript'
   * 'css' | 'graphql' | 'html' | 'javascript' | 'json' | 'markdown' | 'reactjsx' | 'reacttsx' | 'svg' | 'typescript' | 'xml'
   * @param lang
   */
  @property()
  language: CodeLanguages = 'typescript';

  connectedCallback() {
    super.connectedCallback();
  }

  render(): TemplateResult {
    const lineNumbers = this.lineNumbers ? 'line-numbers' : '';
    const language = `language-${this.language.toLowerCase()}`;
    this.code = this.formatCode();

    return html`
      <pre class="${lineNumbers} ${language}" id="pre">
        <code id="code" class="${language}">
          ${unsafeHTML(this.prismCodeLookup())}
        </code>
      </pre>
    `;
  }

  formatCode = () => {
    if (
      this.language.toLowerCase() === 'jsx' ||
      this.language.toLowerCase() === 'html'
    ) {
      return this.innerHTML;
    } else {
      return this.textContent!;
    }
  };

  prismCodeLookup = () => {
    let prismCode = '';

    switch (this.language) {
      case 'css':
        prismCode = Prism.highlight(this.code, Prism.languages.css, 'css');
        break;
      case 'graphql':
        prismCode = Prism.highlight(
          this.code,
          Prism.languages.graphql,
          'graphql'
        );
        break;
      case 'html':
        prismCode = Prism.highlight(this.code, Prism.languages.html, 'html');
        break;
      case 'javascript':
        prismCode = Prism.highlight(
          this.code,
          Prism.languages.javascript,
          'javascript'
        );
        break;
      case 'json':
        prismCode = Prism.highlight(this.code, Prism.languages.json, 'json');
        break;
      case 'markdown':
        prismCode = Prism.highlight(
          this.code,
          Prism.languages.markdown,
          'markdown'
        );
        break;
      case 'jsx':
        prismCode = Prism.highlight(this.code, Prism.languages.jsx, 'jsx');
        break;
      case 'tsx':
        prismCode = Prism.highlight(this.code, Prism.languages.tsx, 'tsx');
        break;
      case 'svg':
        prismCode = Prism.highlight(this.code, Prism.languages.svg, 'svg');
        break;
      case 'typescript':
        prismCode = Prism.highlight(
          this.code,
          Prism.languages.typescript,
          'typescript'
        );
        break;
      case 'xml':
        prismCode = Prism.highlight(this.code, Prism.languages.xml, 'xml');
        break;

      default:
        break;
    }
    return prismCode;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-code-block': OutlineCodeBlock;
  }
}
