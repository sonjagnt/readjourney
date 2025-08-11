import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/slice";
import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import s from "./AddBook.module.css";
import { useNavigate } from "react-router";
import { addBook } from "../../redux/books/operations";

export const AddBook = ({ onOpenModal }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(resetFilters());
    dispatch(addBook(data));
  };

  return (
    <>
      <p className="formName">Filters:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.addBookForm}>
        <div className="inputBox">
          <span className="label">Book title:</span>
          <input {...register("title")} />
        </div>
        <div className="inputBox">
          <span className="label">The author:</span>
          <input {...register("author")} />
        </div>
        <div className="inputBox">
          <span className="label">Number of pages:</span>
          <input type="number" {...register("totalPages")} />
        </div>

        <button type="submit" onClick={onOpenModal} className="grayBtn">
          Add book
        </button>
      </form>
      <div className={s.container}>
        <RecommendedBooks slidesPerView={3} variant="compact" />
        <button onClick={() => navigate("/")} className="secondaryBtn">
          Home
        </button>
      </div>
    </>
  );
};
