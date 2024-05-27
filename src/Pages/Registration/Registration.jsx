import { useForm } from "react-hook-form";
import signupBgImg from "../../assets/images/others/authentication.png";
import signupFormImg from "../../assets/images/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Registration = () => {
    const {setUser,user,createUser,updateUserData}=useAuth();
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        // setFormData(data);
        console.log(data);
        createUser(data.email,data.password)
        .then(userCredential=>{
          updateUserData(data.name)
          .then(()=>{

          })
            if(userCredential){
              Swal.fire({
                title: "Registration Successfull",
                text: "Welcome To Food Capital",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok"
              }).then((result) => {
                if (result.isConfirmed) {
                 setUser({...user,displayName:data.name})
                 navigate("/")
                }
              });
            }
        })
      };

    return (
        <div
      style={{ backgroundImage: `url(${signupBgImg})` }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-row-reverse items-center py-28 px-24  shadow-2xl">
        <div className="w-1/2">
          <img className="w-full" src={signupFormImg} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="name" className="block text-xl font-semibold text-[#151515] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type Here"
                {...register("name", { required: "Email is required" })}
                className="w-full p-2"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-xl font-semibold text-[#151515] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type Here"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="password" className="block text-xl font-semibold text-[#151515] mb-2">
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
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <input type="submit" value="Login" className="w-full border p-2 bg-[#D1A054B3] text-white mt-4" />
          </form>
          <div className="my-2">
            <p className="text-lg text-[#926219b3]">
            Already registered? <Link className="font-semibold" to="/login">Go to log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Registration;