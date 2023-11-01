import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { handleLogin } from "../../store/actions/userAction";

const Login = () => {
  const history = useHistory();
  const [loading, useLoading] = useState(false);
  const [showPassword, useShowPassword] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const handleForm = (data) => {
    useLoading(true);
    dispatch(handleLogin(data, history));
    useLoading(false);
  };
  return (
    <>
      <Header />
      <section className="xs:w-full middle:w-1/2  xs:p-10 middle:p-0 mx-auto mt-20 mb-20">
        <h2 className="mb-10 font-bold text-4xl text-dark-navy">Login</h2>
        <form onSubmit={handleSubmit(handleForm)} className="">
          <div className="flex gap-2 flex-col mb-6">
            <label htmlFor="email" className="text-dark-navy font-bold ">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email address is required!",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className="bg-gray-200 focus:bg-white p-3  rounded-lg"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 font-bold text-sm animate-shake">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-col mb-6 relative">
            <label htmlFor="password" className="text-dark-navy font-bold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: "Password is Required!",
              })}
              className="bg-gray-200 focus:bg-white p-3 rounded-lg"
              placeholder="***************"
            />
            {showPassword ? (
              <button
                type="button"
                className="text-2xl absolute top-[54%] right-3 text-red-600"
                onClick={() => useShowPassword(!showPassword)}
              >
                <AiFillEye />
              </button>
            ) : (
              <button
                type="button"
                className="text-2xl absolute top-[54%] right-3 text-dark-navy"
                onClick={() => useShowPassword(!showPassword)}
              >
                <AiFillEyeInvisible />
              </button>
            )}
            {errors.password && (
              <p className="text-red-600 font-bold text-sm animate-shake">
                {errors.password?.message}
              </p>
            )}
          </div>
          {loading ? (
            <div role="status" className="flex justify-end">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                type="submit"
                className="signUpBtn"
                disabled={!isValid || loading}
              >
                Login
              </button>
            </div>
          )}
        </form>
      </section>
      <Footer />
    </>
  );
};
export default Login;
