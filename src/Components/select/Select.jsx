import { SelectContainer } from "./Select.styles"

 function Select(props) {
  return (
      <SelectContainer defaultValue={{value: 'Cova'}} onChange={props.onChange}>
          <option value="Cova" >Cova</option>
          <option value="Cova1">Cova 1</option>
          <option value="Cova2">Cova 2</option>
          <option value="Cova3">Cova 3</option>
          <option value="Cova4">Cova 4</option>
      </SelectContainer>
  )
}
export default Select