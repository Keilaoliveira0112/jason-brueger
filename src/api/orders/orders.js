import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const createOrder = (orderTotal, table, products, client) => {
  const token = getItem("token");
  const userName = getItem("username");

  return request("orders", "POST", { Authorization: `Bearer ${token}` }, {
    table,
    userName,
    client,
    products,
    orderTotal,
    status: "pending",
    dataEntry: new Date(),
  });
};

export default createOrder;
