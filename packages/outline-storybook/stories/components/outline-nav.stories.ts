/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import '@phase2/outline-nav-menu';
import testData, {
  jsonData,
} from '../../../outline-nav-menu/src/nav-test-data';
export default {
  title: 'Navigation/Outline Main Menu',
  component: 'outline-nav',
  argTypes: {
    menuEndpoint: {
      description:
        'JSON:API Menu Items module generated endpoint. <br> https://www.drupal.org/project/jsonapi_menu_items <br> An example of the data can be found in /outline-nav-menu/src/nav-test-data.ts',
      name: 'JSON API Endpoint',
      control: {
        type: 'text',
      },
    },
    apiExampleDATA: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    items: testData,
    apiExampleDATA: jsonData,
    menuEndpoint: 'http://demo.docksal.site/jsonapi/menu_items/main',
  },
};
// use chrome extension to allow fetch test
// https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai/related

const MenuDataTemplate = ({ items }): TemplateResult =>
  html`
    <outline-nav
      .listItems=${items}
    >
  </outline-nav>
  `;

const MenuAPITemplate = ({ menuEndpoint }): TemplateResult =>
  html`
    <outline-nav
      dataURL=${menuEndpoint} 
    >
   </outline-nav>
  `;

const SlotsTemplate = (): TemplateResult =>
  html`
    <outline-nav> 
      <outline-nav-item text='Main Item 1' url="#" slot="list">
        <outline-nav-item text='sub Item 1/1' url="#" slot="sub">
          <outline-nav-link slot="sub"><a href="#">Sub Link 1/1/1</a></outline-nav-link>
        </outline-nav-item>
        <outline-nav-item text='Sub Item 1/2' url="#" slot="sub">
          <outline-nav-link slot="sub"><a href="#">Sub Link 1/2/1</a></outline-nav-link>
        </outline-nav-item>
      </outline-nav-item>
      <outline-nav-item text='Main Item 2' url="#" slot="list">
        <outline-nav-item text='Sub Item 2/1' url="#" slot="sub">
          <outline-nav-link slot="sub"><a href="#">Sub Link 2/1/1</a></outline-nav-link>
        </outline-nav-item>
      </outline-nav-item>
        <outline-nav-item text='Main Item 3' url="#" slot="list">
          <outline-nav-item text='Sub Item 3/1' url="#" slot="sub">
            <outline-nav-link slot="sub"><a href="#">Sub Link 3/1/1</a></outline-nav-link>
          </outline-nav-item>
          <outline-nav-item text='Sub Item 3/2' url="#" slot="sub">
            <outline-nav-link slot="sub"><a href="#">Sub Link 3/2/1</a></outline-nav-link>
          </outline-nav-item>
        </outline-nav-item>
        <outline-nav-link slot="sub"><a href="#">Sub Link 3/3</a></outline-nav-link>
      </outline-nav-item>
      <outline-nav-link slot="list"><a href="#">Main Link 4</a></outline-nav-link>
    </outline-nav>
  `;

export const NavWithPreformattedData = MenuDataTemplate.bind({});

export const NavWithDynamicFetchURL = MenuAPITemplate.bind({});

export const NavWithSlots = SlotsTemplate.bind({});
