import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  Form,
  GroupInput,
  Topic,
  GroupButtons,
} from "./FormAdd.styles";

const FormAdd = (
  {
    onSubmit,
    onClick,
    optionsForm,
    childrenBtn,
  },
) => {
  return (
    <Form onSubmit={onSubmit}>
      {optionsForm.inputLabel.map((value) => (
        <GroupInput key={value.placeholder}>
          <Topic key={value.placeholder} htmlFor={value.name}>{value.label}</Topic>
          <Input
            type={value.type}
            name={value.name}
            placeholder={value.placeholder}
            value={value.value}
            onChange={value.onChange}
          />
        </GroupInput>
      ))}
      <Topic>{optionsForm.labelButton}</Topic>
      <GroupButtons>
        {optionsForm.buttons.map((children) => (
          <Button key={children} variant="octonary" onClick={onClick}>{children}</Button>
        ))}
      </GroupButtons>
      <Button variant="nonary" type="submit">{childrenBtn}</Button>
    </Form>
  );
};

export default FormAdd;
