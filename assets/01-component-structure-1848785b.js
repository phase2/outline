import{j as e}from"./jsx-runtime-f69cb261.js";import{M as i}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-split-button-7c50673a.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import"./outline-icon-6c6ddb2f.js";import{u as s}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./screen-size-controller-4280a32a.js";import"./lit-element-411ba165.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./if-defined-93280f6e.js";import"./slots-controller-d122fba7.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./static-0503aeb3.js";import"./vars-link.css.lit-8fdd0acf.js";import"./unsafe-html-3f86ca9e.js";function o(t){const n=Object.assign({h1:"h1",h3:"h3",blockquote:"blockquote",p:"p",a:"a",h2:"h2",h4:"h4",ul:"ul",li:"li",pre:"pre",code:"code"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Component Structure",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"component-composition",children:"Component Composition"}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h3,{id:"documentation-status",children:"Documentation Status"}),e.jsx("outline-alert",{status:"success",size:"large",children:e.jsx("span",{slot:"header",children:"Status: Complete / Up to date (Last Updated: May 2023)"})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lit.dev/docs/composition/component-composition/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component composition"})," is the process of assembling complex components from simpler components."]}),`
`]}),`
`,e.jsx(n.p,{children:`A component can use subcomponents in its template.
Components can use standard DOM mechanisms to communicate: setting properties on subcomponents, and listening for events from subcomponents.`}),`
`,e.jsx(n.h2,{id:"component-structure-overview",children:"Component Structure Overview"}),`
`,e.jsxs(n.p,{children:["Everything used in the component examples below are part of the ",e.jsx(n.a,{href:"https://lit.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"lit.dev"})," library except for the componentStyles include(more info noted below). The following is a brief overview of the main parts of a component. For more information, please see the ",e.jsx(n.a,{href:"https://lit.dev/docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lit"})," documentation."]}),`
`,e.jsx(n.p,{children:`componentStyles is a custom stylesheet that is imported into the component. This is where you would put any custom styles for your component. This is not required, but is recommended.
We import lit.ts compiled version of a PostCSS file, which allows using PostCSS files.`}),`
`,e.jsx(n.h2,{id:"creating-a-new-component",children:"Creating a New Component"}),`
`,e.jsx(n.h4,{id:"-outline-specific-note-a-new-custom-project-specific-component-should-always-extend-outlineelement-and-retain-the-outline-namespace-omitting-core-this-differs-from-prior-versions-where-we-have-used-project-names-as-the-namespaces",children:"💡 Outline Specific Note: A new, custom, project-specific component should always extend OutlineElement and retain the Outline namespace (omitting core). (This differs from prior versions where we have used project names as the namespaces)"}),`
`,e.jsx(n.p,{children:"From the source above on new components:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"When deciding how to break up functionality, there are several things that help identify when to make a new component. A piece of UI may be a good candidate for a component if one or more of the following applies:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It has its own state."}),`
`,e.jsx(n.li,{children:"It has its own template."}),`
`,e.jsx(n.li,{children:"It's used in more than one place, either in this component or in multiple components."}),`
`,e.jsx(n.li,{children:"It focuses on doing one thing well."}),`
`,e.jsx(n.li,{children:"It has a well-defined API."}),`
`]}),`
`,e.jsx(n.p,{children:"Reusable controls like buttons, checkboxes, and input fields can make great components. But more complex UI pieces like drawers and carousels are also great candidates for componentization."}),`
`]}),`
`,e.jsx(n.h3,{id:"creating-a-basic-new-component",children:"Creating a basic New Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { CSSResultGroup, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OutlineElement } from '@phase2/outline-core';
import componentStyles from './outline-widget.css.lit';

/**
 * The Outline Widget component
 * @element outline-widget
 * @slot default - The default slot
 */

@customElement('outline-widget')
export class OutlineWidget extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html\`Hello World!\`;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"extending-components",children:"Extending Components"}),`
`,e.jsx(n.h3,{id:"extending-a-component-alias-only",children:"Extending a component (alias only)"}),`
`,e.jsx(n.p,{children:"Anytime you need to use a base component, you must extend it. Base components are always named 'outline-core-my-component' by default. The extended name should simply be 'outline-my-component'. This example is the most basic form of extending which just replaces the base styles with any custom project styles you may have. Note: You will need to create a new stylesheet in your extended component directory."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { OutlineCoreButton } from '@phase2/outline-core-button';
import componentStyles from './outline-button.css.lit';

/**
 * The Outline Button component
 * @element outline-button
 * @slot default - The default slot
 */

@customElement('outline-button')
export class OutlineButton extends OutlineCoreButton {
  static styles: CSSResultGroup = [componentStyles];
}
`})}),`
`,e.jsx(n.h3,{id:"extending-a-component-alias-property-and-render",children:"Extending a component (alias, property, and render)"}),`
`,e.jsx(n.p,{children:"Here we extend a component just like we did in the last example, but we add a property and change the render function to reflect that new property, adding a class so that styles can be updated based on the passed property."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { OutlineCoreButton } from '@phase2/outline-core-button';
import componentStyles from './outline-button.css.lit';

/**
 * The Outline Button component
 * @element outline-button
 * @attr {string} button-size - The button size. One of: small, medium, large.
 * @slot default - The default slot
 */

export type ButtonSize = 'small' | 'medium' | 'large';

@customElement('outline-button')
export class OutlineButton extends OutlineCoreButton {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * The button size to use.
   */
  @property({ type: String, reflect: true, attribute: 'button-size' })
  buttonSize: ButtonSize = 'medium';

  render(): TemplateResult {
    return html\`
      <button class="\${this.buttonSize}">
        <slot></slot>
      </button>
    \`;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"rendering-the-components",children:"Rendering the Components"}),`
`,e.jsx(n.p,{children:"To render these components in a story or any consumer (Drupal for example) you would simply do the following (Note we only use button as the other examples are not real and are just for documentation purposes):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<outline-button>This is a button</outline-button>
`})}),`
`,e.jsxs(n.p,{children:[`Renders as:
`,e.jsx("outline-button",{children:"This is a button"})]})]})}function B(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{B as default};
//# sourceMappingURL=01-component-structure-1848785b.js.map
