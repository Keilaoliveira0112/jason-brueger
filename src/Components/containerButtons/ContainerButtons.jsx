import Container from "./ContainerButtons.styles";
import Button from "../button/Button";

const ContainerButtons = (props) => {
  return (
    <Container variant={props.variantContainer}>
      <Button variant={props.variantBtnOne} onClick={props.onClickBtnOne} children={props.childrenBtnOne} />
      <Button variant={props.variantBtnTwo} onClick={props.onClickBtnTwo} children={props.childrenBtnTwo} />
    </Container>
  );
};

export default ContainerButtons;
