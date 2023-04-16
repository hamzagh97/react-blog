import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await axios
      .put("http://localhost:5000/register", {
        email: data.email,
        password: data.password,
        // returnSecureToken: true,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/", true);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          // console.log(error.response.data.error.message);
          setErrorMessage(error.response.data.error.message);
        }
      });
    setLoading(false);
  };

  return (
    <>
      <div className="my-20 flex flex-col items-center">
        <div className="text-center font-poppins text-4xl font-black">
          Register
        </div>
        <form className="mt-10 max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            type="text"
            placeholder="username"
            className="mb-3 mt-10 w-full rounded border-2 border-black p-3 outline-none"
            {...register("username", { required: true, minLength: 3 })}
          />

          {errors.username && errors.username.type === "required" && (
            <span className="font-poppins font-medium text-red-600">
              This field is required
            </span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span className="font-poppins font-medium text-red-600">
              Username Length should be more than 2
            </span>
          )} */}

          <input
            type="email"
            placeholder="email"
            className="mb-3 mt-5 w-full rounded border-2 border-black p-3 outline-none"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
          />

          {errors.email && errors.email.type === "required" && (
            <span className="font-poppins font-medium text-red-600">
              This field is required
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="font-poppins font-medium text-red-600">
              Entered value does not match email format
            </span>
          )}

          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="mb-3 mt-5  w-96 rounded border-2 border-black p-3 outline-none"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
            />
            <span
              onClick={togglePassword}
              className="absolute right-1 top-6 cursor-pointer rounded p-3 hover:bg-gray-300"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>

          {errors.password && errors.password.type === "required" && (
            <span className="font-poppins font-medium text-red-600">
              This field is required
            </span>
          )}

          {errors.password && errors.password.type === "pattern" && (
            <span className="font-poppins font-medium text-red-600">
              Password should have minimum eight characters, at least one letter
              and one number:
            </span>
          )}

          <div className="font-poppins font-medium text-red-600">
            {errorMessage}
          </div>

          <button
            type="submit"
            className="mt-5 w-full max-w-md rounded bg-violet-600 p-3 font-poppins text-lg font-black capitalize text-white hover:bg-violet-900"
          >
            {loading ? "loading" : "Register"}
          </button>
        </form>
        <p className="mt-5 font-black text-black">
          you already have an account ?{" "}
          <Link to="/login" className="text-violet-900">
            login »
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
