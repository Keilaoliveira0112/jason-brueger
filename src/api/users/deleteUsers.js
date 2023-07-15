import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const deleteUser = (userId) => {
  const token = getItem("token");
  return request(`users/${userId}`, "DELETE", { Authorization: `Bearer ${token}` });
};

export default deleteUser;
