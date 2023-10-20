import{x as o}from"./lit-element-411ba165.js";import{l as i}from"./if-defined-93280f6e.js";import"./outline-icon-6c6ddb2f.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./unsafe-html-3f86ca9e.js";const a={libraries:{bootstrap:!0,boxicons:!0,fontawesome:!0,heroicons:!0,iconoir:!0,ionicons:!0,jam:!0,lucide:!0,material:!0,remix:!0,unicons:!0},defaults:{library:"bootstrap",size:"16px",icon:"chevron-right"}},n={title:"Media/Outline Icon",component:"outline-icon",tags:["docsPage"],parameters:{docs:{description:{component:`
## Introduction

The \`outline-icon\` component will render all manner of icons for your component(s) and application. 

## Internal Icon Libraries
- \`system\`: The default icon library for the Outline core system.
- \`custom\`: A custom icon library of SVGs provided to the \`src/assets/svg\` directory.

## Custom CDN Library Integrations

[Bootstrap](#bootstrap), [Boxicons](#boxicons), [Font Awesome (Free)](#font-awesome-free),
[Heroicons](#heroicons), [Iconoir](#iconoir), [Ionicons](#ionicons),
[Jam](#jam), [Lucide](#lucide), [Material](#material), [Remix](#remix),
[Unicons](#unicons) and even more possible via custom CDN integration and icon resolver.
        `}}},argTypes:{icon:{name:"name",table:{category:"Properties",defaultValue:{summary:a.defaults.icon}},description:"The name of the icon to draw. Refer to the proper naming of icons from the library you are using.",control:{type:"text"}},size:{name:"size",table:{category:"Properties",defaultValue:{summary:a.defaults.size}},description:"The size of icon. Required when `library === 'system'`. Omit for other libraries to allow parent text size to control icon sizing. Valid values include `px`, `rem`, `em`, `%`, `vw`, and `vh`.",control:{type:"text"}},library:{name:"library",table:{category:"Properties",defaultValue:{summary:"system"}},description:"The icon library to use. Custom libraries can be registered with `outline.registerIconLibrary()`.",control:{type:"select"},options:["system","custom","bootstrap","boxicon","heroicons","iconoir","ionicons","jam","lucide","material","remix","unicons"]},sizeEnabled:{description:"If `false`, the size of the icon will be controlled by the parent text size. If `true`, the size will be controlled by the `size` property.",control:{type:"boolean"},name:"Enable Size Property",table:{category:"Custom Controls",defaultValue:{summary:"true"}}}},args:{icon:a.defaults.icon,library:a.defaults.library?a.defaults.library:"system",size:a.defaults.size?a.defaults.size:null,sizeEnabled:!0}},l={library:{table:{disable:!0}},icon:{table:{disable:!0}}},ce=[s=>o`
<div class="flex flex-row flex-wrap">
${s()}
</div> `],me=(s={})=>{const e={...n.args,...s};return e.size=e.size&&e.sizeEnabled?e.size:null,o`
<outline-icon 
  name="${i(e.icon)}"
  library="${i(e.library)}"
  size="${i(e.size)}"
></outline-icon>
`},x=(s={})=>me(s);x.args={size:"64px"};x.decorators=ce;const ue=(s={})=>{const e={...n.args,...s};return o`
<outline-icon name="chevron-up" library="system" size="${i(e.size)}"></outline-icon>
<outline-icon name="chevron-down" library="system" size="${i(e.size)}"></outline-icon>
<outline-icon name="chevron-left" library="system" size="${i(e.size)}"></outline-icon>
<outline-icon name="chevron-right" library="system" size="${i(e.size)}"></outline-icon>
<outline-icon name="check-lg" library="system" size="${i(e.size)}"></outline-icon>
<outline-icon name="x" library="system" size="${i(e.size)}"></outline-icon>
<outline-icon name="x-circle-fill" library="system" size="${i(e.size)}"></outline-icon>
`},r=(s={})=>ue(s);r.argTypes=l;r.args={size:"48px",sizeEnabled:!0};r.parameters={docs:{description:{story:`
## The \`system\` icon library.

The system library contains only the icons used by Outline components.
The icons are hard-coded as data URIs into the icon resolver to ensure their availability.

This method is ideal for a small library of icons where you prefer to ensure "hard coded" availability of the icons.
`}}};r.decorators=ce;const be=(s={})=>{const e={...n.args,...s};return o`
<div class="flex flex-row flex-wrap">
  <outline-icon library="custom" name="calendar" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="custom" name="clock" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},t=(s={})=>be(s);t.argTypes=l;t.args={size:"48px",library:"custom",sizeEnabled:!0};t.parameters={docs:{description:{story:"\n## The `custom` icon library.\n\nThe `custom` library is a dynamic icon library that can be used to create custom icons.\nIt uses the `src/assets/svg` directory to store the icons. \n"}}};const ze=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="bootstrap" name="badge-4k" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="badge-8k" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-right-square" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-down-circle" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="bar-chart" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="image" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="x-square" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="bootstrap" name="badge-4k-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="badge-8k-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-right-square-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-down-circle-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="bar-chart-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="image-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="x-square-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},c=(s={})=>ze(s);c.argTypes=l;c.args={size:"48px",sizeEnabled:!0};c.parameters={docs:{description:{story:`
## The \`bootstrap\` icon library.

The \`bootstrap\` library uses the jsDelivr CDN to implement the [Bootstrap Icons library](https://icons.getbootstrap.com/).
Please see the icon list on their site for the list of available icons.
`}}};const pe=(s={})=>{const e={...n.args,...s};return o`

<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bx-bot" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-cookie" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-joystick" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-save" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-server" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-wine" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bxs-bot" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-cookie" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-joystick" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-save" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-server" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-wine" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Brands</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bxl-apple" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-chrome" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-edge" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-firefox" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-opera" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-microsoft" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},m=(s={})=>pe(s);m.argTypes=l;m.args={size:"48px",sizeEnabled:!0};m.parameters={docs:{description:{story:`
## The \`boxicons\` icon library.

The \`boxicons\` library uses the jsDelivr CDN to implement [Boxicons](https://boxicons.com/).
Please see the icon list on their site for the list of available icons.
`}}};const de=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="far-bell" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-comment" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-hand-point-right" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-hdd" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-heart" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-star" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="fas-archive" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-book" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-chess-knight" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-dice" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-pizza-slice" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-scroll" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Brands</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="fab-apple" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-chrome" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-edge" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-firefox" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-opera" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-microsoft" size="${i(e.size)}" class="mr-2"></outline-icon>   
</div>
`},u=(s={})=>de(s);u.argTypes=l;u.args={size:"48px",sizeEnabled:!0};u.parameters={docs:{description:{story:`
## The \`fa\` icon library.

