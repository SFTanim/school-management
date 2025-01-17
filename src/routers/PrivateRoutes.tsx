import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  // Redirect to /signin if the user is not authenticated
  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;
