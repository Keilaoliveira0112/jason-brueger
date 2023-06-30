import request from "../request/request";
import { getItem } from "../../storage/local";

const getOrders = () => {
  const token = getItem("token");
  return request("orders", "GET", { Authorization: `Bearer ${token}` });
};

export default getOrders;
