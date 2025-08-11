import { useDispatch } from "react-redux";
import s from "./AddBookModal.module.css";
import { addBookById } from "../../redux/books/operations";

export const AddBookModal = ({ onClose, book }) => {
  const dispatch = useDispatch();
  const handleAddBook = (id) => {
    dispatch(addBookById(id));
  };

  return (
    <div className={s.modalBox}>
      <div className={s.imgWrapper}>
        <img src={book.imageUrl} />
      </div>
      <h3>{book.title}</h3>
      <p className={s.author}>{book.author}</p>
      <p className={s.pages}>{book.totalPages} pages</p>
      <button
        onClick={() => {
          handleAddBook(book._id);
          onClose();
        }}
        className="grayBtn"
      >
        Add to library
      </button>
    </div>
  );
};
