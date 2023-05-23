import { SignIn } from "./Button.styles";

const Button = (props) => {
    return (
      <SignIn type={props.type} >{props.text}</SignIn>
    )
  }
  
export default Button