import { LitState } from 'lit-element-state';

// Create an interface to shape our state data
interface ExampleStateType {
  count: number;
}

export class ExampleState extends LitState {
  static get stateVars() {
    return {
      count: 0,
    };
  }
}

// helper functions
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
