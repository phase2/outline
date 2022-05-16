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
      export type ExampleStateType = {
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

      // Extend our component with out base class passed into this mixin
      export class StateManagementExample extends observeState(OutlineElement) {}

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
        render = () => {exampleState.counter}
      }

      </outline-code-block>
    </div>
  `