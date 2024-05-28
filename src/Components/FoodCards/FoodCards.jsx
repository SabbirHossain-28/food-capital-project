import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxios from "../../Hooks/useAxios";

const FoodCards = ({ item }) => {
  const { _id, name, recipe, price, category, image } = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure=useAxios();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        foodItemId: _id,
        userEmail: user.email,
        name,
        price,
        category,
        image,
      };
      axiosSecure.post("/cart",cartItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    } else {
      Swal.fire({
        title: "You Are Not Loggedin",
        text: "Please login first and then add your product in cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="absolute right-4 top-2 bg-[#111827] text-white py-1 px-3 rounded-lg">
          <p>${price}</p>
        </div>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="capitalize text-lg font-medium">{category}</p>
          <div className="h-20">
            <p>{recipe}</p>
          </div>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCart}
              className="px-14 py-2 bg-[#E8E8E8] text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg hover:bg-[#111827]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
