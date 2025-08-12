import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { PhoneBox } from "../../ui/PhoneBox/PhoneBox";
import "../../../styles/form.css";
import { Link } from "react-router";

import { Box } from "../../ui/Box/Box";
import { Icon } from "../../ui/Icon/Icon";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <>
      <Box>
        <div className="imgBox">
          <Icon name="logo" color="var(--white)" width={42} className="logo" />
        </div>
        <h1 className="title">
          Expand your mind, reading <span>a book</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputBox">
            <span className="label">Email:</span>
            <input {...register("email")} />
            <span className="errorMsg">{errors.email?.message}</span>
          </div>
          <div className="inputBox input">
            <span className="label">Password:</span>
            <input {...register("password")} />
            <span className="errorMsg">{errors.password?.message}</span>
          </div>
          <button type="submit" className="btn">
            Log In
          </button>
          <Link to="/register" className="secondaryBtn">
            Dont have an account?
          </Link>
        </form>
      </Box>
      <PhoneBox />
    </>
  );
};
