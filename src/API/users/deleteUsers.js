import request from "../request/request";
import { getItem } from "../../storage/local";

const deleteUser = (userId) => {
  const token = getItem("token");
  return request(`users/${userId}`, "DELETE", { Authorization: `Bearer ${token}` });
};

export default deleteUser;
