import { Text } from "./Input.styles";

const Input = (props) => {
  return (
    <>
      <Text
        onChange={props.onChange}
        type={props.type || 'text'}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  )
}
export default Input;