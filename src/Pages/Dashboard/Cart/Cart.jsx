import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const handleCartItemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/carts/${id}`);
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting your item.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="p-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="my-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-semibold uppercase">
              Total Order:{cart.length}
            </h2>
          </div>
          <div>
            <h2 className="text-3xl font-semibold uppercase">
              Total Price:${totalPrice}
            </h2>
          </div>
          <div>
            {cart.length ? (
              <Link to="/dashboard/payment">
                <button className="btn bg-[#D1A054] text-white">PAY</button>
              </Link>
            ) : (
              <button disabled className="btn bg-[#D1A054] text-white">
                PAY
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto rounded-t-xl">
          <table className="table">
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((itemData, idx) => (
                <tr key={idx}>
                  <th>
                    <p>{idx + 1}</p>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={itemData.image} alt="Food Item Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{itemData.name}</td>
                  <td>${itemData.price}</td>
                  <td>
                    <button
                      onClick={() => handleCartItemDelete(itemData._id)}
                      className="btn bg-red-600 btn-xs"
                    >
                      <MdDelete className="text-xl text-white"></MdDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
