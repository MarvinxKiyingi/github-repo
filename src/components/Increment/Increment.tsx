import { StyledIncrementButton } from '../../styles/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface IIncrement {
  onClick?: () => void;
}

export const Increment = (props: IIncrement) => {
  return (
    <StyledIncrementButton onClick={props.onClick}>
      <AddRoundedIcon fontSize='large' />
      INCREMENT
    </StyledIncrementButton>
  );
};
