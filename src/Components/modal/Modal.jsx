import { Background, ModalSection, BtnClose, Check, Message } from "./Modal.styles";
import ContainerButtons from "../containerButtons/ContainerButtons";
import Verified from '../../assets/Verified.gif';
import Warning from '../../assets/Warning.gif'

const Modal = (props) => {
  if(props.isOpen) {
    
    const handleOutsideClick = (e) => {
      if(e.target.id === 'modal') props.setModalOpen();
    }

    return (
      <Background id='modal' onClick={handleOutsideClick}>
        {props.typeModal === 'confirmation' ? (
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
        ) : (
          <ModalSection>
          <BtnClose onClick={props.setModalOpen} />
          {props.typeModal === 'warning' ? (<Check src={Warning} alt='gif de alerta'/>)
          : (<Check src={Verified} alt='marca de verificação com sucesso'/>)}
          <Message>{props.message}</Message>
        </ModalSection>
        )}
      </Background>
    )
  };

  return null;
};
  
export default Modal;