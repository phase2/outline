import { html, TemplateResult } from 'lit';
import './form-submit-test';

const configuration = {
  title: 'Tests/Bubble Events/Submit',
  component: 'form-submit-test',
};

export default configuration;

export const Submit = (): TemplateResult => {
  return html`
    <script>
      document.querySelector('body').addEventListener('submit', (event) => {
        event.sourceEvent.preventDefault();
        console.log('light dom event', event);
        console.log('source event', event.sourceEvent);
        console.log('light dom aggregated composed path', event.aggregatedComposedPath());
      });
    </script>
    <form-submit-test></form-submit-test>
  `;
};
