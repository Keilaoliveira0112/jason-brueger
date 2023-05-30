import Logo from '../../../../src/assets/Logo.svg'
import LogoOut from '../../../assets/Logout.svg'
import List from '../../../Components/list/List';
import Button from '../../../Components/button/Button';
import { Header, Main, LogoImg, LogoImgOut, ContainerButtons, Select, UlMenu, OrderResume, SectionMenu, TitleMenu, Pay, Payment } from '../breakfast/Breakfast.styled';
import { React } from 'react'

const Breakfast = () => {
    return (
        <>
            <Header>

                <LogoImg src={Logo} alt='logo jason brueger' />
                <Button variant='primary'>Novo Pedido</Button>
                <Button variant='primary'>Pedidos Prontos</Button>
                <LogoImgOut src={LogoOut} alt='logo de sair' />

            </Header>

            <Main>
                <SectionMenu>
                    <div>
                        <ContainerButtons>
                        <Button variant='secundary'>Café da manhã</Button>
                        <Button variant='terciary'>Resto do dia</Button>
                        </ContainerButtons>

                        <Select>
                            <option disabled selected>Cova</option>
                            <option value="Cova1">Cova 1</option>
                            <option value="Cova2">Cova 2</option>
                            <option value="Cova3">Cova 3</option>
                            <option value="Cova4">Cova 4</option>
                        </Select>
                        <UlMenu>
                            <List name={''} />
                            <List name={''} />
                            <List name={''} />
                            <List name={''} />
                        </UlMenu>    
                    </div>

                </SectionMenu>
                <OrderResume>
                    <Pay>
                        <h1>Resumo da Lápide</h1>
                        <p>Cova:</p>
                        <p>Hora:</p>

                        <Payment>
                            <TitleMenu>Total: </TitleMenu>
                            <Button>Enviar</Button>
                        </Payment>
                    </Pay>
                </OrderResume>
               

            </Main>
        </>
    )
}

export default Breakfast;
