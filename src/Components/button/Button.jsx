import { SignIn } from "./Button.styles";

const Button = (props) => {
    return (
      <SignIn className={props.className} type={props.type} >{props.text}</SignIn>
    )
  }
  
export default Button