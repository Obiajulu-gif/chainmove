"use client";
import React, { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { getContract } from "thirdweb";
import { liskSepolia } from "src/liskSepolia";
import { client } from "src/client";

// Initialize contract object
const contract = getContract({
  client,
  address: "0x4d45F8158e252FD8e026cD594a4ec70dCD712562",
  chain: liskSepolia,
});

const AddDestination = () => {
  const { mutate: sendTransaction } = useSendTransaction();
  const [location, setLocation] = useState("");
  const [fare, setFare] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        method:
          "function addDestination(string _location, uint256 _fareInEther)",
        params: [location, fareInEther],
      });

      await sendTransaction(transaction, {
        onSuccess: (result) => {
          console.log("Destination added:", result);
          alert("Destination added successfully!");
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
  );
};

export default AddDestination;
