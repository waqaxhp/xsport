import React from "react";
import { FaChevronRight } from "react-icons/fa";
// import "./Order.css";
import Header from "../../components/header/Header";

const Order = () => {
  return (
    <>
      <div className="w-full">
        <Header name="TRACK ORDER" />
      </div>
      <div className="flex flex-col items-center bg-white px-4 py-10 md:px-10 lg:px-20">
        <h1 className="mb-2 text-center text-2xl font-bold uppercase">
          Be always up to date with your order
        </h1>

        <div className="flex w-full max-w-[70%] flex-col items-center">
          <p className="text-center text-gray-600">
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <label
            className="mb-1 block text-center text-gray-700"
            htmlFor="orderId"
          >
            Order ID
          </label>
          <input
            id="orderId"
            type="text"
            placeholder="Found in your order confirmation email."
            className="mb-4 w-full border border-gray-300 px-4 py-2 italic outline-none focus:border-black"
          />
          <label
            className="mb-1 block text-center text-gray-700"
            htmlFor="billingEmail"
          >
            Billing email
          </label>
          <input
            id="billingEmail"
            type="email"
            placeholder="Email you used during checkout."
            className="mb-6 w-full border border-gray-300 px-4 py-2 italic outline-none focus:border-black"
          />
          <button className="w-60 items-center bg-black py-2 text-center font-semibold uppercase text-white transition duration-200 hover:bg-gray-800">
            Track
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
