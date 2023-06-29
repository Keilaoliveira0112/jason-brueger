import { Navigate } from "react-router-dom";
import { getItem } from "../../storage/local";

const ProtectedRoute = ({ user, children }) => {
  const token = getItem("token");
  const role = getItem("role");

  if (token && role === user) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
