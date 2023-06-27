import { request } from "../request/request";

export const userLogin = (email, password) => {
  return request("login", "POST", {}, { email, password });
};