import React from 'react'
/* import Table from '../table/Table'; */
import Star from '../../assets/Star.svg';
import Cross from '../../assets/Cross.svg';
import Button from '../button/Button';
import { Section, Title, InitialDate, ValueOrder, StarImg, PitNumber, Topic, ClientName, AttendantName, Thead, Tbody, TableRow, FinalDate, Td, Paragraph, ParagraphError } from './Order.styles';
import { differenceInMinutes } from "date-fns";

const Order = (props) =>  {
 
    return (
    <> 
    {props.page === 'pendingOrders' ? (
        <>  
          { console.log(props.orderResume)     }
         
          <Section>
                <Title>Resumo da Lápide</Title>
                <InitialDate>
                  <StarImg src={Star} alt='Estrela que indica a hora do pedido'/>
                  <ValueOrder>{`${props.orderResume.dataEntry.slice(11, 13)}h${props.orderResume.dataEntry.slice(14, 16)}min`}</ValueOrder>
                </InitialDate>
                <PitNumber>
                  <Topic>Cova: </Topic>
                  <ValueOrder>{props.orderResume.table}</ValueOrder>
                </PitNumber>  
                <ClientName>
                  <Topic>Cliente: </Topic>
                  <ValueOrder>{props.orderResume.client}</ValueOrder>
                </ClientName>         
                <AttendantName>
                  <Topic>Atendente: </Topic>
                  <ValueOrder>{props.orderResume.userName} </ValueOrder>   
                </AttendantName>                  
                <table>
                  <Thead>
                    <tr>
                      <th>Pedido</th>
                      <th>Quant.</th>
                    </tr>
                  </Thead>
                  <Tbody>          
                    {props.orderResume.products.map((item)=> (
                      <TableRow key={item.id}>
                        <td>{item.name}</td>
                        <Td>{item.quantity}</Td>
                      </TableRow> 
                    ))}
                  </Tbody>
                </table>          
                <Button variant='senary' onClick={() => props.onClick(props.orderResume.id)}>Pronto</Button>
          </Section> 

         
        </>
       ): (
         <>
       {/*  {  {props.orderResume.map((order)=> (
            <Section key={order.id}>
                <Title>Resumo da Lápide</Title>
                <InitialDate>
                  <StarImg src={Star} alt='Estrela que indica a hora do pedido'/>
                  <ValueOrder>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</ValueOrder>
                </InitialDate>
                <FinalDate>
                    <StarImg src={Cross} alt='Cruz que indica a hora em que o pedido foi entregue' />
                    <ValueOrder>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</ValueOrder>
                </FinalDate>
                <PitNumber>
                  <Topic>Cova: </Topic>
                  <ValueOrder>{order.table}</ValueOrder>
                </PitNumber>  
                <ClientName>
                  <Topic>Cliente: </Topic>
                  <ValueOrder>{order.client}</ValueOrder>
                </ClientName>         
                <AttendantName>
                  <Topic>Atendente: </Topic>
                  <ValueOrder>{order.userName} </ValueOrder>   
                </AttendantName>                  
                <Table
                    order={order.products}
                 /> 
                <Paragraph>
                    Concluído em {differenceInMinutes(new Date(order.dateProcessed),  new Date(order.dataEntry))} min(s)
                </Paragraph> 
                {{} && <ParagraphError>{}</ParagraphError>}                
            </Section> 
          
          
        ))} } */}
    </>  
       
    )}
    </>
)}


export default Order;