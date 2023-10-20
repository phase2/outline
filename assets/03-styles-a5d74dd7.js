import{j as e}from"./jsx-runtime-f69cb261.js";import{M as l}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as t}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function i(s){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",blockquote:"blockquote",h3:"h3",em:"em",h4:"h4",ol:"ol",strong:"strong"},t(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Styling",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"description",children:"Description"}),e.jsx(n.p,{children:"This section will provide guidance on the specific usages and patterns for styling a component in Outline."}),e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsx("outline-alert",{status:"error",size:"large",children:e.jsx("span",{slot:"header",children:"Status: Complete / In need of rewrite (Last Updated: August 2023)"})})]}),`
`,e.jsx(n.h2,{id:"implementation-standards",children:"Implementation Standards"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styles"})," should be defined immediately following the class definition."]}),`
`]}),`
`,e.jsx(n.h2,{id:"importing-styles",children:"Importing Styles"}),`
`,e.jsxs(n.p,{children:["The styles for Outline components are kept in a typical ",e.jsx(n.code,{children:".css"})," file such as ",e.jsx(n.code,{children:"outline-widget.css"}),` that lives parallel to the
component `,e.jsx(n.code,{children:"outline-widget.ts"}),". These component CSS files utilize ",e.jsx(n.a,{href:"https://postcss.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"PostCSS"}),` processing and a variety of plugins to handle various
features including implementing `,e.jsx(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind CSS"})," utility styles to keep the code clean and consistent."]}),`
`,e.jsxs(n.p,{children:["Lit utilizes the static ",e.jsx(n.code,{children:"styles"})," to contain any CSS required for a component."]}),`
`,e.jsxs(n.p,{children:["The following examples shows us using import to bring in styles from our ",e.jsx(n.code,{children:"outline-widget.css.lit.ts"})," file. Any CSS that is included should be wrapped in Lit’s ",e.jsx(n.code,{children:"css"}),` template literal.
This is where Outline applies additional logic to handle taking a standard CSS file like `,e.jsx(n.code,{children:"outline-widget.css"}),`,
and converts to `,e.jsx(n.code,{children:"outline-widget.css.lit.ts"})," which is then imported into the main component file, ",e.jsx(n.code,{children:"outline-widget.ts"})," as seen in the following code sample."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import componentStyles from './outline-widget.css.lit';
...

@customElement('outline-widget')
export class OutlineWidget extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  ...
}
`})}),`
`,e.jsx(n.h2,{id:"inheriting-styles",children:"Inheriting Styles"}),`
`,e.jsxs(n.p,{children:["Interestingly, the above sample is a component, ",e.jsx(n.code,{children:"OutlineWidget"}),", that extends ",e.jsx(n.code,{children:"OutlineElement"}),`.
This component is simply declaring the styles in `,e.jsx(n.code,{children:"OutlineWidget"}),`, and assumes zero style inheritance from the parent component.
Now, assume that `,e.jsx(n.code,{children:"OutlineElement"})," provides styles that either should or could be inherited by any component that extends it. If we want to include styles from the parent component, we need to ",e.jsx(n.a,{href:"https://lit.dev/docs/components/styles/#inheriting-styles-from-a-superclass",target:"_blank",rel:"nofollow noopener noreferrer",children:"inherit styles from the superclass"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import componentStyles from './outline-widget.css.lit';
...

@customElement('outline-widget')
export class OutlineWidget extends OutlineElement {
  static styles: CSSResultGroup = [ OutlineElement.styles, componentStyles ];
  ...
}
`})}),`
`,e.jsx(n.h2,{id:"inline-styles",children:"Inline Styles"}),`
`,e.jsxs(n.p,{children:["The following example shows both importing content from the default ",e.jsx(n.code,{children:"outline-widget.css.lit.ts"})," file as well as including inline css wrapped in the ",e.jsx(n.code,{children:"css"})," string literal provided by the ",e.jsx(n.code,{children:"lit"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { css } from 'lit';
import componentStyles from './outline-widget.css.lit';

@customElement('outline-widget')
export class OutlineWidget extends OutlineElement {
  static styles: CSSResultGroup = [
    componentStyles,
    css\\\`
      :host { display: block; }
      p { margin: 0; }
      h2 { color: \${this.color} }
    \\\`
  ];
  ...
}
`})}),`
`,e.jsxs(n.p,{children:["Above, we can see above, the ",e.jsx(n.code,{children:"${this.color}"}),` variable is being used to dynamically
set the color of the `,e.jsx(n.code,{children:"h2"})," element."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The same effect can be accomplished in the ",e.jsx(n.code,{children:"outline-widgets.css"}),` file by conditionally
applying custom classes to markup in the `,e.jsx(n.code,{children:"render"})," method that can be styled with standard CSS."]}),`
`]}),`
`,e.jsx(n.h2,{id:"styling-with-tailwind-css",children:"Styling with Tailwind CSS"}),`
`,e.jsxs(n.p,{children:[`Our components are built with the CSS architecture decoupled from the component functionality.
The component markup never utilizes the Tailwind utility classes that are available,
instead relying on the `,e.jsx(n.code,{children:".css"})," file itself to use the Tailwind ",e.jsx(n.code,{children:"@apply"}),` directive to attach
styles to a class or element.
This allows us to use as much (or little) of the Tailwind CSS structure as we want,
and have the ability to transition to other CSS frameworks or methods quickly and easily.`]}),`
`,e.jsxs(n.p,{children:["Below is an example of Tailwind classes from our ",e.jsx(n.code,{children:"outline-link.css"}),` file.
Notice how the `,e.jsx(n.code,{children:"@apply"}),` directive precedes a list of shorthand Tailwind classes.
Also note the `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:host",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.code,{children:":host"})})," and ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.code,{children:"::slotted"})})," selectors. These are very helpful when styling components."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:` a {
  @apply font-body transition-colors duration-300;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://tailwindcss.com/docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind CSS documentation"}),` is some of the best in the industry to find particular utility classes you may be looking to utililze in your styles.
Tailwind documentation should be referenced at every turn in order to understand the varying impact each utility class may have, and which ones are available.`]}),`
`,e.jsx(n.h2,{id:"styling-with-css-variables",children:"Styling with CSS Variables"}),`
`,e.jsxs(n.p,{children:["Below is an example of CSS Custom Property usage from our ",e.jsx(n.code,{children:"outline-link.css"}),` file.
In this instance, we have utilized 3 custom CSS variables to help us alter the color of a link when using the `,e.jsx(n.code,{children:"outline-link"}),` component.
The next section will discuss how and where those are declared or overwritten.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`a {
  color: var(--outline-link-color-default);
}
`})}),`
`,e.jsx(n.h2,{id:"css-variable-declaration",children:"CSS Variable Declaration"}),`
`,e.jsx(n.h3,{id:"global-project-variables",children:"Global project variables"}),`
`,e.jsxs(n.p,{children:["Outline defines all of its CSS Variables in ",e.jsx(n.code,{children:"outline.theme.css"}),". Many of these CSS variables are utilized by Tailwind CSS as can be seen in the ",e.jsx(n.code,{children:"tailwind.config.js"}),` file.
This means that if you use Tailwind utility classes, they are using the CSS Variables already associated with the design system, and our design tokens.
This ensures that you can adhere to brand guidelines and usage recommendations regardless of how you may choose to architect the CSS or a component or project.`]}),`
`,e.jsxs(n.p,{children:["At a project level, each consumer imports this ",e.jsx(n.code,{children:"outline.theme.css"}),` file globally.
This includes Storybook, our simple HTML consumer development environment, as well as Drupal.`]}),`
`,e.jsxs(n.p,{children:["Any project should consider adding a project specific CSS Variables file to overwrite only specific properties from Outline, without overriding the variables in ",e.jsx(n.code,{children:"outline.theme.css"}),`.
Again, each consumer would need to include this file, immediately following the inclusion of `,e.jsx(n.code,{children:"outline.theme.css"}),`.
However, this separation is only a suggestion, and in theory the `,e.jsx(n.code,{children:"outline.theme.css"})," file should be safe to be edited much like the ",e.jsx(n.code,{children:"outline.config.js"})," system configuration."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  ...
  /* Brand specific primary colors. */
  --blue-darken-1: #002536;
  --blue-darken-2: #00374e;
  --blue-main: #004e70;
  --blue-lighten-1: #38758f;
  --blue-lighten-2: #9ebcc9;
  --blue-lighten-3: #ccdce2;
  --blue-lighten-4: #e0eaee;
  --blue-lighten-5: #f0f4f6;
  ...
  /* Configuration values for outline-link. */
  --outline-link-color-default: var(--blue-darken-1);
  --outline-link-color-hover: var(--blue-lighten-1);
  --outline-link-color-focus: var(--blue-lighten-1);
  ...
}
`})}),`
`,e.jsxs(n.p,{children:["Note in the above example, the declaration of the ",e.jsx(n.code,{children:"--blue-responsible"}),` color set,
as well as the configuration for the `,e.jsx(n.code,{children:"outline-link"}),` component.
The first set declares the color values as the hex values,
and the next section associates link colors with a pre-existing CSS variable.`]}),`
`,e.jsx(n.h3,{id:"component-specific-variables",children:"Component-specific variables"}),`
`,e.jsxs(n.p,{children:[`When a component uses a CSS variable, it should be defined within that component and given a fallback value.
Variables are normally defined within a `,e.jsx(n.code,{children:"vars-COMPONENT.css"})," file within a ",e.jsx(n.code,{children:"css-variables"}),` subfolder of the component source.
However, using the `,e.jsx(n.code,{children:"css-variables"})," folder is no longer required."]}),`
`,e.jsxs(n.p,{children:["Component variables must be defined within a ",e.jsx(n.code,{children:":host"})," selector. When defining a variable that a project can override globally, the following naming convention should be used:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:host {
  --COMPONENT--[VARIANT]-[ELEMENT]-SELECTOR--computed: var(--COMPONENT--[VARIANT]-[ELEMENT]-SELECTOR, FALLBACK);
}
`})}),`
`,e.jsx(n.p,{children:"where"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"COMPONENT"})," is the name of the component."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"VARIANT"}),' is the optional component variant, such as "primary", "secondary", etc.']}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ELEMENT"})," is the optional HTML element, such as ",e.jsx(n.code,{children:"input"})," or ",e.jsx(n.code,{children:"h2"}),", etc"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SELECTOR"})," is the css property selector, with special characters replaced by a single hyphen, such as ",e.jsx(n.code,{children:"color"})," or ",e.jsx(n.code,{children:"bg-color"})," or ",e.jsx(n.code,{children:"border-cover-hover"})," ."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["States such as ",e.jsx(n.code,{children:"::hover"}),", ",e.jsx(n.code,{children:"::active"})," become ",e.jsx(n.code,{children:"-hover"})," and ",e.jsx(n.code,{children:"-active"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Selectors such as ",e.jsx(n.code,{children:"input[disabled] border-color"})," become ",e.jsx(n.code,{children:"input-disabled-border-color"})," for example, where ",e.jsx(n.code,{children:"input"})," might be optional if referencing multiple elements (input, textarea, select, etc)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Synonyms for properties such as using ",e.jsx(n.code,{children:"bg"})," for ",e.jsx(n.code,{children:"background"}),", ",e.jsx(n.code,{children:"weight"})," or ",e.jsx(n.code,{children:"fw"})," for ",e.jsx(n.code,{children:"font-weight"}),", ",e.jsx(n.code,{children:"radius"})," for ",e.jsx(n.code,{children:"border-radius"}),` etc, are allowed when the intent is obvious.
But avoid when confusing such as with colors (border, background, etc). `,e.jsx(n.code,{children:"color"})," refers to ",e.jsx(n.em,{children:"text"})," color since that is the normal CSS property name. See the variable names in Tailwind CSS for other examples. (might update this ADR in the future with an exact list of allowed abbreviations)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"--COMPONENT--[VARIANT]-[ELEMENT]-SELECTOR"})," variable is the value specified in the ",e.jsx(n.code,{children:"outline.theme.css"})," or project-specific globals file."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"--COMPONENT--[VARIANT]-[ELEMENT]-SELECTOR--computed"})," is the variable to actually use in your ",e.jsx(n.code,{children:"COMPONENT.css"})," file."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FALLBACK"})," is the default value of the variable, either as a hardcoded css value, or a ",e.jsx(n.code,{children:"var(--VARNAME)"}),` to some other variable defined globally.
You must ensure that the FALLBACK value is always defined or the browser will treat rules using this variable as invalid css.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["NOTE: The reason for the ",e.jsx(n.code,{children:"--computed"}),` suffix is because CSS variables cannot redefine themselves. And the above naming convention keeps the fallback
value in a single location in the variable definition rather than being used multiple times within the `,e.jsx(n.code,{children:"COMPONENT.css"})," file itself."]}),`
`,e.jsxs(n.p,{children:[`Outline components should always declare all component-specific variables using the guidance above.
Project-specific components are encouraged to declare all variables but if a variable is only used in a single place within the `,e.jsx(n.code,{children:"COMPONENT.css"}),` then
using the `,e.jsx(n.code,{children:"--COMPONENT--[VARIANT]-[ELEMENT]-SELECTOR"})," global variable without making a ",e.jsx(n.code,{children:"--computed"}),` version is allowed as long as the
variable always has a global value or fallback is specified.`]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:host {
  --outline-link--color--computed: var(--outline-link--color, var(--primary-color));
}

a {
  color: var(--outline-link--color--computed)
}
`})}),`
`,e.jsx(n.h2,{id:"component-style-generation",children:"Component Style Generation"}),`
`,e.jsx(n.h4,{id:"todo-migrate-this-to-tooling-docs",children:"TODO: Migrate this to Tooling Docs"}),`
`,e.jsxs(n.p,{children:["We have talked in previous sections about how the ",e.jsx(n.code,{children:".css"})," file will get compiled to a ",e.jsx(n.code,{children:".css.lit.ts"}),` file.
Let's take a look at a sample of this in action. We will use the `,e.jsx(n.code,{children:"outline-link"})," component again."]}),`
`,e.jsx(n.p,{children:"In this example, we see the combination of the samples we used above, including both Tailwind CSS classes and custom CSS Variables for styling."}),`
`,e.jsx(n.h3,{id:"outline-widgetcss",children:e.jsx(n.code,{children:"outline-widget.css"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:host, a, ::slotted(a) {
  color: var(--outline-link-color-default);
}
`})}),`
`,e.jsx(n.h3,{id:"outline-widgetcsslitts",children:e.jsx(n.code,{children:"outline-widget.css.lit.ts"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The following generated file is ignored by default in ",e.jsx(n.code,{children:".gitignore"}),", and is generated during all build procedures."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { css } from 'lit';
export default css\`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
:host,
a,
::slotted(a){
  color:var(--outline-link--color);
}
\`;
`})}),`
`,e.jsxs(n.p,{children:["The above ",e.jsx(n.code,{children:".ts"})," file is now what we include directly to our ",e.jsx(n.code,{children:"outline-link.ts"}),` component,
and apply to the `,e.jsx(n.code,{children:"static styles"}),` array. It includes an initial section, applied to all Outline components,
as well as the second sections which are the styles defined by the `,e.jsx(n.code,{children:".css"})," file above."]}),`
`,e.jsx(n.h2,{id:"styling-slots",children:"Styling Slots"}),`
`,e.jsxs(n.p,{children:["CSS styles from external files will have priority over CSS styles that are done via the ",e.jsx(n.code,{children:":host"}),` selector.
Normally you can only target top-level elements in a slot with css (example `,e.jsx(n.code,{children:"::slotted(ul)"}),")."]}),`
`,e.jsx(n.p,{children:"Since we often use Drupal as a consumer, we cannot control the markup that enters slots. The solutions listed below are based on this premise and allow us to style slot content in a similar way to how we style the component."}),`
`,e.jsx(n.p,{children:"When you need to style deeper elements within a slot, there are two approaches:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Copy the slot content into the Shadow DOM via a SlotController. For more information on this, see ",e.jsx(n.a,{href:"/docs/documentation-guides-component-development-coding-guide-standards-slots--documentation",children:"Slots"})]}),`
`,e.jsx(n.li,{children:'The slot content can be styled via "global" CSS rules.'}),`
`]}),`
`,e.jsx(n.h2,{id:"stylecontroller-controller",children:"StyleController Controller"}),`
`,e.jsx(n.p,{children:"Scoped CSS rules can be created in a number of ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Added to the consumer's global style sheet."})," However, you cannot ",e.jsx(n.code,{children:"@import"})," an existing stylesheet within a scoping selector such as the component name, making it difficult to reuse existing styles in the design system without duplicating styling."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scoped at build time."})," Outline supports creating a file named ",e.jsx(n.code,{children:"SCOPE.global.css"})," where ",e.jsx(n.code,{children:"SCOPE"}),` is the scope selector
you wish to add.  For example, `,e.jsx(n.code,{children:"my-component.global.css"})," will wrap the css rules with the ",e.jsx(n.code,{children:"my-component {}"}),` selector.
The build scripts convert this file to `,e.jsx(n.code,{children:"SCOPE.global.scoped.css"})," and ",e.jsx(n.code,{children:"SCOPE.global.scoped.css.lit.ts"}),` which can be
imported from another css file, or within your component.ts file. This scoped css can be injected into the
global stylesheet using the `,e.jsx(n.code,{children:"StyleController"}),` controller as discussed below. This method increases the size of
the design system JS file to include the scoped css.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["An example of adding light DOM scoped at build time is the ",e.jsx(n.code,{children:"outline-form"})," component."]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scoped at run time."})," The ",e.jsx(n.code,{children:"StyleController"}),` controller mentioned below can automatically scope css rules as they are
added to the global stylesheet. This method does not increase the size of the design system, but adds a small
amount of javascript processing time when the component is rendered.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"using-stylecontroller-to-inject-global-styles",children:["Using ",e.jsx(n.code,{children:"StyleController"})," to inject global styles"]}),`
`,e.jsxs(n.p,{children:[`Rather than relying on the consumer to add global styles, the component itself can inject styles into the global stylesheet
using the `,e.jsx(n.code,{children:"StyleController"}),` controller. This controller accepts string of CSS and an optional "scope" selector
and creates a `,e.jsx(n.code,{children:"style"})," element in the ",e.jsx(n.code,{children:"body"})," element of the page containing the scoped CSS."]}),`
`,e.jsxs(n.p,{children:["Example using styles scoped at build time (",e.jsx(n.code,{children:"*.global.css"})," files):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import globalStyles from './my-component.global.scoped.css.lit';
import { StyleController } from '@phase2/outline-core';
...
  lightDomStyles = new StyleController(this, [globalStyles]);
`})}),`
`,e.jsx(n.p,{children:"Example using styles scoped at run time:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import componentStyles from './my-component.css.lit';
import { StyleController } from '@phase2/outline-core';
...
  lightDomStyles = new StyleController(this, [componentStyles], this.tagName.toLowerCase());
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["NOTE: When using build-time scoping, you can scope using a class instead of the component name if needed by naming the file ",e.jsx(n.code,{children:".CLASS.global.css"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["NOTE: Light DOM styles ",e.jsx(n.em,{children:"can"})," be overridden by the consumer and CSS rules with a higher precedence can also override the basic scoping. You can handle this in the component by creating more specific CSS selectors if you don't have control over the consumer styling causing the conflict."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["NOTE: You can freely mix light DOM styling with normal component styling. For example if styling a ",e.jsx(n.code,{children:"ul/li"})," list, the ",e.jsx(n.code,{children:"ul"})," style can be within the component normally using ",e.jsx(n.code,{children:"::slotted(ul)"})," and the style for the ",e.jsx(n.code,{children:"li"})," can be added to a ",e.jsx(n.code,{children:"my-component.global.css"})," file and injected via ",e.jsx(n.code,{children:"lightDomStyles"}),". This helps minimize the bleeding of consumer styles into the component."]}),`
`]})]})}function w(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{w as default};
//# sourceMappingURL=03-styles-a5d74dd7.js.map
