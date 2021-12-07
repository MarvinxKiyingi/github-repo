import './App.css';
import { StyledDecrementButton, StyledIncrementButton } from './components/styles/Button';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { StyledCounter } from './components/styles/Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function onDecrementValue() {
    setCount(count - 1);
  }
  function onIncrementValue() {
    setCount(count + 1);
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
