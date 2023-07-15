import FormAdd from "../FormAdd/FormAdd";
import {
  Background,
  ModalSection,
} from "./ModalUpdate.styles";
import { BtnClose } from "../Modal/Modal.styles";

const ModalUpdate = (props) => {
  if (props.isOpen) {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal") props.setModalOpen();
    };

    return (
      <Background id="modal" onClick={handleOutsideClick}>
        <ModalSection>
          <BtnClose onClick={props.setModalOpen} />
          <FormAdd
            onSubmit={props.onSubmit}
            onClick={props.onClickForm}
            optionsForm={props.optionsForm}
            childrenBtn={props.childrenBtn}
          />
        </ModalSection>
      </Background>
    );
  }
  return null;
};

export default ModalUpdate;
