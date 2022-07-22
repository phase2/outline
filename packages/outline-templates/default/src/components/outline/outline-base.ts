import { OutlineContainer } from '@phase2/outline-container';
import { OutlineGrid, OutlineColumn } from '@phase2/outline-grid';
import { OutlineLink } from '@phase2/outline-link';
import { OutlineCodeBlock } from '@phase2/outline-code-block';

new OutlineContainer();
new OutlineGrid();
new OutlineColumn();
new OutlineLink();
new OutlineCodeBlock();

declare global {
  interface HTMLElementTagNameMap {
    'outline-container': OutlineContainer;
    'outline-grid': OutlineGrid;
    'outline-link': OutlineLink;
    'outline-code-block': OutlineCodeBlock;
    'outline-column': OutlineColumn;
  }
}
