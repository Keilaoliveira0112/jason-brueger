import {
  Background,
  Thead,
  Tbody,
  TableRow,
  Td,
} from "./Table.styles";

const Table = (props) => {
  return (
    <Background>
      <Thead>
        <tr>
          <th>Pedido</th>
          <th>Quant.</th>
        </tr>
      </Thead>
      <Tbody variant={props.variant}>
        {props.products.map((item) => (
          <TableRow key={item.id}>
            <td>{item.name}</td>
            <Td>{item.quantity}</Td>
          </TableRow>
        ))}
      </Tbody>
    </Background>
  );
};
export default Table;
