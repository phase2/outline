/**
 * Wraps the last word in an element's textContent with a span.last-word.
 */
export function wrapLastWord(el: HTMLElement) {
  // Check if the element contains an image
  if (el.querySelector('img') || el.querySelector('.last-word')) {
    return;
  }

  if (el.textContent) {
    const textContent = el.innerHTML.trimEnd().split(' ');
    const lastWord = textContent.pop();
    const updatedContent =
      textContent.join(' ') + ` <span class='last-word'>${lastWord}</span>`;
    el.innerHTML = updatedContent.trim();
  }
}
