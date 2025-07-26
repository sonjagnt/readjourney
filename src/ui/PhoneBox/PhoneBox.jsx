import s from "./PhoneBox.module.css";
import img from "../../assets/images/phone@1x.png";

export const PhoneBox = () => {
  return (
    <div className={s.box}>
      <img src={img} className={s.img} />
    </div>
  );
};
