import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "../../../utils/validationSchema";
import { loginUser, registerUser } from "../../service/readjourney-api";
import { Link, useNavigate } from "react-router";
import "../../../styles/form.css";
import { PhoneBox } from "../../ui/PhoneBox/PhoneBox";
import { Box } from "../../ui/Box/Box";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerValidationSchema) });

  const onSubmit = async ({ name, email, password }) => {
    await registerUser({ name, email, password });
    await loginUser({ email, password }).then(() => navigate("/"));
  };
  return (
    <>
      <Box>
        <h1 className="title">
          Expand your mind, reading <span>a book</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputBox">
            <span className="label">Name:</span>
            <input {...register("name")} />
            <span className="errorMsg">{errors.name?.message}</span>
          </div>
          <div className="inputBox">
            <span className="label">Email:</span>
            <input {...register("email")} />
            <span className="errorMsg">{errors.email?.message}</span>
          </div>
          <div className="inputBox">
            <span className="label">Password:</span>
            <input {...register("password")} />
            <span className="errorMsg">{errors.password?.message}</span>
          </div>
          <button type="submit" className="btn">
            Registration
          </button>
          <Link to="/login" className="secondaryBtn">
            Already have an account?
          </Link>
        </form>
      </Box>
      <PhoneBox />
    </>
  );
};
