import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.svg";
import { logout } from "../../redux/auth/operations";
import { Menu } from "../../ui/Menu/Menu";
import s from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout()).then(navigate("/login"));
  };
  return (
    <header>
      <Link to="/">
        <img src={logo} style={{ height: "17px" }} />
      </Link>
      <Menu>
        <nav className={s.nav}>
          <NavLink to="/" className="menu-item">
            Home
          </NavLink>
          <NavLink to="/library" className="menu-item">
            My library
          </NavLink>
        </nav>
        <button onClick={handleLogOut} className={s.btn}>
          Log out
        </button>
      </Menu>
    </header>
  );
};
