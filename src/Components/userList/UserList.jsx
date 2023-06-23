import { Ul, TemplateList, ClientName, ValueSelect, Email, ValueEmail, Office, ValueOffice, ImgEdit, ImgDelete, Topic, GroupButtons, Buttons } from './UserList.styles';
import btnDelete from "../../assets/btnDelete.svg";
import btnEdit from "../../assets/btnEdit.svg";


const UserList = (props) => {

   
  return (
    
    <Ul>
        {props.uservalue.map((value)=> (
            <TemplateList key={value.id}>
                <Topic>
                    <ClientName>Nome:</ClientName>
                    <ValueSelect>{value.name}</ValueSelect>
                </Topic>
                    <Topic>
                    <Email>Email:</Email>
                <ValueEmail >{value.email}</ValueEmail>
                </Topic>
                <Topic>
                    <Office>Cargo:</Office>
                    <ValueOffice>{value.role}</ValueOffice>
                </Topic>
                <GroupButtons>
                <Buttons onClick={() => props.onClickEdit()}>
                  <ImgEdit src={btnEdit} alt="Botão de editar funcionários" />
                </Buttons>
                <Buttons onClick={() => props.onClickDelete()}>
                  <ImgDelete src={btnDelete} alt="Botão de excluir funcionários" />
                </Buttons>
              </GroupButtons>
                               
            </TemplateList>
        ))}
    </Ul>
  
  )
}
export default UserList;