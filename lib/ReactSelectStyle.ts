export const customStyles = {
  menuPortal: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    outline: "none",
    border: "none",
    boxShadow: 0,
    borderRadius: "0.75rem",

    // borderColor: state.isFocused ? "grey" : "red",
  }),
};
