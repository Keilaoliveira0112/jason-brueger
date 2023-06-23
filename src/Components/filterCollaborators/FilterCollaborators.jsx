import { Filter } from "./FilterCollaborators.styles";

 const FilterCollaborators = (props) => {
  return (
    <Filter  variant={props.variant} defaultValue={{value: props.defaultValue}} onChange={props.onChange}>
      <option value={props.defaultValue}>{props.defaultValue}</option>
        {props.optionValues.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
    </Filter>
  )
}
export default FilterCollaborators;

