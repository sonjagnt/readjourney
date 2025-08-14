export const customStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    fontWeight: 500,
    width: "120px",
    fontSize: "12px",
    color: "var(--white)",
    borderRadius: "12px",
    border: "1px solid var(--gray)",
    boxShadow: "none",
    backgroundColor: "transparent",
    outline: "none",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--white)",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base, { selectProps }) => ({
    ...base,
    transform: selectProps.menuIsOpen ? "rotate(0deg)" : "rotate(180deg)",
    transition: "transform 0.2s ease",
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--white)",
    fontWeight: 500,
  }),
  menu: (base) => ({
    ...base,
    maxWidth: "120px",
    backgroundColor: "var(--input)",
    borderRadius: "12px",
    border: "none",
    color: "var(--white)",
    overflow: "hidden",
    zIndex: 15,
    padding: "14px 8px",
  }),
  option: (base, { isSelected }) => ({
    ...base,
    fontSize: "12px",
    fontWeight: 500,
    color: isSelected ? "var(--white)" : "var(--gray)",
    ":active": {
      color: "var(--white)",
    },
    cursor: "pointer",
  }),

  menuList: (base) => ({
    ...base,
    fontWeight: 500,
    maxHeight: "272px",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "128px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
      paddingLeft: "8px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--gray)",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "var(--gray)",
    },
  }),
};

export const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "var(--input)",
    primary50: "var(--badges)",
    primary: "var(--input)",
  },
});
