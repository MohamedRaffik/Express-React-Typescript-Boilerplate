import React from 'react';

const App = () => {
  const [counter, updateCounter] = React.useState(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => updateCounter(counter + 1)}>+</button>
        <button onClick={() => updateCounter(counter - 1)}>-</button>
      </div>
    </div>
  );
};

export default App;
