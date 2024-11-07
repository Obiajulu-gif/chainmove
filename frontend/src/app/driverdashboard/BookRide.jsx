"use client";

import React, { useState } from "react";

const BookRide = () => {
  // Mock data for demonstration purposes
  const [destinations, setDestinations] = useState([
    { driver: "0x1234...abcd", id: 1, location: "Destination A", fare: 0.05 },
    { driver: "0x5678...efgh", id: 2, location: "Destination B", fare: 0.07 },
    { driver: "0x9abc...ijkl", id: 3, location: "Destination C", fare: 0.09 },
  ]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleBookRide = () => {
    if (!selectedDestination) {
      alert("Please select a destination.");
      return;
    }

    // Log the values to ensure they are correct
    console.log("Selected Destination Details:");
    console.log("Driver Address:", selectedDestination.driver);
    console.log("Destination ID:", selectedDestination.id);
    console.log("Fare in ETH:", selectedDestination.fare);

    // Mock success message for booking
    alert("Ride booked successfully!");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Book a Ride</h2>

      {/* List of Available Destinations */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Available Destinations</h3>
        {destinations.length > 0 ? (
          <ul className="space-y-2">
            {destinations.map((dest) => (
              <li key={dest.id} className="bg-gray-800 p-3 rounded-lg">
                <p className="text-sm">
                  <strong>ID:</strong> {dest.id}
                </p>
                <p className="text-sm">
                  <strong>Location:</strong> {dest.location}
                </p>
                <p className="text-sm">
                  <strong>Fare:</strong> {dest.fare} ETH
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No destinations available.</p>
        )}
      </div>

      {/* Dropdown to Select Destination */}
      <label className="block text-sm text-gray-400 mb-2">Select Destination</label>
      <select
        onChange={(e) => {
          const selectedId = e.target.value;
          const selectedDest = destinations.find((dest) => dest.id.toString() === selectedId);
          setSelectedDestination(selectedDest);
        }}
        className="w-full p-3 bg-gray-800 rounded-lg text-white mb-4">
        <option value="">Choose a destination</option>
        {destinations.map((dest) => (
          <option key={dest.id} value={dest.id.toString()}>
            {dest.location} - {dest.fare} ETH
          </option>
        ))}
      </select>

      <button
        onClick={handleBookRide}
        className="w-full py-3 rounded-lg text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition duration-300">
        Book Ride
      </button>
    </div>
  );
};

export default BookRide;
