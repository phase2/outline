/**
 * Checks the file type of a given hyperlink element and applies appropriate class.
 *
 * This function inspects the "href" and "download" attributes of the provided hyperlink element
 * to determine the file type. If the file type is a PDF (Portable Document Format), the function
 * adds the CSS class "pdf-link" to the element. If the file type is one of "eml", "pptx", or "docx",
 * the function adds the CSS class "file-link" to the element.
 *
 * @param {HTMLElement} link - The hyperlink element to check for the file type.
 * @returns {string|undefined} - Returns a string representing the file type ("pdf" or "file"),
 *                              or undefined if the file type is not recognized.
 *
 */
export function checkFileType(link: HTMLElement) {
  if (link?.querySelector('img')) {
    return;
  }

  const href = link?.getAttribute('href');

  if (!href) {
    return;
  }

  const download = link?.getAttribute('download');

  if (href.includes('.pdf') || (download && download.includes('.pdf'))) {
    link?.classList.add('pdf-link');
    return 'pdf';
  } else if (
    href.match(/\.(ppsx|pptx|pptm|potx)$/i) ||
    (download && download.match(/\.(ppsx|pptx|pptm|potx)$/i))
  ) {
    link?.classList.add('ppt-link');
    return 'ppt';
  } else if (
    href.match(/\.(eml|docx|msg)$/i) ||
    (download && download.match(/\.(eml|docx|msg)$/i))
  ) {
    link?.classList.add('file-link');
    return 'file';
  }

  return;
}
