import styled from "styled-components";

export const Base = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`
export const TableHeader = styled.th`
  padding: 8px;
  gap: 20px;
  border: none;
`
export const ItemName = styled.td`
  padding: 8px;
  
`
export const ItemQuantity = styled.td`
  padding: 8px;
  
`