import React from 'react';
import { Counter } from './components';
import { State, addCounter, reset } from './store';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { length } = useSelector((state: State) => ({
    length: state.counters.length
  }));

  const counters = [];

  for (let i = 0; i < length; i++) {
    counters.push((
      <Counter key={`Counter${i}`} index={i} />
    ));
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => dispatch(addCounter())}>Add Counter</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      {counters}
    </div>
  );
};

export default App;
