import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  resetFilters,
  setAuthor,
  setBookTitle,
  setPages,
} from "../../redux/filters/slice";
import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import s from "./AddBook.module.css";
import { useNavigate } from "react-router";

export const AddBook = ({ onOpenModal }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTitleChange = (e) => {
    dispatch(setBookTitle(e.target.value));
  };
  const handleAuthorChange = (e) => {
    dispatch(setAuthor(e.target.value));
  };

  const handlePagesChange = (e) => {
    dispatch(setPages(e.target.value));
  };
  const onSubmit = () => {
    dispatch(resetFilters());
    // dispatch(setBookTitle(title));
    // dispatch(setAuthor(author));
    // dispatch(setPages(pages));
  };

  return (
    <>
      <p className="formName">Filters:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.addBookForm}>
        <div className="inputBox">
          <span className="label">Book title:</span>
          <input {...register("title")} onChange={handleTitleChange} />
        </div>
        <div className="inputBox">
          <span className="label">The author:</span>
          <input {...register("author")} onChange={handleAuthorChange} />
        </div>
        <div className="inputBox">
          <span className="label">Number of pages:</span>
          <input
            type="number"
            {...register("pages")}
            onChange={handlePagesChange}
          />
        </div>

        <button type="submit" onClick={onOpenModal}>
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