The \`fa\` library uses the jsDelivr CDN to implement [Font Awesome (free)](https://fontawesome.com).
Please see the [icon list](https://fontawesome.com/icons) on their site for the list of available icons.
`}}};const ye=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="heroicons" name="chat" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="cloud" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="cog" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="document-text" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="gift" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="volume-up" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},b=(s={})=>ye(s);b.argTypes=l;b.args={size:"48px",sizeEnabled:!0};b.parameters={docs:{description:{story:`
## The \`heroicons\` icon library.

The \`heroicons\` library uses the jsDelivr CDN to implement [Heroicons](https://heroicons.com/).
Please see the icon list on their site for the list of available icons.
`}}};const he=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="iconoir" name="check-circled-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="drawer" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="keyframes" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="headset-help" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="color-picker" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="wifi" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},z=(s={})=>he(s);z.argTypes=l;z.args={size:"48px",sizeEnabled:!0};z.parameters={docs:{description:{story:`
## The \`iconoir\` icon library.

The \`iconoir\` library uses the jsDelivr CDN to implement [Iconoir](https://iconoir.com/).
Please see the icon list on their site for the list of available icons.
`}}};const fe=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning-outline" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Sharp</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm-sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football-sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug-sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble-sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings-sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning-sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},p=(s={})=>fe(s);p.argTypes=l;p.args={size:"48px",sizeEnabled:!0};p.parameters={docs:{description:{story:`
## The \`ionicons\` icon library.

The \`ionicons\` library uses the jsDelivr CDN to implement [Ionicons](https://ionic.io/ionicons).
Please see the icon list on their site for the list of available icons.
`}}};const ge=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Stroke</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="jam" name="calendar" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="camera" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="filter" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="leaf" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="picture" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="set-square" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="jam" name="calendar-f" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="camera-f" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="filter-f" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="leaf-f" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="picture-f" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="set-square-f" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},d=(s={})=>ge(s);d.argTypes=l;d.args={size:"48px",sizeEnabled:!0};d.parameters={docs:{description:{story:`
## The \`jam\` icon library.

The \`jam\` library uses the jsDelivr CDN to implement [Jam Icons](https://jam-icons.com/).
Please see the icon list on their site for the list of available icons.
`}}};const xe=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="lucide" name="feather" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="pie-chart" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="settings" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="map-pin" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="printer" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="shopping-cart" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},y=(s={})=>xe(s);y.argTypes=l;y.args={size:"48px",sizeEnabled:!0};y.parameters={docs:{description:{story:`
## The \`lucide\` icon library.

The \`lucide\` library uses the jsDelivr CDN to implement [Lucide Icons](https://lucide.dev/).
Please see the icon list on their site for the list of available icons.
`}}};const ve=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Round</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications_round" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email_round" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete_round" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up_round" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings_round" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket_round" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Sharp</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications_sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email_sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete_sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up_sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings_sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket_sharp" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},h=(s={})=>ve(s);h.argTypes=l;h.args={size:"48px",sizeEnabled:!0};h.parameters={docs:{description:{story:`
## The \`material\` icon library.

