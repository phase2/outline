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
        console.log(event);
      });
    </script>
    <form-submit-test></form-submit-test>
  `;
};
