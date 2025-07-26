import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RecommendedPage } from "../pages/RecommendedPage/RecommendedPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./Layout/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "./Dashboard/Dashboard";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  if (isRefreshing) {
    return <div>Loading</div>;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="recommended" element={<RecommendedPage />} />
      </Route>
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/">
            <RegisterPage />
          </RestrictedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/">
            <LoginPage />
          </RestrictedRoute>
        }
      />
    </Routes>
  );
}

export default App;
