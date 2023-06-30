import ButtonContainer from "./Button.styles";

const Button = (props) => {
  return (
    <ButtonContainer type={props.type} variant={props.variant} onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
