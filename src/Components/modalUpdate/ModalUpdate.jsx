import FormAdd from "../formAdd/FormAdd";
import { Background, BtnClose } from "../modal/Modal.styles";
import { ModalSection } from "../modalUpdate/ModalUpdate.styles";

const ModalUpdate = (props) => {
  if(props.isOpen) {
    const handleOutsideClick = (e) => {
      if(e.target.id === 'modal') props.setModalOpen();
    }

    /* const predefinedButton = (e) => {
      e.preventDefault();
      const typeValue = props.value.type;
      console.log(typeValue)
      //deixar ativo o botão selecionado
      //simular o click
      return props.type;
    } */

    return (
      <Background id='modal' onClick={handleOutsideClick}>
        <ModalSection>
          <BtnClose onClick={props.setModalOpen} />
          <FormAdd
            onSubmit={props.onSubmit} 
            name={props.name}
            onChangeName={props.onChangeName}
            price={props.price}
            onChangePrice={props.onChangePrice}
            onClick={props.type}
            childrenBtn="Atualizar Produto"
          />
        </ModalSection>
      </Background>
    )
  }
  return null;
}

export default ModalUpdate;