import styled, { css } from "styled-components";

export const Background = styled.table`
  grid-area: table;
  font-size: 1rem;
  border: none;
  padding: 0.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
export const Thead = styled.thead`
  text-align: justify;
`;
export const Tbody = styled.tbody`
  color: #831717;
  font-weight: 500;

  ${({ variant }) => variant === "colorGreen" && css`
  color: #1C720E;
  `}
`;
export const TableRow = styled.tr`
  &:nth-child(2n + 1) {
    background-color: #f2f2f2;
  }
`;
export const Td = styled.td`
  text-align: center;
`;
