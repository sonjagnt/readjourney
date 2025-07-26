import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long!")
    .max(20, "Too long")
    .required("This field is required!"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
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
