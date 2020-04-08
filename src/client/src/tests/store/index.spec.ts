import store, { updateCounter, addCounter, removeCounter, reset, toggleSync } from '../../store';

describe('Testing Redux Store', () => {
  beforeEach(() => {
    store.dispatch(reset());
  });

  it('should increment the master counter', () => {
    store.dispatch(updateCounter(0, true));
    const state = store.getState();
    expect(state.counters[0].counter).toEqual(1);
  });

  it('should decrease the master counter', () => {
    store.dispatch(updateCounter(0, false));
    const state = store.getState();
    expect(state.counters[0].counter).toEqual(-1);
  });

  it('should add a counter', () => {
    store.dispatch(addCounter(false));
    const state = store.getState();
    expect(state.counters[1]).toEqual({ counter: 0, sync: false });
  });

  it('should remove a counter', () => {
    store.dispatch(addCounter(false));
    store.dispatch(removeCounter(1));
    const state = store.getState();
    expect(state.counters[1]).toEqual(undefined);
  });

  it('should add a synced counter', () => {
    store.dispatch(updateCounter(0, true));
    store.dispatch(addCounter(true));
    const state = store.getState();
    expect(state.counters[1]).toEqual({ counter: 1, sync: true });
  });

  it('should make a synced counter have the same value as the main counter', () => {
    store.dispatch(addCounter(false));
    store.dispatch(updateCounter(0, true));
    store.dispatch(toggleSync(1));
    const state = store.getState();
    expect(state.counters[1].counter).toEqual(1);
  });

  it('should cause the main counter to change when changing a synced counter', () => {
    store.dispatch(addCounter(false));
    store.dispatch(toggleSync(1));
    store.dispatch(updateCounter(1, true));
    const state = store.getState();
    expect(state.counters[0].counter).toEqual(1);
  });

  it('should desync a counter from the main counter', () => {
    store.dispatch(addCounter(false));
    store.dispatch(toggleSync(1));
    store.dispatch(updateCounter(1, true));
    store.dispatch(toggleSync(1));
    store.dispatch(updateCounter(1, false));
    const state = store.getState();
    expect(state.counters[1].counter).toEqual(0);
    expect(state.counters[0].counter).toEqual(1);
  });
});
