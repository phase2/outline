/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import '../../../outline-jump-nav/index';
import '@phase2/outline-container';


export default {
  title: 'Navigation/JumpNav',
  component: 'outline-jump-nav',
  argTypes: {},
  args: {
    slug: 'outline-jump-nav--',
    nav: '.pseudo-nav',
    hero:'.pseudo-hero'
  },
  parameters: {
    docs: {
      description: {
        component: `
## The \`outline-jump-nav\` element
# Props: 
* slug (\`string\`) **Required**: ID prefix for required for targeted sections. Must end with \`--\`. Example: \`outline-jump-nav--\`
* nav (\`string\`): ID or class name query selector of navigation or any kind of sticky element the jump nav may need to remain positioned below. Example: \`.header-class\`
* hero (\`string\`): ID or class name query selector of hero or any scrolling element jump nav may need to remain below when scrolled into view. Example: \`#hero-id\`

# Usage:
<p>Place on a page with multiple sections you wish to be able to scroll to. Each must have an id that follows this pattern [slug]--[link-tab-name].
  <br /> \`Example:\` **outline-jump-nav--light-green** 
  <br /> The slug[outline-jump-nav--] identifies the element, and the text after the \`--\` of the slug sets the link name used on the jump-nav itself.
  <br /> The "active" tab is set on scroll on the target element with the highest percentage of itself visible in the viewable area between the bottom of the jump-nav and the bottom of the screen.
  </p>

### Notes: 
<p>**Do not test here on the Docs page. There are too many scrolling windows.**</p>

`,
      },
      source: {
        code: `
<div class="page">
  <outline-container container-width="full">
    <div class="pseudo-nav">Main Navigation</div>
    <div class="pseudo-hero">Hero</div>
    <outline-jump-nav slug="outline-jump-nav--" hero=".pseudo-hero" nav=".pseudo-nav"></outline-jump-nav>
    <div class="element-1" id="outline-jump-nav--light-green">Light Green</div>
    <div class="element-2" id="outline-jump-nav--light-blue">Light-Blue</div>
    <div class="element-3" id="outline-jump-nav--yellow">Yellow</div>
    <div class="element-4" id="outline-jump-nav--red">Red</div>
    <div class="element-5" id="outline-jump-nav--purple">Purple</div>
    <div class="footer">Footer</div>
  </outline-container>
</div>
    `,
      },
    },
  },
};

const Template = ({ slug, nav, hero }: any): TemplateResult => html`
<div class="page" style="display: block; width: 100%; height: 100vw;">
  <outline-container container-width="full" bottom-margin="0">
    <div class="pseudo-nav" style="display: flex; position: sticky; top: 0; width: 100%; height: 150px; background: blue; color: white; font-size: 32px; justify-content: center;">Main Navigation</div>
    <div class="pseudo-hero" style="display: flex; width: 100%; height: 450px; background: green; color: white; font-size: 32px; justify-content: center;">Hero</div>
    <outline-jump-nav slug="${slug}" hero=${hero} nav=${nav}></outline-jump-nav>
    <div class="element-1" style="display: flex; width: 100%; height: 750px; background: lightgreen; color: white; font-size: 32px; justify-content: center;" id="outline-jump-nav--light-green">Light Green</div>
    <div class="element-2" style="display: flex; width: 100%; height: 850px; background: lightblue; color: white; font-size: 32px; justify-content: center;" id="outline-jump-nav--light-blue">Light Blue</div>
    <div class="element-3" style="display: flex; width: 100%; height: 250px; background: yellow; color: white; font-size: 32px; justify-content: center;" id="outline-jump-nav--yellow">Yellow</div>
    <div class="element-4" style="display: flex; width: 100%; height: 1050px; background: red; color: white; font-size: 32px; justify-content: center;" id="outline-jump-nav--red">Red</div>
    <div class="element-5" style="display: flex; width: 100%; height: 1500px; background: purple; color: white; font-size: 32px; justify-content: center;" id="outline-jump-nav--purple">Purple</div>
    <div class="footer" style="display: flex; width: 100%; height: 150px; background: orange; color: white; font-size: 32px; justify-content: center;" id="">Footer</div>
  </outline-container>
</div>
`


export const JumpNav: any = Template.bind({});
JumpNav.args = {slug: 'outline-jump-nav--'}
JumpNav.parameters = {
  layout: 'fullscreen'
};


