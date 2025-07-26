import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/operations";
import { selectBooks } from "../../redux/books/selectors";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";

export const RecommendedBooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector(selectBooks);

  return (
    <>
      <h2>Recommended</h2>
      <SwiperComponent spaceBetween={21} slidesPerView={2}>
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <div>
              <img src={book.imageUrl} />
              <h5>{book.title}</h5>
              <p>{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
};
