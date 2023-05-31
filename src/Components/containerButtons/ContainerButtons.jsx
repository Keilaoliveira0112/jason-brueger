import { Container } from "./ContainerButtons.styles"
import Button from "../button/Button"

 const ContainerButtons = (props) => {
  return (
      <Container>
          <Button variant={props.bntBreakfast} onClick={props.onClickBreakfast}>Café da manhã</Button>
          <Button variant={props.btnRestOfTheDay} onClick={props.onClickDay}>Resto do dia</Button>
      </Container>
  )
}
export default ContainerButtons