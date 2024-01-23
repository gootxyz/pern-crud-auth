/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectTo }) => {
  if (!isAllowed) return <Navigate to={redirectTo} replace />;
  //outlet = children for routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
