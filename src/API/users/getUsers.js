import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const getUsers = () => {
  const token = getItem("token");
  return request("users", "GET", { Authorization: `Bearer ${token}` });
};

export default getUsers;
