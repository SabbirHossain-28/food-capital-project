import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret,setClientSecret]=useState("");
  const [transactionId,setTransactionId]=useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure=useAxios();
  const [cart]=useCart();
  const {user}=useAuth();

  const totalPrice=cart.reduce((total,item)=>total+item.price,0)

    useEffect(()=>{
        axiosSecure.post("/create-payment-intent",{price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }
    const {paymentIntent,error:confirmCardError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || "anonymous",
                email:user.email || "anonymous",
            }
        }
    })
    if(confirmCardError){
        console.log("Confirmation related error",confirmCardError);
    }
    else{
        console.log("Payment Intent",paymentIntent);
        if(paymentIntent.status==="succeeded"){
            console.log("TransactionId",paymentIntent.id);
            setTransactionId(paymentIntent.id)
        }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border-2 shadow-lg p-4 rounded-lg"
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
                // backgroundColor:"#D1A054",
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn w-full shadow-lg mt-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {
        transactionId && <div>
            <div className="text-center mt-8 mb-4">
                <h2 className="text-2xl font-semibold underline">Successful TransactionId list</h2>
            </div>
            <div className="flex justify-center">
                <ol>
                    <li className="text-xl font-medium list-decimal">Transaction Id:<span className="text-green-600">{transactionId}</span></li>
                </ol>
            </div>
        </div>
      }
      {error && <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-4">
        <div className="flex items-center justify-center w-12 bg-red-500">
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
          </svg>
        </div>

        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className="font-semibold text-red-500 dark:text-red-400">
              Error
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              {error}
            </p>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default CheckoutForm;
