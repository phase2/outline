import { ReactiveController, CSSResult } from 'lit';

export class AdoptedStyleSheets implements ReactiveController {
  private static styleSheetMap = new Map<string, CSSStyleSheet>();
  private documentSheet: CSSStyleSheet;

  constructor(globalStyles: CSSResult) {
    const cssText = globalStyles.cssText;
    if (!AdoptedStyleSheets.styleSheetMap.has(cssText)) {
      const newSheet = new CSSStyleSheet();
      newSheet.replaceSync(cssText);
      AdoptedStyleSheets.styleSheetMap.set(cssText, newSheet);
    }
    this.documentSheet =
      AdoptedStyleSheets.styleSheetMap.get(cssText) || new CSSStyleSheet();
  }

  hostConnected() {
    if (!document.adoptedStyleSheets.includes(this.documentSheet)) {
      document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        this.documentSheet,
      ];
    }
  }

  hostDisconnected() {
    if (document.adoptedStyleSheets.includes(this.documentSheet)) {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        sheet => sheet !== this.documentSheet
      );
    }
  }
}
