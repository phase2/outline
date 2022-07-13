declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'lit-element-state' {
  import { LitElement } from 'lit';

  export function observeState(baseClass: typeof LitElement): typeof LitElement;

  // TODO: Properly type stateVar()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function stateVar(): any;

  class LitState {}
}
