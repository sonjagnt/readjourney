import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  resetFilters,
  setAuthor,
  setBookTitle,
  setPages,
} from "../../redux/filters/slice";

export const AddBook = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ title, author, pages }) => {
    dispatch(resetFilters());
    dispatch(setBookTitle(title));
    dispatch(setAuthor(author));
    dispatch(setPages(pages));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <input type="number" {...register("pages")} />
        </div>

        <button type="submit" className="grayBtn">
          Add book
        </button>
      </form>
    </div>
  );
};
