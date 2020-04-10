import React from 'react';
import { updateCounter, toggleSync, removeCounter, State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { IfComponent } from '.';
import styles from './Counter.module.scss';

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

  const increaseCounter = (): void => {
    dispatch(updateCounter(index, true));
  };

  const decreaseCounter = (): void => {
    dispatch(updateCounter(index, false));
  };

  const changeSync = (): void => {
    dispatch(toggleSync(index));
  };

  const deleteCounter = (): void => {
    dispatch(removeCounter(index));
  };

  return (
    <div className={styles['container']}>
      <h3>{title}</h3>
      <p>Counter: {counter.counter}</p>
      <div className={styles['controls']}>
        <button className={styles['buttons']} onClick={increaseCounter}>
          +
        </button>
        <button className={styles['buttons']} onClick={decreaseCounter}>
          -
        </button>
        <IfComponent
          component={
            <button className={styles['buttons']} onClick={changeSync}>
              {counter.sync ? 'Desync' : 'Sync'}
            </button>
          }
          conditional={index !== 0}
        />
        <IfComponent
          component={
            <button className={styles['buttons']} onClick={deleteCounter}>
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
