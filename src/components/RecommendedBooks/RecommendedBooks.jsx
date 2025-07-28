import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/operations";
import {
  selectFilteredBooks,
  selectTotalPages,
} from "../../redux/books/selectors";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import s from "./RecommendedBooks.module.css";

export const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);

  const handleNext = () => {
    if (totalPages > 1) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    dispatch(getBooks(page));
  }, [dispatch, page]);

  const filteredBooks = useSelector(selectFilteredBooks);
  if (filteredBooks.length === 0) {
    return <p>No books found. Please, try again!</p>;
  }
  return (
    <>
      <h2 className={s.title}>Recommended</h2>
      <SwiperComponent spaceBetween={21} slidesPerView={2}>
        {filteredBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <div className={s.bookCard}>
              <div className={s.imgBox}>
                <img src={book.imageUrl} alt="Book cover" className={s.img} />
              </div>
              <h5>{book.title}</h5>
              <p>{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <button disabled={page === 1} onClick={handlePrev}>
        prev
      </button>
      <button disabled={page >= totalPages} onClick={handleNext}>
        next
      </button>
    </>
  );
};
