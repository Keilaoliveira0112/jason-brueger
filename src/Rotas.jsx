import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/login/Login';
import NewOrder from './Paginas/attendant/newOrder/NewOrder';
import ReadyOrders from './Paginas/attendant/readyOrders/ReadyOrders';
import PendingOrdes from './Paginas/chef/pendingOrders/PendingOrders';
import CompletedOrders from './Paginas/chef/completedOrders/CompletedOrders';
import Products from './Paginas/manager/products/Products';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute';
import Collaborators from './Paginas/manager/collaborators/Collaborators';

const Rotas = () => {
  return (
    <BrowserRouter>        
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/novo-pedido' element={
          <ProtectedRoute user={'atendente'}>
            <NewOrder />
          </ProtectedRoute>
        } />
        <Route path='/pedidos-prontos' element={
          <ProtectedRoute user={'atendente'}>
            <ReadyOrders />
          </ProtectedRoute>
        } />
        <Route path='/pedidos-pendentes' element={
          <ProtectedRoute user={'chefe de cozinha'}>
            <PendingOrdes />
          </ProtectedRoute>
        } />
        <Route path='/pedidos-concluídos' element={
          <ProtectedRoute user={'chefe de cozinha'}>
            <CompletedOrders />
          </ProtectedRoute>
        } />
        <Route path='/produtos' element={
          <ProtectedRoute user={'admin'}>
            <Products />
          </ProtectedRoute>
        } />
        <Route path='/colaboradores' element={
          <ProtectedRoute user={'admin'}>
            <Collaborators />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas

