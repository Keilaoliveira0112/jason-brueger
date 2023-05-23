import { SignIn } from "./Button.styles";

const Button = ({text, onClick}) => {
    return (
      <SignIn className="botao" type="submit" onClick={onClick}>{text}</SignIn>
    )
  }
  
export default Button