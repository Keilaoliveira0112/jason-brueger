import request from "../request/request";
import { getItem } from "../../storage/local";

const createProduct = (name, price, type) => {
  const token = getItem("token");
  return request("products", "POST", { Authorization: `Bearer ${token}` }, {
    name,
    price,
    type,
    quantity: 1,
  });
};

export default createProduct;
