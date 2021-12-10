import { StyledIncrementButton } from '../../styles/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface IIncrement {
  onDisable?: number;
  onClick?: () => void;
}

export const Increment = (props: IIncrement) => {
  return (
    <StyledIncrementButton disabled={props.onDisable === 7} onClick={props.onClick}>
      <AddRoundedIcon fontSize='large' />
      INCREMENT
    </StyledIncrementButton>
  );
};
