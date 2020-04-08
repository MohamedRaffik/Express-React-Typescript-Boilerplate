import React from 'react';
import { updateCounter, toggleSync, removeCounter, State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { IfComponent } from '.';

interface CounterProps {
  index: number
}

const Counter = (props: CounterProps) => {
  const { index } = props;
  const dispatch = useDispatch();
  const { counter } = useSelector((state: State) => ({
    counter: state.counters[index]
  }));

  return (
    <div>
      <h3>{counter.title}</h3>
      <p>Counter: {counter.counter}</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => dispatch(updateCounter(index, true))}>+</button>
        <button onClick={() => dispatch(updateCounter(index, false))}>-</button>
        <IfComponent
          render={() => <button onClick={() => dispatch(toggleSync(index))}>{counter.sync ? 'Desync' : 'Sync'}</button>}
          conditional={index !== 0}
        />
        <button onClick={() => dispatch(removeCounter(index))}>Remove</button>
      </div>
    </div>
  );
};

export default Counter;
