import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const getProducts = () => {
  const token = getItem("token");
  return request("products", "GET", { Authorization: `Bearer ${token}` });
};

export default getProducts;
