import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 3rem;

  ${({ variant }) => variant === "center" && css`
    justify-content: center;
  `}
`