import styled from 'styled-components';
export interface Button {
  textColor?: string;
  bgColor?: string;
  onHoverTextColor?: string;
  onHoverBgColor?: string;
}
export const StyledDecrementButton = styled.button<Button>`
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  color: ${({ textColor }) => textColor || 'black'};
  border: black solid 0.15rem;
  border-radius: 2rem;
  padding: 0.2rem 0.5rem;

  &:hover {
    background-color: ${({ bgColor }) => bgColor || 'black'};
    color: ${({ textColor }) => textColor || 'white'};
  }

  @media (min-width: 768px) {
    width: 14rem;
    padding: 0.5rem 2.5rem;
    font-size: medium;
    font-weight: 600;
  }
`;

export const StyledIncrementButton = styled.button<Button>`
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'hotpink'};
  color: ${({ textColor }) => textColor || 'white'};
  border: black solid 0.15rem;
  border-radius: 2rem;
  padding: 0.2rem 0.5rem;

  &:hover {
    background-color: ${({ onHoverBgColor }) => onHoverBgColor || 'rebeccapurple'};
    color: ${({ onHoverTextColor }) => onHoverTextColor || 'white'};
  }

  @media (min-width: 768px) {
    width: 14rem;
    padding: 0.5rem 2.5rem;
    font-size: medium;
    font-weight: 600;
  }
`;
