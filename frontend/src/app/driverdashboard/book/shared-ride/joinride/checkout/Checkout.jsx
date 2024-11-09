// components/dashboard/Checkout.js
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

// components/dashboard/Checkout.js

const Checkout = () => {
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex items-center space-x-2 mb-6">
        <FaArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">Book A Trip &gt;&gt; Checkout</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
        {/* Book Information */}
        <div className="bg-gray-800 p-6 rounded-lg flex-grow shadow-lg space-y-6">
          {/* Booking Notification */}
          <div className="bg-gray-700 p-4 rounded flex items-center space-x-2">
            <FaCheckCircle className="text-orange-500" />
            <p className="text-sm text-gray-400">
              Congratulations! We have sent your booking details to the vehicle owner.
            </p>
          </div>

          {/* User Details */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Book Information</h2>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-400">Full Name</p>
                <p>Emulo David N.</p>
              </div>
              <div>
                <p className="text-gray-400">Email Address</p>
                <p>emulodavid@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Passenger Details */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Passenger Details</h2>
            <p className="text-gray-400">Passenger 01</p>
            <p>Olaoluwa Sheyi</p>
          </div>

          {/* Driver Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Driver Information</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400">Driver Name</p>
                <p>Olaoluwa Sheyi</p>
                <p className="text-gray-400 mt-2">Email Address</p>
                <p>olaoluwa132@gmail.com</p>
              </div>
              <div className="bg-orange-500 text-xs text-white px-3 py-1 rounded-full">Verified</div>
            </div>
          </div>

          {/* Agreement */}
          <div className="text-sm text-gray-400 mt-4">
            <input type="checkbox" className="mr-2" />
            By clicking this, I agree to ChainMove <span className="text-orange-500">
              Terms & Conditions
            </span>{" "}
            and <span className="text-orange-500">Privacy Policy</span> to the vehicle owner.
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/3 space-y-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>

          {/* Trip Summary */}
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <span className="font-semibold">Pickup Location:</span> 4321 Main St, Agwu Avenue, Nsukka, Enugu
              State, Nigeria
            </p>
            <p>
              <span className="font-semibold">Destination:</span> 4321 Main St, Agwu Avenue, Nsukka, Enugu
              State, Nigeria
            </p>
            <p>
              <span className="font-semibold">Date/Time:</span> 4th-March-2024/02:00PM
            </p>
            <p>
              <span className="font-semibold">Duration:</span> 4h 1m
            </p>
            <p>
              <span className="font-semibold">Distance:</span> 32km
            </p>
          </div>

          <hr className="border-gray-700" />

          {/* Payment Details */}
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <span className="font-semibold">Amount:</span> $50.07
            </p>
            <p>
              <span className="font-semibold">Fee:</span> $2.00
            </p>
            <p>
              <span className="font-semibold">Total:</span> $52.07
            </p>
            <p>
              <span className="font-semibold">You Will Pay:</span> $26.035
            </p>
          </div>

          {/* Pay Button */}
          <button className="w-full py-3 bg-orange-500 rounded-full text-white font-semibold text-lg hover:bg-orange-600 transition duration-300">
            Pay ($26.035)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
