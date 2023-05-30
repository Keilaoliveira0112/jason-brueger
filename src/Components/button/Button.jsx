import { ButtonContainer } from "./Button.styles";

const Button = (props) => {
    return (
        <ButtonContainer type={props.type} variant={props.variant}>{props.children}</ButtonContainer>
    )
  }
  
export default Button

