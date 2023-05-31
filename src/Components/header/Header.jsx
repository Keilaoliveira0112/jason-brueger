import Logo from '../../assets/Logo.svg';
import Logout from '../../assets/Logout.svg';
import Button from '../../Components/button/Button';
import { ContainerHeader, ImgLogo, ImgLogout } from './Header.styles'

const Header = () => {
    return (
      <ContainerHeader>
        <ImgLogo src={Logo} alt='logo jason brueger' />
        <Button type='button' children='Novo Pedido' />
        <Button type='button'variant='quintenary' children='Pedidos Prontos' />
        <ImgLogout src={Logout} alt='botão de sair' />
      </ContainerHeader>
    )
}

export default Header;