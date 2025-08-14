import s from "./PhoneBox.module.css";
import img from "../../assets/images/phone@1x.png";

export const PhoneBox = () => {
  return (
    <div className={s.box}>
      <img src={img} className={s.img} />
    </div>
  );
};

// import s from "./PhoneBox.module.css";
// import img from "../../assets/images/phone@1x.png";

// export const PhoneBox = () => {
//   return (
//     <div className={s.box}>
//       <img
//         src="../../assets/images/phone@1x.png"
//         className={s.img}
//         srcSet="../../assets/images/phone@1x.png 1x,  ../../assets/images/phone@2x.png 2x"
//       />
//     </div>
//   );
// };
