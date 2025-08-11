import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  resetFilters,
  setAuthor,
  setBookTitle,
  setPages,
} from "../../redux/filters/slice";
import { getBooks } from "../../redux/books/operations";

export const FilterBar = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ title, author, pages }) => {
    dispatch(resetFilters());
    dispatch(setBookTitle(title));
    dispatch(setAuthor(author));
    dispatch(setPages(pages));
    dispatch(getBooks({ page: 1, filters: { title, author, pages } }));
  };

  return (
    <>
      <p className="formName">Filters:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputBox">
          <span className="label">Book title:</span>
          <input {...register("title")} />
        </div>
        <div className="inputBox">
          <span className="label">The author:</span>
          <input {...register("author")} />
        </div>

        <button type="submit" className="grayBtn">
          To apply
        </button>
      </form>
    </>
  );
};