The \`material\` library uses the jsDelivr CDN to implement [Material Icons](https://mui.com/components/material-icons/).
Please see the icon list on their site for the list of available icons.
`}}};const $e=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Line</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="remix" name="business/cloud-line" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="design/brush-line" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="business/pie-chart-line" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="development/bug-line" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="media/image-line" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="system/alert-line" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="remix" name="business/cloud-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="design/brush-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="business/pie-chart-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="development/bug-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="media/image-fill" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="system/alert-fill" size="${i(e.size)}" class="mr-2"></outline-icon> 
</div>
`},f=(s={})=>$e(s);f.argTypes=l;f.args={size:"48px",sizeEnabled:!0};f.parameters={docs:{description:{story:`
## The \`remix\` icon library.

The \`remix\` library uses the jsDelivr CDN to implement [Remix Icons](http://remixicon.com/).
Please see the icon list on their site for the list of available icons.
`}}};const we=(s={})=>{const e={...n.args,...s};return o`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="unicons" name="clock" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="graph-bar" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="padlock" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="polygon" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="rocket" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="star" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
<outline-icon library="unicons" name="clock-s" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="graph-bar-s" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="padlock-s" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="polygon-s" size="${i(e.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="rocket-s" size="${i(e.size)}" class="mr-2"></outline-icon>  
  <outline-icon library="unicons" name="star-s" size="${i(e.size)}" class="mr-2"></outline-icon>
</div>
`},g=(s={})=>we(s);g.argTypes=l;g.args={size:"48px",sizeEnabled:!0};g.parameters={docs:{description:{story:`
## The \`unicons\` icon library.

The \`unicons\` library uses the jsDelivr CDN to implement [Unicons](https://iconscout.com/unicons).
Please see the icon list on their site for the list of available icons.
`}}};var v,$,w;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:"(customArguments = {}) => DefaultTemplate(customArguments)",...(w=($=x.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var T,I,A;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:"(customArguments = {}) => SystemTemplate(customArguments)",...(A=(I=r.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var j,S,D;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"(customArguments = {}) => CustomTemplate(customArguments)",...(D=(S=t.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var k,C,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"(customArguments = {}) => BootstrapIconsTemplate(customArguments)",...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var E,P,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"(customArguments = {}) => BoxiconsTemplate(customArguments)",...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var R,N,F;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"(customArguments = {}) => FaTemplate(customArguments)",...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var L,O,q;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:"(customArguments = {}) => HeroiconsTemplate(customArguments)",...(q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var M,U,H;z.parameters={...z.parameters,docs:{...(M=z.parameters)==null?void 0:M.docs,source:{originalSource:"(customArguments = {}) => IconoirTemplate(customArguments)",...(H=(U=z.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var J,V,G;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:"(customArguments = {}) => IonIconsTemplate(customArguments)",...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,Q,W;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:"(customArguments = {}) => JamIconsTemplate(customArguments)",...(W=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:"(customArguments = {}) => LucideTemplate(customArguments)",...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ie,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:"(customArguments = {}) => MaterialIconsTemplate(customArguments)",...(se=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,ne,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:"(customArguments = {}) => RemixIconsTemplate(customArguments)",...(le=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var re,ae,te;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:"(customArguments = {}) => UniconsTemplate(customArguments)",...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Ee=["AnIcon","SystemIcons","CustomIcons","Bootstrap","Boxicons","FontAwesomeFree","Heroicons","Iconoir","Ionicons","Jam","Lucide","Material","Remix","Unicons"];export{x as AnIcon,c as Bootstrap,m as Boxicons,t as CustomIcons,u as FontAwesomeFree,b as Heroicons,z as Iconoir,p as Ionicons,d as Jam,y as Lucide,h as Material,f as Remix,r as SystemIcons,g as Unicons,Ee as __namedExportsOrder,n as default};
//# sourceMappingURL=outline-icon.stories-826b7055.js.map
