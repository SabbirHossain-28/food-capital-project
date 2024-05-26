

// reCAPTCHA site key:6LcWXOgpAAAAAMdGtHjbFpgzz5VH392Jwyh0nEhd


import { useState } from "react";
import loginBgImg from "../../assets/images/others/authentication.png";
import loginFormImg from "../../assets/images/others/authentication2.png";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const { signInUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState(null);

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
        const userCredential = await signInUser(formData.email, formData.password);
        if (userCredential) {
          setIsModalOpen(false);
          alert("Login successful");
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
      className="min-h-screen"
    >
      <div>
        <div>
          <img src={loginFormImg} alt="" />
        </div>
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                placeholder="Type Here"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                id="password"
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
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <input type="submit" value="Login" />
          </form>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="modal-box bg-white rounded p-8">
                <form className="flex flex-col justify-center" onSubmit={handleValidateCaptcha}>
                  <ReCAPTCHA className="flex justify-center mb-4"
                    sitekey="6LcWXOgpAAAAAMdGtHjbFpgzz5VH392Jwyh0nEhd" 
                    onChange={verifyChecked}
                  />
                  <button type="submit">Validate Captcha</button>
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


