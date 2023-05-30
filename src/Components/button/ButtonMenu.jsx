import { ButtonContainer } from "./Button.styles";

const ButtonMenu = (props) => {
    return (
        <ButtonContainer type={props.type} >{props.text}</ButtonContainer>
    )
}

export default ButtonMenu