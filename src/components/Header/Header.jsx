import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo.svg";
import { logout } from "../../redux/auth/operations";

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
      <button onClick={handleLogOut} style={{ color: "white" }}>
        Log out
      </button>
    </header>
  );
};
