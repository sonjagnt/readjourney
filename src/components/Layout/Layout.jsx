import { Outlet } from "react-router-dom";
import { Header } from "../Header/HEader";

export const Layout = () => {
  console.log("Layout rendered");
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
