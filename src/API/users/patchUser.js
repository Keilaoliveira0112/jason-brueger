import request from "../request/request";
import { getItem } from "../../storage/local";

const patchUser = (id, updateUsers) => {
  const token = getItem("token");
  return request(`users/${id}`, "PATCH", { Authorization: `Bearer ${token}` }, updateUsers);
};

export default patchUser;
