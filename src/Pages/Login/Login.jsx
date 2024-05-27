// reCAPTCHA site key:6LcWXOgpAAAAAMdGtHjbFpgzz5VH392Jwyh0nEhd

import { useState } from "react";
import loginBgImg from "../../assets/images/others/authentication.png";
import loginFormImg from "../../assets/images/others/authentication2.png";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  const handleValidateCaptcha = async (e) => {
    e.preventDefault();
    if (isVerified) {
      try {
        const userCredential = await signInUser(
          formData.email,
          formData.password
        );
        if (userCredential) {
          setIsModalOpen(false);
          alert("Login successful");
          navigate("/");
        }
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    } else {
      alert("Please verify the captcha");
    }
  };

  const verifyChecked = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginBgImg})` }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex py-32 px-24  shadow-2xl">
        <div className="w-1/2">
          <img className="w-full" src={loginFormImg} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-xl font-semibold text-[#151515] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type Here"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xl font-semibold text-[#151515] mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be no more than 20 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full border p-2 bg-[#D1A054B3] text-white mt-4"
            />
          </form>
          <div className="my-2">
            <p className="text-lg text-[#926219b3]">
              New here?<Link className="font-semibold" to="/registration">Create a New Account</Link>
            </p>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div
                style={{ backgroundImage: `url(${loginBgImg})` }}
                className="modal-box rounded p-8"
              >
                <form onSubmit={handleValidateCaptcha}>
                  <ReCAPTCHA
                    className="flex justify-center mb-4"
                    sitekey="6LcWXOgpAAAAAMdGtHjbFpgzz5VH392Jwyh0nEhd"
                    onChange={verifyChecked}
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="border py-2 px-3 rounded-lg bg-[#cd9035b3] text-white "
                    >
                      Validate Captcha
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
