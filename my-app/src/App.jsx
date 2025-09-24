import React, { useState, useCallback, memo } from 'react';

const Child = memo(({ onClick, name }) => {
  console.log(`${name} child rendered`);
  return <button onClick={onClick}>{name}</button>;
});

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // New function every render - causes child re-render
  const increment1 = () => setCount1(c => c + 1);
  
  // Same function reference - prevents child re-render
  const increment2 = useCallback(() => setCount2(c => c + 1), []);

  console.log('Parent rendered');

  return (
    <div>
      <p>Count1: {count1} | Count2: {count2}</p>
      <Child onClick={increment1} name="Button 1" />
      <Child onClick={increment2} name="Button 2" />
      <p>Check console - Button 1 always re-renders, Button 2 only when clicked</p>
    </div>
  );
}
