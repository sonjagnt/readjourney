import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RecommendedPage } from "../pages/RecommendedPage/RecommendedPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";
import { setLoggedIn } from "../redux/auth/slice";
import { MyLibraryPage } from "../pages/MyLibraryPage/MyLibraryPage";
import { ModalWindow } from "../ui/ModalWindow/ModalWindow";
import { AddBookModal } from "./AddBookModal/AddBookModal";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);

  const handleClose = () => {
    setModalOpen(false);
    setSelectedBook(null);
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  useEffect(() => {
    dispatch(setLoggedIn());
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading</div>;
  }
  return (
    <>
      <ModalWindow isOpen={modalOpen} onClose={handleClose}>
        {selectedBook && (
          <AddBookModal onClose={handleClose} book={selectedBook} />
        )}
      </ModalWindow>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<HomePage openModal={handleOpenModal} />} />
          <Route
            path="recommended"
            element={<RecommendedPage openModal={handleOpenModal} />}
          />
          <Route
            path="library"
            element={<MyLibraryPage openModal={handleOpenModal} />}
          />
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
    </>
  );
}

export default App;
