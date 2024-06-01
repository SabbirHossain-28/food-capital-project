import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    return (
        <div className="p-16">
            <div className="flex justify-center text-center">
                <SectionTitle heading={"PAYMENT HISTORY"} subHeading={"At a Glance!"}></SectionTitle>
            </div>
            <div className="my-8">
        <div>
          <div>
            <h2 className="text-3xl font-semibold uppercase">
              Total Payments:0
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
                <th>CATEGORY</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th>
                    <p></p>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default PaymentHistory;