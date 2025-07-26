export const Box = ({ children }) => {
  const style = {
    borderRadius: "30px",
    width: "335px",
    height: "411px",
    padding: " 40px 20px",
    backgroundColor: "var(--badges)",
    //   margin-bottom: 10px;
  };
  return <div style={{ style }}>{children}</div>;
};
