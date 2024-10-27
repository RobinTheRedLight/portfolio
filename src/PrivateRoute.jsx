/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "./redux/features/auth/authSlice";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
