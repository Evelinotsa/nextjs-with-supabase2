import React, { useState } from 'react';

const CounterComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 data-testid="title">Counter Component</h1>
      <p data-testid="counter">Current count: {count}</p>
      <button data-testid="increment-btn" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default CounterComponent;
