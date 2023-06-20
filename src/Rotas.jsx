import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/login/Login';
import NewOrder from './Paginas/attendant/newOrder/NewOrder';
import ReadyOrders from './Paginas/attendant/readyOrders/ReadyOrders';
import PendingOrdes from './Paginas/chef/pendingOrders/PendingOrders';
import CompletedOrders from './Paginas/chef/completedOrders/CompletedOrders';

const Rotas = () => {
  return (
    <BrowserRouter>        
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/novo-pedido' element={<NewOrder />} />
        <Route path='/pedidos-prontos' element={<ReadyOrders />} />
        <Route path='/pedidos-pendentes' element={<PendingOrdes />} />
        <Route path='/pedidos-concluídos' element={<CompletedOrders />} />
        <Route path='/pedidos-prontos' element={<ReadyOrders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas

