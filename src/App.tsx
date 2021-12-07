import './App.css';
import { StyledDecrementButton, StyledIncrementButton } from './components/styles/Button';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { StyledCounter } from './components/styles/Counter';
import { useState } from 'react';

function App() {
  const sessionStorageKey = 'displayedValue';
  const getSessionStorage = parseInt(sessionStorage.getItem(sessionStorageKey)!);
  const [count, setCount] = useState(getSessionStorage || 0);

  const setSessionStorage = sessionStorage.setItem(sessionStorageKey, JSON.stringify(count));

  function onDecrementValue() {
    setCount(count - 1);
    return setSessionStorage;
  }
  function onIncrementValue() {
    setCount(count + 1);
    return setSessionStorage;
  }

  return (
    <div className='App'>
      <div className='counterWrapper'>
        <StyledDecrementButton disabled={count === 0} onClick={onDecrementValue}>
          <RemoveRoundedIcon fontSize='large' />
          DECREMENT
        </StyledDecrementButton>

        <StyledCounter>Counter: {count}</StyledCounter>

        <StyledIncrementButton onClick={onIncrementValue}>
          <AddRoundedIcon fontSize='large' />
          INCREMENT
        </StyledIncrementButton>
      </div>
    </div>
  );
}

export default App;
