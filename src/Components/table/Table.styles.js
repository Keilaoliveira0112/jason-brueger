import styled from "styled-components";

export const Base = styled.table`
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
`
export const Thead  = styled.thead`
text-align: justify;
@media only screen and (min-width: 600px) {
}
@media only screen and (min-width: 1024px) {
}
`
export const Tbody  = styled.tbody`
color: #831717;
font-weight: 500;
@media only screen and (min-width: 600px) {
}
@media only screen and (min-width: 1024px) {
}
`
export const TableRow = styled.tr`
  &:nth-child(2n + 1) {
    background-color: #f2f2f2;
  }
`
export const Td = styled.td`
text-align: center;
`