// pages/investordashboard/fund-a-driver.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCar, FaDollarSign, FaUser } from "react-icons/fa";

// pages/investordashboard/fund-a-driver.js

const FundDriverPage = () => {
  // Sample data for drivers in need of funding
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      carModel: "Tesla Model 3",
      fundingNeeded: 5000,
      fundedAmount: 3000,
      location: "San Francisco, CA",
    },
    {
      id: 2,
      name: "Emily Davis",
      carModel: "Toyota Prius",
      fundingNeeded: 2000,
      fundedAmount: 1500,
      location: "New York, NY",
    },
  ]);

  const handleFundDriver = (driverId) => {
    console.log(`Funding driver with ID: ${driverId}`);
    // Logic to process funding here
  };

  return (
    <div className="bg-gray-800 min-h-screen p-6 text-white">
      {/* Page Header */}
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-orange-500">Fund a Driver</h1>
      </motion.div>

      {/* Driver Funding Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drivers.map((driver) => (
          <motion.div
            key={driver.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-4">
              <FaUser className="text-3xl text-orange-500" />
              <h2 className="text-xl font-semibold">{driver.name}</h2>
            </div>
            <p className="text-gray-400">
              <FaCar className="inline mr-1 text-orange-400" /> Car Model:{" "}
              <span className="text-white">{driver.carModel}</span>
            </p>
            <p className="text-gray-400">
              <FaDollarSign className="inline mr-1 text-green-400" /> Funding Needed:{" "}
              <span className="text-white">${driver.fundingNeeded}</span>
            </p>
            <p className="text-gray-400">
              <FaDollarSign className="inline mr-1 text-blue-400" /> Funded Amount:{" "}
              <span className="text-white">${driver.fundedAmount}</span>
            </p>
            <p className="text-gray-400">Location: {driver.location}</p>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    {Math.round((driver.fundedAmount / driver.fundingNeeded) * 100)}% Funded
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div
                  style={{
                    width: `${(driver.fundedAmount / driver.fundingNeeded) * 100}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
              </div>
            </div>

            {/* Fund Button */}
            <button
              onClick={() => handleFundDriver(driver.id)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
              Fund Driver
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FundDriverPage;
