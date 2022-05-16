import { LitState } from 'lit-element-state';

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

export const increaseCount = () => {
  exampleState.count++;
};

export const decreaseCount = () => {
  exampleState.count--;
};

export const resetCount = () => {
  exampleState.count = 0;
};

export const exampleState = new ExampleState() as ExampleStateType;
