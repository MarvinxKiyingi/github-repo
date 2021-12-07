import './App.css';
import { StyledDecrementButton, StyledIncrementButton } from './components/styles/Button';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function App() {
  return (
    <div className='App'>
      <div className='counterWrapper'>
        <StyledDecrementButton>
          <RemoveRoundedIcon fontSize='large' />
          DECREMENT
        </StyledDecrementButton>

        <StyledIncrementButton>
          <AddRoundedIcon fontSize='large' />
          INCREMENT
        </StyledIncrementButton>
      </div>
    </div>
  );
}

export default App;
