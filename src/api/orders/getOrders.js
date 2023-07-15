import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const getOrders = () => {
  const token = getItem("token");
  return request("orders", "GET", { Authorization: `Bearer ${token}` });
};

export default getOrders;
