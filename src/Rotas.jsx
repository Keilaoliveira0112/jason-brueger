import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NewOrder from "./Pages/Attendant/NewOrder/NewOrder";
import ReadyOrders from "./Pages/Attendant/ReadyOrders/ReadyOrders";
import PendingOrdes from "./Pages/Chef/PendingOrders/PendingOrders";
import CompletedOrders from "./Pages/Chef/CompletedOrders/CompletedOrders";
import Products from "./Pages/Manager/Products/Products";
import Collaborators from "./Pages/Manager/Collaborators/Collaborators";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/novo-pedido"
          element={
            (
              <ProtectedRoute user="atendente">
                <NewOrder />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/pedidos-prontos"
          element={
            (
              <ProtectedRoute user="atendente">
                <ReadyOrders />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/pedidos-pendentes"
          element={
            (
              <ProtectedRoute user="chefe de cozinha">
                <PendingOrdes />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/pedidos-concluídos"
          element={
            (
              <ProtectedRoute user="chefe de cozinha">
                <CompletedOrders />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/colaboradores"
          element={
            (
              <ProtectedRoute user="admin">
                <Collaborators />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/produtos"
          element={
            (
              <ProtectedRoute user="admin">
                <Products />
              </ProtectedRoute>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
