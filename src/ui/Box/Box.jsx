export const Box = ({ children }) => {
  const style = {
    borderRadius: "30px",
    width: "335px",
    padding: "40px 20px",
    backgroundColor: "var(--badges)",
    marginBottom: "10px",
  };
  return <div style={style}>{children}</div>;
};
