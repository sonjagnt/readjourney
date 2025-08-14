import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/slice";
import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import s from "./AddBook.module.css";
import { Link } from "react-router";
import { addBook } from "../../redux/books/operations";
import { Icon } from "../../ui/Icon/Icon";
import { addBookValidationSchema } from "../../../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export const AddBook = ({ onOpenModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(addBookValidationSchema) });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (!data) {
      return;
    }
    onOpenModal(data);
    dispatch(addBook(data));
    dispatch(resetFilters());
    reset();
  };

  return (
    <>
      <p className="formName">Filters:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.addBookForm}>
        <div className="inputBox">
          <span className="label">Book title:</span>
          <input {...register("title")} />
          <span className="errorMsg">{errors.title?.message}</span>
        </div>
        <div className="inputBox">
          <span className="label">The author:</span>
          <input {...register("author")} />
          <span className="errorMsg">{errors.author?.message}</span>
        </div>
        <div className="inputBox">
          <span className="label">Number of pages:</span>
          <input type="number" {...register("totalPages")} />
          <span className="errorMsg">{errors.totalPages?.message}</span>
        </div>

        <button type="submit" className="grayBtn">
          Add book
        </button>
      </form>
      <div className={s.container}>
        <RecommendedBooks
          slidesPerView={3}
          variant="compact"
          onOpenModal={onOpenModal}
        />
        <div className={s.btnBox}>
          <Link to="/" className="secondaryBtn">
            Home
          </Link>
          <Link to="/" className={s.iconLink}>
            <Icon name="log-in" />
          </Link>
        </div>
      </div>
    </>
  );
};
