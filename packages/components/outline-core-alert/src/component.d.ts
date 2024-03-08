
/**
 * @file
 * This is a TypeScript declaration file. It provides type checking and autocompletion
 * for TypeScript files. It can be used as a reference for future components.
 * 
 * @see {@link https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules | TypeScript Ambient Modules}
 */

/**
 * This declaration is for importing CSS files as a string.
 * 
 * This is made possible by the `?inline` query parameter in Vite, which allows 
 * the CSS file to be imported as a string instead of being injected into a `<style>` tag. 
 * This gives us the flexibility to use the CSS content in any way we see fit within our code.
 * 
 * @see {@link https://vitejs.dev/guide/features.html#disabling-css-injection-into-the-page | Disabling CSS injection into the page}
 */
declare module '*.css?inline' {
  const content: string;
  export default content;
}
