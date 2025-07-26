import s from "./Menu.module.css";

export const Menu = ({ children }) => {
  return <div className={s.menu}>{children}</div>;
};
