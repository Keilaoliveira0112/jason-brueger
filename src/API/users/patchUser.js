import { request } from "../request/request";
import { getItem } from "../../storage/local";

export const patchUser = (id, updateUsers) => {
  const token = getItem("token");
  return request(`users/${id}`, "PATCH", { Authorization: `Bearer ${token}` }, updateUsers)
};