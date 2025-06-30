'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Contar: {count}</button>
    </div>
  );
}

export default Counter;