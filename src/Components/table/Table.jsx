import { Base, TableRow, TableHeader, ItemName, ItemQuantity } from '../table/Table.styles';


const Table = (props) => {
    
    
  return (
        <Base> 
       
        <Base>
                <TableRow>
                <TableHeader>Pedido</TableHeader>
                <TableHeader>Quantidade</TableHeader>
                </TableRow>
            </Base>
              <tbody> 
                         
              {props.order.map((item)=> (
                <TableRow key={item.id}>
                    <ItemName>{item.name}</ItemName>
                    <ItemQuantity>{item.quantity}</ItemQuantity>
                </TableRow> 
              
            ))}
              </tbody>
         
        </Base>
    )
}
export default Table;
