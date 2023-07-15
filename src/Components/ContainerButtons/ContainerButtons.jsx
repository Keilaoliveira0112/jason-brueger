import Container from "./ContainerButtons.styles";
import Button from "../Button/Button";

const ContainerButtons = (props) => {
  return (
    <Container variant={props.variantContainer}>
      <Button variant={props.variantBtnOne} onClick={props.onClickBtnOne}>{props.childrenBtnOne}</Button>
      <Button variant={props.variantBtnTwo} onClick={props.onClickBtnTwo}>{props.childrenBtnTwo}</Button>
    </Container>
  );
};

export default ContainerButtons;
