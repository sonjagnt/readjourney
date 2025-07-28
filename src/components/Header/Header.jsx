import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import { UserNav } from "../UserNav/UserNav";
// import s from "./Header.module.css";
import { useState } from "react";

export const Header = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <header>
      <Link to="/">
        <img src={logo} style={{ height: "17px" }} />
      </Link>
      <button onClick={() => setIsOpen(true)}>open menu</button>
      <UserNav open={open} closeFn={() => setIsOpen(false)} />
    </header>
  );
};
