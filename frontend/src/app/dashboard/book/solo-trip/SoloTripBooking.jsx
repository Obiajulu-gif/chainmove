// components/dashboard/SoloTripBooking.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSendTransaction } from "thirdweb/react";
import { getContract } from "thirdweb";
import { prepareContractCall } from "thirdweb";
import { liskSepolia } from "src/liskSepolia";
import { client } from "src/client";

// Initialize contract object for adding destinations
const contract = getContract({
  client,
  address: "0x4d45F8158e252FD8e026cD594a4ec70dCD712562",
  chain: liskSepolia,
});

const SoloTripBooking = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Loading state for booking
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for adding destination
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    time: "08:00 AM",
    cost: "$50.02",
  });
  const [location, setLocation] = useState(""); // For adding new destination
  const [fare, setFare] = useState("");
  const { mutate: sendTransaction } = useSendTransaction();

  // Mock list of existing destinations (replace with data from your blockchain in production)
  const destinations = ["Destination A", "Destination B", "Destination C"];

  // Handle input changes for booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle booking form submission
  const handleSubmit = () => {
    setLoading(true); // Start loading indicator
    // Simulate processing delay
    setTimeout(() => {
      router.push(
        `/dashboard/book/solo-trip/checkout?departure=${formData.departure}&destination=${formData.destination}&time=${formData.time}&cost=${formData.cost}`
      );
    }, 1500); // Redirect after 1.5s
  };

  // Handle adding new destination to the blockchain
  const handleAddDestination = async () => {
    if (!location || !fare) {
      alert("Please fill in both the location and fare.");
      return;
    }

    const fareInEther = parseFloat(fare);
    if (isNaN(fareInEther)) {
      alert("Please enter a valid fare amount.");
      return;
    }

    try {
      setIsSubmitting(true);
      const transaction = prepareContractCall({
        contract,
        method: "function addDestination(string _location, uint256 _fareInEther)",
        params: [location, fareInEther],
      });

      await sendTransaction(transaction, {
        onSuccess: () => {
          alert("Destination added successfully!");
          destinations.push(location); // Update destinations list
          setLocation("");
          setFare("");
        },
        onError: (error) => {
          console.error("Error adding destination:", error);
          alert("Failed to add destination. Please try again.");
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex items-center space-x-3 mb-8">
        <FaArrowLeft
          onClick={() => router.back()}
          className="cursor-pointer text-2xl hover:text-orange-500 transition duration-200"
        />
        <h1 className="text-3xl font-bold">Book A Trip &gt;&gt; Solo-Trip</h1>
      </div>

      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Departure Selection */}
          <div className="relative">
            <label className="text-lg text-gray-400 mb-2">Departure</label>
            <select
              name="departure"
              onChange={handleInputChange}
              className="w-full p-4 pl-14 mt-1 bg-gray-700 rounded-lg text-gray-200"
            >
              <option value="">Select Pick-up Location</option>
              <option value="Location A">Location A</option>
              <option value="Location B">Location B</option>
              <option value="Location C">Location C</option>
            </select>
          </div>

          {/* Destination Selection */}
          <div className="relative">
            <label className="text-lg text-gray-400 mb-2">Destination</label>
            <select
              name="destination"
              onChange={handleInputChange}
              className="w-full p-4 pl-14 mt-1 bg-gray-700 rounded-lg text-gray-200"
            >
              <option value="">Select Destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div>
            <label className="text-lg text-gray-400 mb-2">Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-4 mt-1 bg-gray-700 rounded-lg text-gray-200"
            >
              <option>08:00 AM</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>

          {/* Cost Input */}
          <div>
            <label className="text-lg text-gray-400 mb-2">Trip Cost</label>
            <input
              type="text"
              name="cost"
              value={formData.cost}
              readOnly
              className="w-full p-4 mt-1 bg-gray-700 rounded-lg text-gray-200"
            />
          </div>
        </div>

        {/* Loading Indicator or Continue Button */}
        <motion.button
          whileHover={!loading ? { scale: 1.05 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-4 rounded-full text-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {loading ? "Processing..." : "Continue"}
        </motion.button>
      </motion.div>

      {/* Add Destination Section */}
      <div className="p-6 bg-gray-900 text-white rounded-lg max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Destination</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg text-white"
            placeholder="Enter location"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Fare (ETH)</label>
          <input
            type="text"
            value={fare}
            onChange={(e) => setFare(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg text-white"
            placeholder="Enter fare in Ether"
          />
        </div>
        <button
          onClick={handleAddDestination}
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg text-lg font-semibold ${
            isSubmitting ? "bg-gray-600" : "bg-orange-500 hover:bg-orange-600"
          } transition duration-300`}
        >
          {isSubmitting ? "Adding..." : "Add Destination"}
        </button>
      </div>
    </div>
  );
};

export default SoloTripBooking;
