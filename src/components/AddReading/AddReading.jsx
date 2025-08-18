import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { finishReading, startReading } from "../../redux/books/operations";

export const AddReading = ({ book }) => {
  const dispatch = useDispatch();

  const { startPage, finishPage } = book.progress[0];
  console.log(startPage, finishPage);
  console.log(book.progress);
  const isReading = finishPage > 0 && finishPage < book.totalPages;

  const onSubmit = (data) => {
    if (data.page > startPage) {
      dispatch(finishReading({ id: book._id, page: Number(data.page) }));
    } else {
      dispatch(
        startReading({ id: book._id, page: Number(data.page) || finishPage })
      );
    }
  };

  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("page")} type="number" />
      <button type="submit" className="grayBtn">
        {isReading ? "To stop" : "To start"}
      </button>
    </form>
  );
};
