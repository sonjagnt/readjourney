import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn, isRefreshing } = useSelector((state) => state.auth);
  console.log("🔒 PrivateRoute check:", { isLoggedIn, isRefreshing });
  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};
