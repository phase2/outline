import { html, TemplateResult } from 'lit';
import './form-submit-test-wrapper';

const configuration = {
  title: 'Tests/Bubble Events/Submit',
  component: 'form-submit-test',
};

export default configuration;

export const Submit = (): TemplateResult => {
  return html`
    <script>
      document.querySelector('body').addEventListener('submit', (event) => {
        console.log('light dom event', event);
        if ('sourceEvent' in event) {
          event.sourceEvent.preventDefault();
          console.log('source event', event.sourceEvent);
          console.log('light dom aggregated composed path', event.aggregatedComposedPath());
        }
      });
      document.querySelector('body').addEventListener('custom-submit', (event) => {
        console.log('event', event);
      });
    </script>
    <strong>Form submission bubbling test</strong>
    <p>Review the developer console log to see messages when submitting the form below.</p>
    <outline-grid>
      <outline-column>
        <form-submit-test-wrapper></form-submit-test-wrapper>
      </outline-column>
    </outline-grid>
  `;
};
