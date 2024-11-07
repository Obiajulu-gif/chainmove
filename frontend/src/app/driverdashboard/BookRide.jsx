"use client";
import React, { useEffect, useState } from "react";
import { prepareContractCall, prepareEvent } from "thirdweb";
import { useContractEvents, useSendTransaction } from "thirdweb/react";
import { getContract } from "thirdweb";
import { ethers } from "ethers"; // Import ethers for precise BigInt conversion
import { liskSepolia } from "src/liskSepolia";
import { client } from "src/client";

// Initialize contract object
const contract = getContract({
  client,
  address: "0x4d45F8158e252FD8e026cD594a4ec70dCD712562",
  chain: liskSepolia,
});

// Prepare the DestinationAdded event
const preparedEvent = prepareEvent({
  signature:
    "event DestinationAdded(address indexed driver, uint256 destinationId, string location, uint256 fare)",
});

const BookRide = () => {
  const { mutate: sendTransaction } = useSendTransaction();
  const { data: events, error: eventsError } = useContractEvents({
    contract,
    events: [preparedEvent],
    fromBlock: 0, // Fetch events from the first block
    toBlock: "latest", // Until the latest block
  });
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Load destinations from the events
  useEffect(() => {
    if (events && events.length > 0) {
      console.log("Fetched events:", events); // Log all fetched events

      const destinationsList = events
        .map((event) => {
          const { driver, destinationId, location, fare } = event.args || {};
          return driver && destinationId && location && fare
            ? { driver, id: destinationId, location, fare }
            : null;
        })
        .filter(Boolean); // Filter out any null values

      console.log("Parsed destinations:", destinationsList); // Log parsed destination data
      setDestinations(destinationsList);
    }
  }, [events]);

  const handleBookRide = () => {
    if (!selectedDestination) {
      alert("Please select a destination.");
      return;
    }

    // Convert fare from ETH to Wei using ethers
    const fareInWei = ethers.parseEther(selectedDestination.fare.toString());

    // Log the values to ensure they are correct
    console.log("Selected Destination Details:");
    console.log("Driver Address:", selectedDestination.driver);
    console.log("Destination ID:", selectedDestination.id);
    console.log("Fare in ETH:", selectedDestination.fare);
    console.log("Fare in Wei:", fareInWei.toString());

    // Prepare transaction with msg.value as fareInWei
    const transaction = prepareContractCall({
      contract,
      method:
        "function bookRide(address driverAddress, uint256 destinationId) payable",
      params: [selectedDestination.driver, selectedDestination.id],
      overrides: {
        value: fareInWei, // Set msg.value as fare in wei
      },
    });

    sendTransaction(transaction, {
      onSuccess: (result) => {
        console.log("Ride booked successfully:", result);
        alert("Ride booked successfully!");
      },
      onError: (error) => {
        console.error("Failed to book ride:", error);
        alert("Failed to book ride. Please try again.");
      },
    });
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Book a Ride</h2>

      {eventsError && (
        <p className="text-red-500">
          Error fetching destinations: {eventsError.message}
        </p>
      )}

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
      <label className="block text-sm text-gray-400 mb-2">
        Select Destination
      </label>
      <select
        onChange={(e) => {
          const selectedId = e.target.value;
          const selectedDest = destinations.find(
            (dest) => dest.id.toString() === selectedId
          );
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
