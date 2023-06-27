import Logo from "../../assets/Logo.svg";
import Logout from "../../assets/Logout.svg";
import Button from "../../Components/button/Button";
import { ContainerHeader, ImgLogo, ImgLogout } from "./Header.styles";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../storage/local";

const Header = (props) => {
  const navigation = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigation("/");
    removeItem("token")
  }
  return (
    <ContainerHeader>
      <ImgLogo src={Logo} alt="logo jason brueger" />
      <Button type="button" variant={props.variantFirstBtn} onClick={props.onClick} children={props.firstBtn} />
      <Button type="button" variant={props.variantSecondBtn} onClick={props.onClick} children={props.secondBtn} />
      <ImgLogout src={Logout} alt="botão de sair" onClick={handleClick} />
    </ContainerHeader>
  );
};

export default Header;