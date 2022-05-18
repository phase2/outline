import { html, TemplateResult } from 'lit';
import './state-management-example';
import './example-state-component/example-state-component';
import '../../base/outline-code-block/outline-code-block';

export default {
  title: 'Documentation/Code Examples/State Management',
  component: 'state-management-example',
};

export const Counter = (): TemplateResult => 
  html`
    <state-management-example></state-management-example>
  `;

export const SimpleConsumer = (): TemplateResult => html`<example-state-component></example-state-component>`;

export const CodeExample = (): TemplateResult => 
  html`
    <div>
      <p>Using <a href='https://github.com/gitaarik/lit-state' target="_blank">LitState</a> we are 
      able to reactively manage state across apps with minimal boilerplate</p>
      <br/>

      <code>state.ts</code>
      <outline-code-block>
      import { LitState } from 'lit-element-state';

      // Create an interface to shape our state data
      export interface ExampleStateType = {
        count: number;
      };

      export class ExampleState extends LitState {
        static get stateVars() {
          return {
            count: 0,
          };
        }
      }

      // helper functions for managing state
      export const increaseCount = () => {
        exampleState.count++;
      };

      export const decreaseCount = () => {
        exampleState.count--;
      };

      export const resetCount = () => {
        exampleState.count = 0;
      };

      // in order to avoid type errors we typecast the class as the state interface we created above
      export const exampleState = new ExampleState() as ExampleStateType;
      </outline-code-block>
      
      <br/>
      
      <code>state-management-example.ts</code>
      <outline-code-block >
      ...
      // We import the observeState mixin, our state, and helper classes
      import { observeState } from 'lit-element-state';
      import {
        exampleState,
        resetCount,
        decreaseCount,
        increaseCount
      } from './state';

      // Extend our component with our base class passed into this mixin
      export class StateManagementExample extends observeState(OutlineElement) {
        render(): TemplateResult {
          return html&#180;
            &#60;div class="wrapper">
              &#60;p class="count">&#36;{exampleState.count}&#60;/p>
              &#60;div class="btn-wrapper">
                &#60;outline-button @click=&#36;{decreaseCount}>-&#60;/outline-button>
                &#60;outline-button @click=&#36;{resetCount}>0&#60;/outline-button>
                &#60;outline-button @click=&#36;{increaseCount}>+&#60;/outline-button>
              &#60;/div>
            &#60;/div>
            &#180;;
        }
      }

      </outline-code-block>
      
      <br/>
      
      <code>example-state-component.ts</code>
      <outline-code-block >
      ...
      // We import the observeState mixin and our state
      import { observeState } from 'lit-element-state';
      import {
        exampleState,
      } from './state';

      // Extend our component with out base class passed into this mixin
      export class ExampleStateComponent extends observeState(OutlineElement) {
          
        // anytime our observed state is changed our component will update with the new state
        render(): TemplateResult {
            return html&#180;
            &#60;div class="wrapper">
              &#60;outline-heading>Days Since Last Incident&#60;/outline-heading>
              &#60;p class="count">&#36;{exampleState.count}&#60;/p>
            &#60;/div>
            &#180;;
        }
      }
      </outline-code-block>
      
      <br/>
      
      <code>imports.d.ts</code>
      <outline-code-block >
      ...
      // The last step is to make sure that we have our library and types declared 
      // as it doesn't have typescript support and we'll get a lot of TS errors without this
      
      declare module 'lit-element-state' {
        import { LitElement } from 'lit';

        export function observeState(baseClass: typeof LitElement): typeof LitElement;

        // TODO: Properly type stateVar()
        function stateVar(): any;

        class LitState {}
      }

      </outline-code-block>
    </div>
  `