import './App.css';
import { useState } from 'react';
import { Decrement } from './components/Decrement/Decrement';
import { DisplayCount } from './components/Counter/Counter';
import { Increment } from './components/Increment/Increment';

function App() {
  const sessionStorageKey = 'displayedValue';
  const getSessionStorage = parseInt(sessionStorage.getItem(sessionStorageKey)!);
  const [count, setCount] = useState(getSessionStorage || 0);

  const setSessionStorage = sessionStorage.setItem(sessionStorageKey, JSON.stringify(count));

  function onDecrementValue() {
    setCount(count - 1);
    console.log('hej');
    return setSessionStorage;
  }
  function onIncrementValue() {
    setCount(count + 1);
    return setSessionStorage;
  }

  return (
    <div className='App'>
      <div className='counterWrapper'>
        <Decrement onDisable={count} onClick={onDecrementValue} />
        <DisplayCount number={count}></DisplayCount>
        <Increment onClick={onIncrementValue} />
      </div>
    </div>
  );
}

export default App;
