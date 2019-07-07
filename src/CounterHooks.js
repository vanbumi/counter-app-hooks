import React, { useState } from 'react';

function CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>The Count is: ... <span><h1>{count}</h1></span></h3>
      <button onClick={() => setCount(count + 1)}>Add count</button>
    </div>
  )
}

export default CounterHooks;