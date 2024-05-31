import { MdDelete, MdEdit } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenuData from "../../../Hooks/useMenuData";

const ManageItems = () => {
  const [menuData] = useMenuData();
  console.log(menuData);
  return (
    <div className="p-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading="MANAGE ALL ITEMS"
          subHeading="Hurry Up!"
        ></SectionTitle>
      </div>
      <div>
        <h2 className="text-3xl">Total Items:{menuData.length}</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menuData.map((data, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>
                        <div className="w-16">
                            <img src={data.image} alt="Item image" />
                        </div>
                    </td>
                    <td>{data.name}</td>
                    <td>${data.price}</td>
                    <td>
                      <button
                        //   onClick={() => handleCartItemDelete(itemData._id)}
                        className="btn bg-[#D1A054] btn-xs"
                      >
                        <MdEdit className="text-xl text-white"></MdEdit>
                      </button>
                    </td>
                    <td>
                      <button
                        //   onClick={() => handleCartItemDelete(itemData._id)}
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
    </div>
  );
};

export default ManageItems;
