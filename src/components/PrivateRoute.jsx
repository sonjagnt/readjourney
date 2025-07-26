import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsRefreshing, selectToken } from "../redux/auth/selectors";

export const PrivateRoute = ({ children }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return token ? children : <Navigate to="/login" />;
};
