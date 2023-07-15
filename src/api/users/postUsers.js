import request from "../request/request";
import { getItem } from "../../utils/localStorage";

const createUsers = (name, email, password, role) => {
  const token = getItem("token");
  return request("users", "POST", { Authorization: `Bearer ${token}` }, {
    name,
    email,
    password,
    role,
  });
};

export default createUsers;
