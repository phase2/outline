import { TemplateResult, html } from "lit"
import './sic-styled-text'

export default {
  title: 'Global/Styled Text',
  component: 'sic-styled-text',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      description: {
        component: `\`<sic-styled-text>\` should wrap wysiwyg content.
        `,
      },
    },
  },
}
const SampleContent = html`
  <p>
    Nullam accumsan lorem in dui. <a href="#">Quisque malesuada</a> placerat nisl. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
    Aliquam lobortis. Curabitur blandit mollis lacus. Quisque malesuada placerat nisl.
  </p>
  <ul>
    <li>Bullet List item 1</li>
    <li>Bullet List item 2</li>
    <li>Bullet List item 3</li>
  </ul>
  <hr>
  <p>
    Nullam accumsan lorem in dui. Quisque malesuada placerat nisl. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
    Aliquam lobortis. Curabitur blandit mollis lacus. Quisque malesuada placerat nisl.
  </p>
  <blockquote>This is a block quote</blockquote>
  <p><button class="btn">This is a button</button> <a href="#" class="btn">Link button</a></p>
  <p><a href="https://standard.com" class="sic-cta">Call to action</a><a href="https://standard.com" class="sic-cta" target="_blank">Call to action external</a></p>

`;


const TemplateStyledText = (): TemplateResult => html `
<sic-styled-text>
  <h2>This is styled text using the sic-styled-text HTML element</h2>
  ${SampleContent}
</sic-styled-text>
<div class="sic-bg--primary-default p-4 mt-10">
  <sic-styled-text>
    <h2>sic-styled-text HTML element on primary default background.</h2>
    ${SampleContent}
  </sic-styled-text>
</div>
` ;
export const OnBackgrounds = TemplateStyledText.bind({});
