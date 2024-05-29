import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cart = () => {
  return (
    <div className="p-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-semibold uppercase">Total Order:0</h2>
          </div>
          <div>
            <h2 className="text-3xl font-semibold uppercase">Total Price:$0</h2>
          </div>
          <div>
            <button className="btn bg-[#D1A054] text-white">PAY</button>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <p>1</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
