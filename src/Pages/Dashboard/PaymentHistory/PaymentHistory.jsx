import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: paymentsHistory = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(paymentsHistory);
  return (
    <div className="p-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"PAYMENT HISTORY"}
          subHeading={"At a Glance!"}
        ></SectionTitle>
      </div>
      <div className="my-8">
        <div>
          <div>
            <h2 className="text-3xl font-semibold uppercase">
              Total Payments:{paymentsHistory.length}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto rounded-t-xl">
          <table className="table">
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th>#</th>
                <th>EMAIL</th>
                {/* <th>CATEGORY</th> */}
                <th>TransactionId</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {paymentsHistory &&
                paymentsHistory.map((historyData, idx) => (
                  <tr key={idx}>
                    <th>
                      <p>{idx + 1}</p>
                    </th>
                    <td>{historyData.email}</td>
                    {/* <td>{historyData.category.map((data,idx)=>(<li className="" key={idx}>{data}</li>))}</td> */}
                    <td>{historyData.transactionId}</td>
                    <td>${historyData.price}</td>
                    <td>{historyData.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
