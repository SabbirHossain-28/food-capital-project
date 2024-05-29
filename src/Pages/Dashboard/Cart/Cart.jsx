import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);
  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  console.log(totalPrice);
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
            <button className="btn bg-[#D1A054] text-white">PAY</button>
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
                  <td>&{itemData.price}</td>
                  <th>
                    <button className="btn bg-red-600 btn-xs">
                      <MdDelete className="text-xl text-white"></MdDelete>
                    </button>
                  </th>
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
