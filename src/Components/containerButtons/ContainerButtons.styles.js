import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 3rem;

  ${({ variant }) => variant === "center" && css`
    justify-content: center;
  `}
  ${({ variant }) => variant === "flex-start" && css`
    align-self: flex-start;
    padding: 3rem 0rem 0rem 13rem;
  `}
`;

export default Container;
