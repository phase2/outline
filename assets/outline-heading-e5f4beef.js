import{n as f,o as m}from"./static-0503aeb3.js";import{o as v}from"./class-map-aeb7fbb6.js";import{O as x,e as p}from"./screen-size-controller-4280a32a.js";import{n as s}from"./property-f36ea729.js";import{M as g}from"./mobile-controller-f2865d76.js";import{i as u}from"./lit-element-411ba165.js";const d=u`
/* Apply component specific CSS */
:host {

    display: block
}

h1, h2, h3, h4, h5, h6 {

    margin: 0px;

    margin-bottom: 1rem
}

h1 {

    font-size: var(--fs-h1-small);

    line-height: var(--lh-h1-small)
}

@media (min-width: 768px) {

    h1 {

        font-size: var(--fs-h1-medium);

        line-height: var(--lh-h1-medium)
    }
}

@media (min-width: 1024px) {

    h1 {

        font-size: var(--fs-h1);

        line-height: var(--lh-h1)
    }
}

h2 {

    font-size: var(--fs-h2-small);

    line-height: var(--lh-h2-small)
}

@media (min-width: 768px) {

    h2 {

        font-size: var(--fs-h2-medium);

        line-height: var(--lh-h2-medium)
    }
}

@media (min-width: 1024px) {

    h2 {

        font-size: var(--fs-h2);

        line-height: var(--lh-h2)
    }
}

h3 {

    font-size: var(--fs-h3-small);

    line-height: var(--lh-h3-small)
}

@media (min-width: 768px) {

    h3 {

        font-size: var(--fs-h3-medium);

        line-height: var(--lh-h3-medium)
    }
}

@media (min-width: 1024px) {

    h3 {

        font-size: var(--fs-h3);

        line-height: var(--lh-h3)
    }
}

h4 {

    font-size: var(--fs-h4-small);

    line-height: var(--lh-h4-small)
}

@media (min-width: 768px) {

    h4 {

        font-size: var(--fs-h4-medium);

        line-height: var(--lh-h4-medium)
    }
}

@media (min-width: 1024px) {

    h4 {

        font-size: var(--fs-h4);

        line-height: var(--lh-h4)
    }
}

h5 {

    font-size: var(--fs-h5-small);

    line-height: var(--lh-h5-small)
}

@media (min-width: 768px) {

    h5 {

        font-size: var(--fs-h5-medium);

        line-height: var(--lh-h5-medium)
    }
}

@media (min-width: 1024px) {

    h5 {

        font-size: var(--fs-h5);

        line-height: var(--lh-h5)
    }
}

h6 {

    font-size: var(--fs-h6-small);

    line-height: var(--lh-h6-small)
}

@media (min-width: 768px) {

    h6 {

        font-size: var(--fs-h6-medium);

        line-height: var(--lh-h6-medium)
    }
}

@media (min-width: 1024px) {

    h6 {

        font-size: var(--fs-h6);

        line-height: var(--lh-h6)
    }
}

.outline-text--base {

    font-size: var(--fs-base) !important;

    line-height: var(--lh-base) !important
}

.outline-text--xs {

    font-size: var(--fs-xs) !important;

    line-height: var(--lh-xs) !important
}

.outline-text--sm {

    font-size: var(--fs-sm) !important;

    line-height: var(--lh-sm) !important
}

.outline-text--lg {

    font-size: var(--fs-lg) !important;

    line-height: var(--lh-lg) !important
}

.outline-text--lg.mobile {

    font-size: var(--fs-base) !important;

    line-height: var(--lh-base) !important
}

.outline-text--xl {

    font-size: var(--fs-xl) !important;

    line-height: var(--lh-xl) !important
}

.outline-text--xl.mobile {

    font-size: var(--fs-base) !important;

    line-height: var(--lh-base) !important
}

.outline-text--2xl {

    font-size: var(--fs-2xl) !important;

    line-height: var(--lh-2xl) !important
}

.outline-text--2xl.mobile {

    font-size: var(--fs-lg) !important;

    line-height: var(--lh-lg) !important
}

.outline-text--3xl {

    font-size: var(--fs-3xl) !important;

    line-height: var(--lh-3xl) !important
}

.outline-text--3xl.mobile {

    font-size: var(--fs-lg) !important;

    line-height: var(--lh-lg) !important
}

.outline-text--4xl {

    font-size: var(--fs-4xl) !important;

    line-height: var(--lh-4xl) !important
}

.outline-text--4xl.mobile {

    font-size: var(--fs-xl) !important;

    line-height: var(--lh-xl) !important
}

.outline-text--5xl {

    font-size: var(--fs-5xl) !important;

    line-height: var(--lh-5xl) !important
}

.outline-text--5xl.mobile {

    font-size: var(--fs-2xl) !important;

    line-height: var(--lh-2xl) !important
}

.outline-text--6xl {

    font-size: var(--fs-6xl) !important;

    line-height: var(--lh-6xl) !important
}

.outline-text--6xl.mobile {

    font-size: var(--fs-3xl) !important;

    line-height: var(--lh-3xl) !important
}

.outline-text--7xl {

    font-size: var(--fs-7xl) !important;

    line-height: var(--lh-7xl) !important
}

.outline-text--7xl.mobile {

    font-size: var(--fs-4xl) !important;

    line-height: var(--lh-4xl) !important
}

.outline-text--8xl {

    font-size: var(--fs-8xl) !important;

    line-height: var(--lh-8xl) !important
}

.outline-text--8xl.mobile {

    font-size: var(--fs-5xl) !important;

    line-height: var(--lh-5xl) !important
}

.outline-text--9xl {

    font-size: var(--fs-9xl) !important;

    line-height: var(--lh-9lx) !important
}

.outline-text--9xl.mobile {

    font-size: var(--fs-6xl) !important;

    line-height: var(--lh-6xl) !important
}

.outline-font--thin {

    font-weight: var(--fw-extralight)
}

.outline-font--extralight {

    font-weight: var(--fw-thin)
}

.outline-font--light {

    font-weight: var(--fw-light)
}

.outline-font--normal {

    font-weight: var(--fw-normal)
}

.outline-font--semibold {

    font-weight: var(--fw-semibold)
}

.outline-font--bold {

    font-weight: var(--fw-bold)
}

.outline-font--extrabold {

    font-weight: var(--fw-extrabold)
}

.outline-font--black {

    font-weight: var(--fw-black)
}
`;var z=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(i,l,o,n)=>{for(var t=n>1?void 0:n?b(l,o):l,r=i.length-1,a;r>=0;r--)(a=i[r])&&(t=(n?a(l,o,t):a(t))||t);return n&&t&&z(l,o,t),t};let e=class extends x{constructor(){super(...arguments),this.mobileController=new g(this),this.level="h2",this.levelStyle="bold"}render(){const i={"outline-text":!0,[`outline-text--${this.levelSize}`]:this.levelSize?!0:"",[`outline-font--${this.levelStyle}`]:!0,mobile:this.mobileController.isMobile};return f`
      <${m(this.level)} class=${v(i)}>
        <slot></slot>
      </${m(this.level)}>`}};e.styles=[d];h([s({type:String,reflect:!0,attribute:"level"})],e.prototype,"level",2);h([s({type:String,reflect:!0,attribute:"level-size"})],e.prototype,"levelSize",2);h([s({type:String,reflect:!0,attribute:"level-style"})],e.prototype,"levelStyle",2);e=h([p("outline-heading")],e);
//# sourceMappingURL=outline-heading-e5f4beef.js.map
