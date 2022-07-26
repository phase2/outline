import { css } from 'lit';
export default css`
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
  :host([aria-hidden='true']),
  [aria-hidden='true'],
  .visually-hidden {
    position: absolute !important;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    word-wrap: normal;
  }
  /* Apply component specific CSS */
  @media (min-width: 640px) {
    :host {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    :host {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    :host {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    :host {
      max-width: 1280px;
    }
  }
  @media (min-width: 1440px) {
    :host {
      max-width: 1440px;
    }
  }
  @media (min-width: 2180px) {
    :host {
      max-width: 2180px;
    }
  }
  :host {
    display: block;
    max-width: 100%;
    font-family: var(--font-body);
    padding-top: var(--outline-container--default-padding-y);
    padding-top: var(
      --outline-container-padding-y,
      var(--outline-container--default-padding-y)
    );
    padding-right: var(--outline-container--default-padding-x);
    padding-right: var(
      --outline-container-padding-x,
      var(--outline-container--default-padding-x)
    );
    padding-bottom: var(--outline-container--default-padding-y);
    padding-bottom: var(
      --outline-container-padding-y,
      var(--outline-container--default-padding-y)
    );
    padding-left: var(--outline-container--default-padding-x);
    padding-left: var(
      --outline-container-padding-x,
      var(--outline-container--default-padding-x)
    );
  }

  :host(:not([x-padding])) {
    padding-left: 0;
    padding-right: 0;
  }

  :host(:not([y-padding])) {
    padding-top: 0;
    padding-bottom: 0;
  }

  :host([full-bleed]) {
    max-width: 100%;
  }

  :host([container-align]),
  :host([container-align='center']) {
    margin-left: auto;
    margin-right: auto;
  }

  :host([container-align='left']) {
    margin-left: 0;
    margin-right: auto;
  }

  :host([container-align='right']) {
    margin-left: auto;
    margin-right: 0;
  }
`;
//# sourceMappingURL=outline-container.css.lit.js.map
