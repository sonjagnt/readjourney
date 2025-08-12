import { Link } from "react-router";
import { UserNav } from "../UserNav/UserNav";
import s from "./Header.module.css";
import { useState } from "react";
import { Box } from "../../ui/Box/Box";
import { Icon } from "../../ui/Icon/Icon";

export const Header = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className={s.headerBox}>
      <header className={s.header}>
        <Link to="/">
          <Icon name="logo" width={42} height={16} color="var(--white)" />
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <Icon name="menu" width={28} height={28} color="var(--white)" />
        </button>
        <UserNav open={open} closeFn={() => setIsOpen(false)} />
      </header>
    </div>
  );
};
