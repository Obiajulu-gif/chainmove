"use client";

import React, { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";

const WalletInfo = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Placeholder registration check and registration function
  const [isRegistered, setIsRegistered] = useState(false);
  const [isCheckingRegistration, setIsCheckingRegistration] = useState(false);

  const handleRegisterUser = () => {
    // Simulate registration success
    setIsRegistered(true);
    setShowSuccessModal(true);
  };

  useEffect(() => {
    // Simulate balance fetching delay
    setTimeout(() => {
      setBalance("0.00");
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex space-x-4">
      <div className="bg-gray-800 p-4 rounded-lg flex-1 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Wallet Balance</p>
          <h3 className="text-white text-xl font-semibold">{loading ? "Loading..." : `${balance} ETH`}</h3>
        </div>
        <FaEyeSlash className="text-gray-500" />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg flex-1 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Total Trips</p>
          <h3 className="text-white text-xl font-semibold">52</h3>
        </div>
        <FaEyeSlash className="text-gray-500" />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg flex-1 flex items-center justify-between">
        <div className="text-sm">
          {isCheckingRegistration ? (
            <span className="text-gray-400">Checking registration...</span>
          ) : isRegistered ? (
            <span className="text-xs text-green-500">Registered User</span>
          ) : (
            <button
              onClick={handleRegisterUser}
              disabled={isRegistered || isCheckingRegistration}
              className={`${
                isRegistered ? "bg-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
              } text-white font-semibold px-4 py-2 rounded-full transition duration-300 text-sm`}>
              {isRegistered ? "Already Registered" : isCheckingRegistration ? "Checking..." : "Register Now"}
            </button>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg text-center w-80 relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-2 right-2 text-gray-400">
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-6">Identity Verified</h3>
            <p className="text-orange-400 text-lg font-semibold mb-4">
              You have successfully completed your registration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletInfo;
