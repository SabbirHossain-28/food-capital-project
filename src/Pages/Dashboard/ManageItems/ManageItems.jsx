import { MdDelete, MdEdit } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenuData from "../../../Hooks/useMenuData";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ManageItems = () => {
  const [menuData,,refetch] = useMenuData();
  const axiosSecure = useAxios();

  const handleMenuItemDelete = (id,itemName) => {
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
          const res = await axiosSecure.delete(`/menu/${id}`);
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: `${itemName} has been deleted.`,
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
                        onClick={() => handleMenuItemDelete(data._id,data.name)}
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
