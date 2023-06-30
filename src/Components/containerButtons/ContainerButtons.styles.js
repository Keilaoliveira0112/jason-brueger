import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 3rem;

  ${({ variant }) => variant === "center" && css`
    justify-content: center;
  `}
`;

export default Container;
