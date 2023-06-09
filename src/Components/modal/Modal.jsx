import { Background, ModalSection } from "./Modal.styles";

const Modal = (props) => {
  if(props.isOpen) {
    return (
      <Background>
        <ModalSection>
          <h6>{props.message}</h6>
          <button onClick={props.setModalOpen}>Fechar</button>
        </ModalSection>
      </Background>
    )
  };

  return null;
};
  
export default Modal;