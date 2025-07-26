import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "../../../utils/validationSchema";
import { loginUser, registerUser } from "../../service/readjourney-api";
import { Link } from "react-router";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerValidationSchema) });

  const onSubmit = async ({ name, email, password }) => {
    await registerUser({ name, email, password });
    await loginUser({ email, password });

    console.log("success");
  };
  return (
    <div>
      RegisterForm
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <span>{errors.name?.message}</span>
        <input {...register("email")} />
        <span>{errors.email?.message}</span>
        <input {...register("password")} />
        <span>{errors.password?.message}</span>
        <button type="submit">Registration</button>
        <Link to="/login">Already have an account?</Link>
      </form>
    </div>
  );
};
