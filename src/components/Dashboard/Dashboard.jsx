import s from "./Dashboard.module.css";

export const Dashboard = ({ children }) => {
  return <div className={s.dashboardBox}>{children}</div>;
};
