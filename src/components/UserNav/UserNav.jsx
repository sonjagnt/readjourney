import { useDispatch } from "react-redux";
import s from "./UserNav.module.css";
import { logout } from "../../redux/auth/operations";
import { NavLink } from "react-router";

export const UserNav = ({ closeFn, open }) => {
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    await dispatch(logout());
  };
  if (open) {
    return (
      <div className={s.overlay} onClick={closeFn}>
        <div className={s.menu}>
          <button onClick={closeFn}> close menu</button>
          <nav className={s.nav}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.navLink)}
            >
              Home
            </NavLink>
            <NavLink
              to="/library"
              className={({ isActive }) => (isActive ? s.active : s.navLink)}
            >
              My library
            </NavLink>
          </nav>
          <button onClick={handleLogOut} className={s.btn}>
            Log out
          </button>
        </div>
      </div>
    );
  }
  if (!open) return null;
};
