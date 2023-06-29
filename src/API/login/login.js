import request from "../request/request";

const userLogin = (email, password) => {
  return request("login", "POST", {}, { email, password });
};

export default userLogin;
