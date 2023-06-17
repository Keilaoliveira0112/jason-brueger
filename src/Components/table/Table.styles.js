import styled from "styled-components";

export const Base = styled.table`
  width: 100%;
  heigth: 200px;
  border-collapse: collapse;
  gap: 10px;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`
export const TableHeader = styled.th`
  padding: 29px;
  gap: 20px;
  border: none;
`
export const ItemName = styled.td`
    with: 25%
    padding: 4px;
  
`
export const ItemQuantity = styled.td`
  padding: 8px;
  
`