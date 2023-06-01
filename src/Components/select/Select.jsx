import { SelectContainer } from "./Select.styles"

 function Select() {
  return (
      <SelectContainer defaultValue={{value: 'Cova'}}>
          <option value="Cova" >Cova</option>
          <option value="Cova1">Cova 1</option>
          <option value="Cova2">Cova 2</option>
          <option value="Cova3">Cova 3</option>
          <option value="Cova4">Cova 4</option>
      </SelectContainer>
  )
}
export default Select