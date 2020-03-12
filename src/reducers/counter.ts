import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';
import counterActions from '@/actions/counter';

export class CounterState extends Record<{
  count: number;
}>({
  count: 1
}) {}

export const counterReducer = reducerWithInitialState(new CounterState()).case(
  counterActions.increment,
  (state, payload) => {
    return state.set('count', state.count + payload);
  }
);
