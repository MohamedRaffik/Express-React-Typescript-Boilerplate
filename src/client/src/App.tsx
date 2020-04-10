import React from 'react';
import { Counter } from './components';
import { State, addCounter, reset } from './store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { length } = useSelector((state: State) => ({
    length: state.counters.length
  }));

  const addNewCounter = (): void => {
    dispatch(addCounter(false));
  };

  const addNewSyncCounter = (): void => {
    dispatch(addCounter(true));
  };

  const resetStore = (): void => {
    dispatch(reset());
  };

  const counters = [];

  for (let i = 1; i < length; i++) {
    counters.push(
      <Counter title={`Counter ${i}`} key={`Counter${i}`} index={i} />
    );
  }

  return (
    <div>
      <div className={styles['main-controls']}>
        <button className={styles['buttons']} onClick={addNewCounter}>
          Add Counter
        </button>
        <button className={styles['buttons']} onClick={addNewSyncCounter}>
          Add Synced Counter
        </button>
        <button className={styles['buttons']} onClick={resetStore}>
          Reset
        </button>
      </div>
      <div className={styles['main-counter']}>
        <Counter title={'Main Counter'} index={0} />
      </div>
      <div className={styles['child-counters']}>{counters}</div>
    </div>
  );
};

export default App;
