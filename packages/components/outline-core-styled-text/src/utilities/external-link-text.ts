/**
 * add external link message.
 */
export function externalLinkText(el: HTMLElement) {
  if (el.textContent) {
    const externalLinkText = document.createElement('span');
    externalLinkText.classList.add('visually-hidden');
    externalLinkText.innerHTML = '(opens in a new window)';
    el.append(externalLinkText);
  }
}
