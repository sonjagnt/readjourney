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
import { selectFilters } from "../../redux/filters/selectors";
import { Icon } from "../../ui/Icon/Icon";

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
  const booksPerPage = 10;
  const filters = useSelector(selectFilters);
  const pageBooks = filteredBooks.slice(
    (page - 1) * booksPerPage,
    page * booksPerPage
  );

  const handleNextPage = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  useEffect(() => {
    dispatch(getBooks({ page, filters }));
    swiperRef.current?.slideTo(0);
  }, [dispatch, page, filters]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const handleOpenModal = (book) => {
    onOpenModal(book);
  };

  if (filteredBooks.length === 0) {
    return <p>No books found. Please, try again!</p>;
  }
  return (
    <>
      <div className={s.boxHeader}>
        {variant === "default" ? (
          <>
            <h2 className={s.title}>Recommended</h2>{" "}
            <div className={s.btnBox}>
              <button
                className={s.pageBtn}
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                <Icon
                  name="chevron-down"
                  className={s.prev}
                  width={14}
                  color={page === 1 ? "var(--input)" : "var(--white)"}
                />
              </button>
              <button
                className={s.pageBtn}
                onClick={handleNextPage}
                disabled={page === totalPages}
              >
                <Icon
                  name="chevron-down"
                  className={s.next}
                  width={14}
                  color={page === totalPages ? "var(--input)" : "var(--white)"}
                />
              </button>
            </div>
          </>
        ) : (
          <h2 className={s.compactTitle}>Recommended books</h2>
        )}{" "}
      </div>
      <SwiperComponent
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {pageBooks.map((book) => (
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
      </SwiperComponent>
    </>
  );
};
