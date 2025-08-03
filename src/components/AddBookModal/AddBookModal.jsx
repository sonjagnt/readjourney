import s from "./AddBookModal.module.css";

export const AddBookModal = ({ onClose, book }) => {
  return (
    <div className={s.modalBox}>
      <div className={s.imgWrapper}>
        <img src={book.imageUrl} />
      </div>
      <h3>{book.title}</h3>
      <p className={s.author}>{book.author}</p>
      <p className={s.pages}>{book.totalPages} pages</p>
      <button onClick={() => onClose()} className="grayBtn">
        Add to library
      </button>
    </div>
  );
};
