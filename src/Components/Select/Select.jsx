import SelectContainer from "./Select.styles";

const Select = (props) => {
  return (
    <SelectContainer variant={props.variant} defaultValue={{ value: props.defaultValue }} onChange={props.onChange}>
      <option value={props.defaultValue}>{props.defaultValue}</option>
      {props.optionValues.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
    </SelectContainer>
  );
};

export default Select;
