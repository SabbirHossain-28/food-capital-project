import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdminRole = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user an Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/users/admin/${id}`);
          if (res.status === 200) {
            Swal.fire({
              title: "Admin Create Successfully",
              text: "This user is now an Admin of this Website",
              icon: "success",
            });
            refetch();
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting your user.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleUserDelete = (id) => {
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
          const res = await axiosSecure.delete(`/users/${id}`);
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting your user.",
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
          heading={"MANAGE ALL USERS"}
          subHeading={"How many??"}
        ></SectionTitle>
      </div>
      <div>
        <h2 className="text-3xl">TOTAL USERS:{users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto rounded-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userData, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{userData.name}</td>
                  <td>{userData.email}</td>
                  <td>
                    {userData.role === "admin" ? (
                      <p className="flex items-center font-semibold">
                      <GrUserAdmin></GrUserAdmin>Admin
                    </p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdminRole(userData._id)}
                        className="bg-[#D1A054] btn btn-xs"
                      >
                        <FaUsers className="text-xl text-white"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleUserDelete(userData._id)}
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

export default AllUsers;
