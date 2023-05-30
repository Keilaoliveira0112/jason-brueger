import { Li, ButtonAdd, DishName, Price } from './List.styles'

const List = (props) => {
  /* return (
    <p>{props.name}</p>
  ) */
    
    return (
      <Li>
        <DishName>{props.name}</DishName>
        <Price>{props.price}</Price>
        <ButtonAdd>+</ButtonAdd>
      </Li>
    )
}

export default List;