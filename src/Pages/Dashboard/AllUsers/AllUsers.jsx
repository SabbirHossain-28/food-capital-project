import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUserDelete=id=>{
    console.log(id);
  }

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
                    <button className="bg-[#D1A054] btn btn-xs">
                      <FaUsers className="text-xl text-white"></FaUsers>
                    </button>
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
