import { Section, Ul, TemplateList, ClientName, ValueSelect, Email, ValueEmail, Office, ValueOffice, BtnEdit, ImgEdit } from './UserList.styles';
 import btnEditCollaborators from '../../assets/btnEditCollaborators.svg';

const UserList = (props) => {
  return (
    <Section>
     <Ul>
        {props.orderItem.map((item)=> (
            <TemplateList key={item.id}>
                <ClientName>Nome:</ClientName>
                <ValueSelect>{item.ClientNameValue}</ValueSelect>
                <Email>Email:</Email>
                <ValueEmail >{item.Email}</ValueEmail>
                <Office>Cargo:</Office>
                <ValueOffice>{item.Office}</ValueOffice>
                <BtnEdit onClick={() => props.onClickDelete(item)} >  
                    <ImgEdit src={btnEditCollaborators} alt='editar informações do funcionário' />
                </BtnEdit>
                               
            </TemplateList>
        ))}
     </Ul>
    </Section>
  )
}
export default UserList;