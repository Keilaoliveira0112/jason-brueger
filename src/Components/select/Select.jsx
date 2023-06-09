import { SelectContainer } from "./Select.styles"

 const Select = (props) => {
  return (
      <SelectContainer defaultValue={{value: 'Cova'}} onChange={props.onChange}>
          <option value="Cova" >Cova</option>
          <option value="001">Cova 1</option>
          <option value="002">Cova 2</option>
          <option value="003">Cova 3</option>
          <option value="004">Cova 4</option>
      </SelectContainer>
  )
}
export default Select