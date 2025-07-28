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
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";
import { setLoggedIn } from "../redux/auth/slice";
import { MyLibraryPage } from "../pages/MyLibraryPage/MyLibraryPage";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(setLoggedIn());
    dispatch(refreshUser());
  }, [dispatch]);

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
        <Route path="recommended" element={<RecommendedPage />} />
        <Route path="library" element={<MyLibraryPage />} />
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
