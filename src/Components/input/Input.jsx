import TextField from "./Input.styles";

const Input = (props) => {
  return (
    <TextField
      onChange={props.onChange}
      type={props.type || "text"}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
