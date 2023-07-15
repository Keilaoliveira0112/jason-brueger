import { Navigate } from "react-router-dom";
import { getItem } from "../utils/localStorage";

const UserRoles = ({ user, children }) => {
  const token = getItem("token");
  const role = getItem("role");

  if (token && role === user) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default UserRoles;
