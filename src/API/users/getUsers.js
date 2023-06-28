import { request } from "../request/request";
import { getItem } from "../../storage/local";

export const getUsers = () => {
  const token = getItem("token");
  return request("users", "GET", { Authorization: `Bearer ${token}` });
};