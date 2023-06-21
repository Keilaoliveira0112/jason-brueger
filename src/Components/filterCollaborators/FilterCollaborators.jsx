import { Filter } from "./FilterCollaborators.styles";

 const FilterCollaborators = (props) => {
  return (
    <Filter defaultValue={{value: ''}} onChange={props.onChange}>
          <option value="Lista de Funcionários" >Lista de Funcionários</option>
          <option value="Adm">Administrador</option>
          <option value="Atendente">Atendente</option>
          <option value="Chef de Cozinha">Chef de Cozinha</option>
          <option value="Adicionar Funcionário">Adicionar Funcionário</option>
    </Filter>
  )
}
export default FilterCollaborators;