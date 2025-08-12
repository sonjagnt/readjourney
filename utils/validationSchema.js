import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long!")
    .max(20, "Too long")
    .required("This field is required!"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Must be a valid email")
    .email("Must be a valid email")
    .min(3, "Email is too short")
    .max(20, "Email is too long")
    .required("This field is required!"),
  password: Yup.string()
    .min(7, "Password has to be at least 7 characters long")
    .max(20, "Password is too long")
    .required("This field is required!"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .min(3, "Email is too short")
    .max(20, "Email is too long")
    .required("This field is required!"),
  password: Yup.string()
    .min(7, "Password has to be at least 7 characters long")
    .max(20, "Password is too long")
    .required("This field is required!"),
});

export const addBookValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is too short")
    .max(50, "Title is too long")
    .required("This field is required!"),
  author: Yup.string()
    .min(2, "Author is too short")
    .max(50, "Author is too long")
    .required("This field is required!"),
  totalPages: Yup.number()
    .min(1, "Total pages must be at least 1")
    .max(10000, "Total pages cannot exceed 10000")
    .required("This field is required!"),
});

export const bookValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is too short")
    .max(50, "Title is too long")
    .required("This field is required!"),
  author: Yup.string()
    .min(2, "Author is too short")
    .max(50, "Author is too long")
    .required("This field is required!"),
});
