import { request } from "../request/request";
import { getItem } from "../../storage/local";

export const deleteUser = (id) => {
  const token = getItem("token");
  return request(`users/${id}`, "DELETE", { Authorization: `Bearer ${token}` })
};