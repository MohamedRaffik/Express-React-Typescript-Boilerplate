import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counters: [
    {
      counter: 0,
      sync: true
    }
  ]
};

const toggleSync = createAction('SYNC_COUNTER', (counter: number) => ({
  payload: { counter }
}));
const updateCounter = createAction(
  'UPDATE_COUNTER',
  (counter: number, increase: boolean) => ({ payload: { counter, increase } })
);
const addCounter = createAction('ADD_COUNTER', (sync: boolean) => ({
  payload: { sync }
}));
const removeCounter = createAction('REMOVE_COUNTER', (counter: number) => ({
  payload: { counter }
}));
const reset = createAction('RESET');

const reducer = createReducer(initialState, {
  [updateCounter.type]: (state, action: ReturnType<typeof updateCounter>) => {
    const { payload } = action;
    state.counters[payload.counter].counter += payload.increase ? 1 : -1;
    if (state.counters[payload.counter].sync) {
      state.counters.forEach((counter) => {
        counter.counter = counter.sync
          ? state.counters[payload.counter].counter
          : counter.counter;
      });
    }
    return state;
  },
  [toggleSync.type]: (state, action: ReturnType<typeof toggleSync>) => {
    const { payload } = action;
    state.counters[payload.counter].sync = !state.counters[payload.counter]
      .sync;
    state.counters[payload.counter].counter = state.counters[0].counter;
    return state;
  },
  [addCounter.type]: (state, action: ReturnType<typeof addCounter>) => {
    state.counters.push({
      counter: action.payload.sync ? state.counters[0].counter : 0,
      sync: action.payload.sync
    });
    return state;
  },
  [removeCounter.type]: (state, action: ReturnType<typeof removeCounter>) => {
    const { payload } = action;
    state.counters.splice(payload.counter, 1);
    return state;
  },
  [reset.type]: (state) => {
    state = {
      counters: [
        {
          counter: 0,
          sync: true
        }
      ]
    };
    return state;
  }
});

const store = configureStore({ reducer });

export default store;

export { updateCounter, toggleSync, addCounter, removeCounter, reset };

export type State = typeof initialState;
