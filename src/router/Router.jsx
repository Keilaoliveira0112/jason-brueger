import { BrowserRouter, Routes, Route } from "react-router-dom";
import pageRoute from "./pageRoute";
import UserRoles from "./UserRoles";
import Login from "../Pages/Login/Login";
import NewOrder from "../Pages/Attendant/NewOrder/NewOrder";
import ReadyOrders from "../Pages/Attendant/ReadyOrders/ReadyOrders";
import PendingOrders from "../Pages/Chef/PendingOrders/PendingOrders";
import CompletedOrders from "../Pages/Chef/CompletedOrders/CompletedOrders";
import Products from "../Pages/Manager/Products/Products";
import Collaborators from "../Pages/Manager/Collaborators/Collaborators";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageRoute.login} element={<Login />} />
        <Route
          path={pageRoute.newOrder}
          element={
            (
              <UserRoles user="atendente">
                <NewOrder />
              </UserRoles>
            )
          }
        />
        <Route
          path={pageRoute.readyOrders}
          element={
            (
              <UserRoles user="atendente">
                <ReadyOrders />
              </UserRoles>
            )
          }
        />
        <Route
          path={pageRoute.pendingOrders}
          element={
            (
              <UserRoles user="chefe de cozinha">
                <PendingOrders />
              </UserRoles>
            )
          }
        />
        <Route
          path={pageRoute.completedOrders}
          element={
            (
              <UserRoles user="chefe de cozinha">
                <CompletedOrders />
              </UserRoles>
            )
          }
        />
        <Route
          path={pageRoute.collaborators}
          element={
            (
              <UserRoles user="admin">
                <Collaborators />
              </UserRoles>
            )
          }
        />
        <Route
          path={pageRoute.products}
          element={
            (
              <UserRoles user="admin">
                <Products />
              </UserRoles>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
