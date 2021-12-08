import { StyledDecrementButton } from '../../styles/Button';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

interface IDecrement {
  onDisable?: number;
  onClick?: () => void;
}

export const Decrement = (props: IDecrement) => {
  return (
    <StyledDecrementButton disabled={props.onDisable === 0} onClick={props.onClick}>
      <RemoveRoundedIcon fontSize='large' />
      DECREMENT
    </StyledDecrementButton>
  );
};
