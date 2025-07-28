import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export const PrivateRoute = ({ children }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
