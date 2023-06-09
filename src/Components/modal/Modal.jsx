import { Background, ModalSection, BtnClose, Message } from "./Modal.styles";

const Modal = (props) => {
  if(props.isOpen) {
    
    const handleOutsideClick = (e) => {
      if(e.target.id === 'modal') props.setModalOpen();
    }

    return (
      <Background id='modal' onClick={handleOutsideClick}>
        <ModalSection>
          <BtnClose onClick={props.setModalOpen} />
          <Message>{props.message}</Message>
        </ModalSection>
      </Background>
    )
  };

  return null;
};
  
export default Modal;