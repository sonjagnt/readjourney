import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/operations";
import {
  selectFilteredBooks,
  selectTotalPages,
} from "../../redux/books/selectors";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperComponent } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import s from "./RecommendedBooks.module.css";

export const RecommendedBooks = ({
  slidesPerView = 2,
  variant = "default",
  onOpenModal,
}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const swiperRef = useRef();
  const filteredBooks = useSelector(selectFilteredBooks);

  useEffect(() => {
    dispatch(getBooks(page));
  }, [dispatch, page]);

  const handleOpenModal = (book) => {
    onOpenModal(book);
    console.log(book);
  };

  const handleReachEnd = () => {
    if (page < totalPages) {
      const currentIndex = swiperRef.current?.activeIndex || 0;

      setPage((prev) => prev + 1);

      setTimeout(() => {
        swiperRef.current?.slideTo(currentIndex, 0);
      }, 0);
    }
  };

  if (filteredBooks.length === 0) {
    return <p>No books found. Please, try again!</p>;
  }
  return (
    <>
      {variant === "default" ? (
        <h2 className={s.title}>Recommended</h2>
      ) : (
        <h2 className={s.compactTitle}>Recommended books</h2>
      )}
      <SwiperComponent
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onReachEnd={handleReachEnd}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {filteredBooks.map((book) => (
          <SwiperSlide key={book._id} onClick={() => handleOpenModal(book)}>
            <div
              className={`${s.bookCard} ${
                variant === "compact" ? s.compactCard : ""
              }`}
            >
              <div className={s.imgBox}>
                <img src={book.imageUrl} alt="Book cover" className={s.img} />
              </div>
              <h5>{book.title}</h5>
              <p>{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </SwiperComponent>
    </>
  );
};
