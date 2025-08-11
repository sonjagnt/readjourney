import { useDispatch, useSelector } from "react-redux";
import { selectUserBooks } from "../../redux/books/selectors";
import { useEffect } from "react";
import { getOwnBooks } from "../../redux/books/operations";

export const MyLibraryBooks = () => {
  const userBooks = useSelector(selectUserBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnBooks());
  }, [dispatch]);

  return (
    <div>
      <h2>My library</h2>
      <ul>
        {userBooks.map((b) => (
          <li key={b._id}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
};
