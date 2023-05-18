import { Text } from "./Input.styles";

const Input = () => {
    return (
        <>
          <Text type='email' name='email' placeholder='Email' required/>
          <Text type='password' name='password'placeholder='Senha' required/>
        </>
    )
  }
  
  
export default Input