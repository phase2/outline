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
      <outline-nav-item text='Main Item 1' url="#" slot="list">
        <outline-nav-item text='sub Item 1/1' url="#" slot="sub">
          <outline-nav-link slot="sub"><a href="#">Sub Link</a></outline-nav-link>
        </outline-nav-item>
        <outline-nav-item text='Sub Item 1/2' url="#" slot="sub">
          <outline-nav-link slot="sub"><a href="#">Sub Link</a></outline-nav-link>
        </outline-nav-item>
      </outline-nav-item>
      <outline-nav-item text='Main Item' url="#" slot="list">
        <outline-nav-item text='Main Item' url="#" slot="sub">
          <outline-nav-link slot="sub"><a href="#">Sub Link</a></outline-nav-link>
        </outline-nav-item>
        <outline-nav-item text='Main Item' url="#" slot="sub">
          <outline-nav-item text='Sub Item' url="#" slot="sub">
            <outline-nav-link slot="sub"><a href="#">Sub Link</a></outline-nav-link>
          </outline-nav-item>
          <outline-nav-item text='Sub Item' url="#" slot="sub">
            <outline-nav-link slot="sub"><a href="#">Sub Link</a></outline-nav-link>
          </outline-nav-item>
        </outline-nav-item>
        <outline-nav-link slot="sub"><a href="#">Sub Link</a></outline-nav-link>
      </outline-nav-item>
      <outline-nav-link slot="list"><a href="#">Main Link</a></outline-nav-link>
    </outline-nav>
  `;

export const OutlineNavWithData = Template.bind({});

export const OutlineNavWithSlots = SlotsTemplate.bind({});