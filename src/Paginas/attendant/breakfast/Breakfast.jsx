import Logo from '../../../../src/assets/Logo.svg'
import LogoOut from '../../../assets/Logout.svg'
import LogoAdd from '../../../assets/LogoAdd.svg'
import Button from '../../../Components/button/Button';
import { Header, Main, LogoImg, LogoImgOut, DivMenu, Item, LogoImgAdd } from '../breakfast/Breakfast.styled';
import { React } from 'react';
import { useNavigate } from "react-router-dom";

const Breakfast = () => {
    const navigation = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigation('/resto-do-dia');
    }

    return (
        <>
            <Header>

                <LogoImg src={Logo} alt='logo jason brueger' />
                <Button variant='primary'>Novo Pedido</Button>
                <Button variant='primary'>Pedidos Prontos</Button>
                <LogoImgOut src={LogoOut} alt='logo de sair' />

            </Header>

            <Main>
                <DivMenu>
                    <div>
                        <Button variant='secundary'>Café da manhã</Button>
                        <Button variant='terciary' onClick={handleClick}>Resto do dia</Button>

                        <div>
                            <select type="" id="">
                                <option value="">Cova</option>
                                <option value="mesa1">Mesa 01</option>
                                <option value="mesa2">Mesa 02</option>
                                <option value="mesa3">Mesa 03</option>
                                <option value="mesa4">Mesa 04</option>
                                <option value="mesa5">Mesa 05</option>
                            </select>
                        </div>
                        <ul>
                            <Item>Café Americano</Item>
                            <div>
                                <LogoImgAdd src={LogoAdd} alt='logo de adicionar item' />
                            </div>
                            <Item>Café com leite</Item>
                            <div>
                                <LogoImgAdd src={LogoAdd} alt='logo de adicionar item' />
                            </div>
                            <Item>Sanduiche de presunto e queijo</Item>
                            <div>
                                <LogoImgAdd src={LogoAdd} alt='logo de adicionar item' />
                            </div>
                            <Item>Suco de fruta natural</Item>
                            <div>
                                <LogoImgAdd src={LogoAdd} alt='logo de adicionar item' />
                            </div>
                        </ul>
                    </div>

                </DivMenu>
                <div>
                    <section>
                        <form>
                            <h1>Resumo da Lápide</h1>
                        </form>
                    </section>
                </div>


            </Main>
        </>
    )
}

export default Breakfast;
