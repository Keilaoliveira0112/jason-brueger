import styled, { css } from "styled-components";

const SelectContainer = styled.select`
  width: 18vw;
  height: 4vh;
  color: #711D17;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 0.4rem;
  border: none;
  @media only screen and (min-width: 600px) {
    width: 10vw;
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 8vw;
  }
  ${({ variant }) => variant === "primary" && css`
    width: auto;
    @media only screen and (min-width: 600px) {
      width: auto;
    }
    @media only screen and (min-width: 1024px) {
      width: auto;
    }
  `}
`;

export default SelectContainer;
