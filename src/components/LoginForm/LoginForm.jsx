import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(login(data));
    // dispatch(fetchCurrentUser());
  };
  return (
    <div>
      LoginForm
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <span>{errors.email?.message}</span>
        <input {...register("password")} />
        <span>{errors.password?.message}</span>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
