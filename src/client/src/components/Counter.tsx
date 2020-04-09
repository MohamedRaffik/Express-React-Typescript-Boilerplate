import React from 'react';
import { updateCounter, toggleSync, removeCounter, State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { IfComponent } from '.';

interface CounterProps {
  index: number;
  title: string;
}

const Counter = (props: CounterProps): JSX.Element => {
  const { index, title } = props;
  const dispatch = useDispatch();
  const { counter } = useSelector((state: State) => ({
    counter: state.counters[index]
  }));

  const buttonStyle: React.CSSProperties = {
    margin: '0.5em',
    padding: '0.3em 1em'
  };

  return (
    <div style={{ padding: '1em' }}>
      <h3>{title}</h3>
      <p>Counter: {counter.counter}</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          style={buttonStyle}
          onClick={() => dispatch(updateCounter(index, true))}
        >
          +
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch(updateCounter(index, false))}
        >
          -
        </button>
        <IfComponent
          component={
            <button
              style={buttonStyle}
              onClick={() => dispatch(toggleSync(index))}
            >
              {counter.sync ? 'Desync' : 'Sync'}
            </button>
          }
          conditional={index !== 0}
        />
        <IfComponent
          component={
            <button
              style={buttonStyle}
              onClick={() => dispatch(removeCounter(index))}
            >
              Remove
            </button>
          }
          conditional={index !== 0}
        />
      </div>
    </div>
  );
};

export default Counter;
