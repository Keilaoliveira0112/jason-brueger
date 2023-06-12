import Header from '../../Components/header/Header';
import Star from '../../assets/Star.svg';
import Button from '../../Components/button/Button';

const PendingOrdes = () => {
  return (
    <>
      <Header 
        firstBtn='Pedidos Pendentes'
        variantFirstBtn=''
        secondBtn='Pedidos Entregues'
        variantSecondBtn='quinary'  
      />
      <section>
        <h1>Resumo da Lápide</h1>
        <img src={Star} alt='Estrela que indica a hora do pedido'/>
        <p>19:31</p>
        <h4>Cova: </h4>
        <p>001</p>
        <h4>Cliente: </h4>
        <p>Manuela</p>
        <h4>Atendente: </h4>
        <p>Samara </p>
        <table>
          <tr>
            <caption>pedidos</caption>
            <th>pedido</th>
            <th>Quant.</th>
          </tr>
          <tr>
            <td>Biscoitinhos dos perdedore</td>
            <td>1</td>
          </tr>
        </table>
        <Button variant='senary'>Entregar</Button>
      </section>
    </>
  )
}

export default PendingOrdes;