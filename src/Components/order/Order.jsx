import Star from "../../assets/Star.svg";
import Cross from "../../assets/Cross.svg";
import Button from "../button/Button";
import Table from "../table/Table";
import { Section, Title, InitialDate, FinalDate, ImgDate, ValueOrder, PitNumber, ClientName, Topic, AttendantName, Paragraph } from "./Order.styles";
import { differenceInMinutes, getHours, getMinutes } from "date-fns";

const Order = (props) => {
  return props.page === "Pedidos Pendentes" ? (
    props.orders.map((order) => (
      <Section key={order.id} variant="OneColumn">
        <Title>Resumo da Lápide</Title>
        <InitialDate>
          <ImgDate src={Star} alt="Imagem de uma estrela que indica a hora que o pedido foi feito" />
          <ValueOrder>{`${getHours(new Date(order.dataEntry))}h${getMinutes(new Date(order.dataEntry))}min`}</ValueOrder>
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
        <Button variant="senary" onClick={() => props.onClick(order.id)}>Pronto</Button>
      </Section>
    ))
  ) : (
    props.orders.map((order) => (
      <Section key={order.id}>
        <Title>Resumo da Lápide</Title>
        <InitialDate>
          <ImgDate src={Star} alt="Estrela que indica a hora do pedido" />
          <ValueOrder>{`${getHours(new Date(order.dataEntry))}h${getMinutes(new Date(order.dataEntry))}min`}</ValueOrder>
        </InitialDate>
        <FinalDate>
          <ImgDate src={Cross} alt="Imagem de uma cruz que indica a hora em que o pedido foi concluído" />
          <ValueOrder>{`${getHours(new Date(order.dateProcessed))}h${getMinutes(new Date(order.dateProcessed))}min`}</ValueOrder>
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
        {props.page === "Pedidos Prontos" ? (<Button variant="senary" onClick={() => props.onClick(order.id)}>Entregue</Button>)
          : (
            <Paragraph>
              Concluído em {differenceInMinutes(new Date(order.dateProcessed), new Date(order.dataEntry))} min(s)
            </Paragraph>
          )}
      </Section>
    )));
};

export default Order;