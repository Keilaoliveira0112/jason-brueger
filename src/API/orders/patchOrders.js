import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const patchOrders = async (idOrder, status) => {
  const token = getItem("token");
  return request(`orders/${idOrder}`, "PATCH", { Authorization: `Bearer ${token}` }, {
    status,
    dateProcessed: new Date(),
  });
};

export default patchOrders;
