import { useDispatch, useSelector } from "react-redux";
import { selectUserBooks } from "../../redux/books/selectors";
import { useEffect } from "react";
import { getOwnBooks, removeBook } from "../../redux/books/operations";
import { Icon } from "../../ui/Icon/Icon";
import s from "./MyLibraryBooks.module.css";
import { SwiperSlide } from "swiper/react";

import { Swiper as SwiperComponent } from "swiper/react";

import "swiper/css";

export const MyLibraryBooks = () => {
  const userBooks = useSelector(selectUserBooks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  useEffect(() => {
    dispatch(getOwnBooks());
  }, [dispatch, userBooks]);

  return (
    <div>
      <h2>My library</h2>
      <SwiperComponent slidesPerView={2} spaceBetween={20}>
        {userBooks.map((b) => (
          <SwiperSlide key={b._id}>
            <div className={s.imgBox}>
              {b.imageUrl ? (
                <img src={b.imageUrl} alt="Book cover" className={s.img} />
              ) : (
                <Icon name="no-img" width={"100%"} height={"100%"} />
              )}
            </div>
            <h5>{b.title}</h5>
            <p>{b.author}</p>
            <button onClick={() => handleDelete(b._id)}>
              <Icon name="bin" />
            </button>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};
