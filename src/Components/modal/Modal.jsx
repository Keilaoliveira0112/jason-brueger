import { Background, ModalSection, BtnClose, Message } from "./Modal.styles";
import ContainerButtons from "../containerButtons/ContainerButtons";

const Modal = (props) => {
  if(props.isOpen) {
    
    const handleOutsideClick = (e) => {
      if(e.target.id === 'modal') props.setModalOpen();
    }

    return (
      <Background id='modal' onClick={handleOutsideClick}>
        {props.typeModal === 'notification' ? (
          <ModalSection>
            <BtnClose onClick={props.setModalOpen} />
            <Message>{props.message}</Message>
          </ModalSection>
        ) : (
          <ModalSection>
            <BtnClose onClick={props.setModalOpen} />
            <Message>{props.message}</Message>
            <ContainerButtons
              variantContainer='center'
              variantBtnOne='septenary'
              variantBtnTwo='senary'
              onClickBtnOne={props.setModalOpen}
              onClickBtnTwo={props.send}
              childrenBtnTwo={'Sim'}
              childrenBtnOne={'Cancelar'}
            />
          </ModalSection>
        )}
      </Background>
    )
  };

  return null;
};
  
export default Modal;