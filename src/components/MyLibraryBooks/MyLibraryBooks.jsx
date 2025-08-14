import { useDispatch, useSelector } from "react-redux";
import { selectUserBooks } from "../../redux/books/selectors";
import { useEffect, useState } from "react";
import { getOwnBooks, removeBook } from "../../redux/books/operations";
import { Icon } from "../../ui/Icon/Icon";
import s from "./MyLibraryBooks.module.css";
import { SwiperSlide } from "swiper/react";
import Select from "react-select";
import { Swiper as SwiperComponent } from "swiper/react";

import "swiper/css";
import { customStyles, theme } from "../../../styles/customStyles";

export const MyLibraryBooks = () => {
  const [status, setStatus] = useState("all");
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All books",
  });
  const userBooks = useSelector(selectUserBooks);
  const dispatch = useDispatch();

  const options = [
    { value: "all", label: "All books" },
    { value: "in-progress", label: "In progress" },
    { value: "done", label: "Done" },
    { value: "unread", label: "Unread" },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
    setStatus(option.value);
  };

  const handleDelete = (id) => {
    dispatch(removeBook(id));
    dispatch(getOwnBooks(status));
  };

  useEffect(() => {
    dispatch(getOwnBooks(status));
  }, [dispatch, status]);

  if (!userBooks || userBooks.length === 0) {
    return (
      <>
        <div className={s.boxHeader}>
          <h2 className={s.title}>My library</h2>
          <Select
            className={s.select}
            options={options}
            value={selectedOption}
            onChange={handleChange}
            styles={customStyles}
            theme={theme}
          />
        </div>
        <div className={s.emptyBox}>
          <span className={s.iconBox}>
            <img
              src="/icons-color/books.svg"
              className={s.icon}
              alt="Books emoji"
            />
          </span>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={s.boxHeader}>
        <h2 className={s.title}>My library</h2>
        <Select
          className={s.select}
          options={options}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          theme={theme}
        />
      </div>
      <SwiperComponent slidesPerView={2} spaceBetween={20}>
        {userBooks.map((b) => (
          <SwiperSlide key={b._id} className={s.bookCard}>
            <div className={s.imgBox}>
              {b.imageUrl ? (
                <img src={b.imageUrl} alt="Book cover" className={s.img} />
              ) : (
                <img src="/icons-color/image.svg" alt="No book cover" />
              )}
            </div>
            <div className={s.infoBox}>
              <h5>{b.title}</h5>
              <p>{b.author}</p>
              <button
                onClick={() => handleDelete(b._id)}
                className={s.deleteBtn}
              >
                <Icon name="bin" width={14} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
};
