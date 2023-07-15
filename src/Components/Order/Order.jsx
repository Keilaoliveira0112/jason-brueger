import {
  differenceInMinutes,
  getHours,
  getMinutes,
} from "date-fns";
import star from "../../assets/star.svg";
import cross from "../../assets/cross.svg";
import Button from "../Button/Button";
import Table from "../Table/Table";
import {
  Section,
  Title,
  InitialDate,
  FinalDate,
  ImgDate,
  ValueOrder,
  PitNumber,
  ClientName,
  Topic,
  AttendantName,
  Paragraph,
} from "./Order.styles";

const Order = (props) => {
  return props.orders.map((order) => (
    <Section key={order.id} variant={props.page === "Pedidos Pendentes" ? "OneColumn" : ""}>
      <Title>Resumo da Lápide</Title>
      <InitialDate>
        <ImgDate src={star} alt="Imagem de uma estrela que indica a hora que o pedido foi feito" />
        <ValueOrder>{`${getHours(new Date(order.dataEntry))}h${getMinutes(new Date(order.dataEntry))}min`}</ValueOrder>
      </InitialDate>
      {props.page !== "Pedidos Pendentes" && (
        <FinalDate>
          <ImgDate src={cross} alt="Imagem de uma cruz que indica a hora em que o pedido foi concluído" />
          <ValueOrder>{`${getHours(new Date(order.dateProcessed))}h${getMinutes(new Date(order.dateProcessed))}min`}</ValueOrder>
        </FinalDate>
      )}
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
        <ValueOrder>{order.userName}</ValueOrder>
      </AttendantName>
      <Table
        products={order.products}
        variant={props.page === "Pedidos Pendentes" ? "ColorRed" : "colorGreen"}
      />
      {props.page === "Pedidos Concluídos" ? (
        <Paragraph>
          Concluído em {differenceInMinutes(new Date(order.dateProcessed), new Date(order.dataEntry))} min(s)
        </Paragraph>
      ) : (
        <Button variant="senary" onClick={() => props.onClick(order.id)}>
          {props.page === "Pedidos Pendentes" ? "Pronto" : "Entregue"}
        </Button>
      )}
    </Section>
  ));
};

export default Order;
