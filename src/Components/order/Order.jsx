import Star from '../../assets/Star.svg';
import Cross from '../../assets/Cross.svg';
import Button from '../button/Button';
import Table from '../table/Table';
import { Section, Title, InitialDate, FinalDate, ImgDate, ValueOrder, PitNumber, ClientName, Topic, AttendantName, Paragraph, ParagraphError } from './Order.styles'
import { differenceInMinutes } from "date-fns";

const Order = (props) => {
  return props.page === 'Pedidos Pendentes' ? (
    props.orders.map((order) => (
      <Section variant="OneColumn">
        <Title key={order.id}>Resumo da Lápide</Title>
        <InitialDate>
          <ImgDate src={Star} alt="Estrela que indica a hora do pedido"/>
          <ValueOrder>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</ValueOrder>
        </InitialDate>
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
          products={order.products}
          variant="ColorRed"
        />             
        <Button variant='senary' onClick={() => props.onClick(order.id)}>Pronto</Button>
      </Section>  
    ))
  ) : (
    props.orders.map((order) => (
      <Section key={order.id}>
        <Title>Resumo da Lápide</Title>
        <InitialDate>
          <ImgDate src={Star} alt='Estrela que indica a hora do pedido'/>
          <ValueOrder>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</ValueOrder>
        </InitialDate>
        <FinalDate>
          <ImgDate src={Cross} alt='Cruz que indica a hora em que o pedido foi concluído'/>
          <ValueOrder>{`${order.dateProcessed.slice(11, 13)}h${order.dateProcessed.slice(14, 16)}min`}</ValueOrder>
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
          products={order.products}
          variant="colorGreen"
        />
        <Paragraph>
          Concluído em {differenceInMinutes(new Date(order.dateProcessed), new Date(order.dataEntry))} min(s)
        </Paragraph>
        {props.error && <ParagraphError>{props.error}</ParagraphError>}            
      </Section>  
    )))      
}
    
export default Order;