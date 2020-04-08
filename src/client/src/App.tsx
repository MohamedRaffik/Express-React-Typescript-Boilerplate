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

  for (let i = 1; i < length; i++) {
    counters.push((
      <Counter title={`Counter ${i}`} key={`Counter${i}`} index={i} />
    ));
  }

  const buttonStyle: React.CSSProperties = {
    margin: '0.5em',
    padding: '0.3em 1em'
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button style={buttonStyle} onClick={() => dispatch(addCounter(false))}>Add Counter</button>
        <button style={buttonStyle} onClick={() => dispatch(addCounter(true))}>Add Synced Counter</button>
        <button style={buttonStyle} onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Counter title={'Main Counter'} index={0} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {counters}
      </div>
    </div>
  );
};

export default App;
