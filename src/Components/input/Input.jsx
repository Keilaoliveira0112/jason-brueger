import { Text } from "./Input.styles";

const Input = (props) => {
  const whenTyped = (event) => {
    props.whenSaving(event.target.value)
  }
  return (
    <>
      <Text 
        onChange={whenTyped}
        type={props.type || 'text'}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  )
}
export default Input