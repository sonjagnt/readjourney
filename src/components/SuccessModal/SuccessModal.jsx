import s from "./SuccessModal.module.css";

export const SuccessModal = () => {
  return (
    <div className={s.content}>
      <img src="/icons-color/thumbsup.svg" className={s.icon} />
      <h3>Good job!</h3>
      <p>
        Your book is now in <span>the library!</span> The joy knows no bounds
        and now you can start your training
      </p>
    </div>
  );
};
