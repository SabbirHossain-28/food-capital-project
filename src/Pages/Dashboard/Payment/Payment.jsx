import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Payment = () => {
    return (
        <div className="p-16">
            <div className="flex justify-center text-center">
                <SectionTitle heading={"PAYMENT"} subHeading={"Pay here for purchase"}></SectionTitle>
            </div>
            <div>
                <h2>This payment gateway route</h2>
            </div>
        </div>
    );
};

export default Payment;