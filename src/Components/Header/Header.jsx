import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logout from "../../assets/logout.svg";
import Button from "../Button/Button";
import { ContainerHeader, ImgLogo, ImgLogout } from "./Header.styles";
import { removeItem } from "../../utils/localStorage";
import pageRoute from "../../router/pageRoute";

const Header = (props) => {
  const navigation = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigation(pageRoute.login);
    removeItem("token");
  };
  return (
    <ContainerHeader>
      <ImgLogo src={logo} alt="logo jason brueger" />
      <Button type="button" variant={props.variantFirstBtn} onClick={props.onClick}>{props.firstBtn}</Button>
      <Button type="button" variant={props.variantSecondBtn} onClick={props.onClick}>{props.secondBtn}</Button>
      <ImgLogout src={logout} alt="botão de sair" onClick={handleClick} />
    </ContainerHeader>
  );
};

export default Header;
