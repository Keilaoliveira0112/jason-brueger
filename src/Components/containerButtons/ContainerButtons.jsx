import { Container } from "./ContainerButtons.styles"
import Button from "../button/Button"

 const ContainerButtons = (props) => {
  return (
      <Container>
          <Button variant='secundary'>Café da manhã</Button>
          <Button variant='terciary' onClick={props.onClick}>Resto do dia</Button>
      </Container>
  )
}
export default ContainerButtons