import { StyledCounter } from '../../styles/Counter';

interface IDisplayCount {
  number?: number;
}

export const DisplayCount = (props: IDisplayCount) => {
  return <StyledCounter>Conuter: {props.number}</StyledCounter>;
};
