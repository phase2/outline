import { html, TemplateResult } from 'lit';
import './outline-nav';
import '../outline-nav-item/outline-nav-item';
import '../outline-nav-link/outline-nav-link';
import testData from '../nav-test-data';
export default {
  title: 'Navigation/OutlineNav',
  component: 'outline-nav',
  argTypes: {},
  args: {
    items: testData
  },
};

const Template = ({items}): TemplateResult =>
  html`
    <outline-nav .listItems=${items}> </outline-nav>
  `;

const SlotsTemplate = (): TemplateResult =>
  html`
    <outline-nav> 
      <outline-nav-item .item=${{text:"Item 1", url:"#", sub:[]}} slot="list"></outline-nav-item>
      <outline-nav-item .item=${{text:"Item 2", url:"#", sub:[]}} slot="list"></outline-nav-item>
      <outline-nav-item .item=${{ text: "Item 3", url: "#", sub:[] }} slot="list"></outline-nav-item>
      <outline-nav-link .item=${{ text: "nav link 1", url: "#" }} slot="list"> </outline-nav-link>
      <outline-nav-link slot="list"><a href="#">Slotted</a></outline-nav-link>
    </outline-nav>
  `;

export const OutlineNavWithData = Template.bind({});

export const OutlineNavWithSlots = SlotsTemplate.bind({});