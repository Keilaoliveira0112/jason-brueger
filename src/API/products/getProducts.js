import request from "../request/request";
import { getItem } from "../../storage/local";

const getProducts = () => {
  const token = getItem("token");
  return request("products", "GET", { Authorization: `Bearer ${token}` });
};

export default getProducts;
