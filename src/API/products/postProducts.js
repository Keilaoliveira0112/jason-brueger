import { request } from "../request/request";
import { getItem } from "../../storage/local";

export const createProduct = (name, price, type) => {
  const token = getItem("token");

  return request("products", "POST", { Authorization: `Bearer ${token}` }, {
    name,
    price,
    type,
    quantity: 1
  });
};
