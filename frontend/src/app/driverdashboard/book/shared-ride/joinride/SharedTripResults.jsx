"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaUserFriends } from "react-icons/fa";

const SharedTripResults = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/book/shared-ride/joinride/checkout");
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white flex flex-col items-center">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => router.back()}
          className="text-gray-400 flex items-center space-x-1 hover:text-white transition">
          <span>&lt;</span>
          <span>Book A Trip</span>
        </button>
        <h1 className="text-xl font-semibold">Shared-Trip</h1>
      </div>

      {/* Search Filters Section */}
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-5xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Select Pick Up Location"
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            placeholder="Select Destination"
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          <input
            type="number"
            placeholder="No. of Persons"
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
        </div>
        <button className="mt-4 w-full bg-orange-500 py-3 rounded text-white font-semibold hover:bg-orange-600 transition duration-300">
          Search Trip
        </button>
      </div>

      {/* Filter Sidebar and Trip Results */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {/* Filter Sidebar */}
        <div className="bg-gray-800 p-6 rounded-lg col-span-1">
          <h3 className="text-gray-400 mb-4">Filter By</h3>
          <select className="w-full bg-gray-700 p-3 rounded text-white mb-4">
            <option>Time</option>
            <option>Now</option>
          </select>
          <select className="w-full bg-gray-700 p-3 rounded text-white">
            <option>Cost</option>
            <option>Low - High</option>
          </select>
        </div>

        {/* Trip Results */}
        <div className="bg-gray-800 p-6 rounded-lg col-span-3">
          <h3 className="text-gray-400 mb-4">2 Results</h3>
          {/* Trip Result Item */}
          <div className="p-4 bg-gray-700 rounded-lg mb-4 flex justify-between items-center">
            <div>
              <div className="flex items-center mb-2">
                <p className="text-xl font-semibold text-white">08:00 AM</p>
                <span className="text-gray-400 mx-2">to</span>
                <p className="text-xl font-semibold text-white">08:55 AM</p>
              </div>
              <p className="text-gray-400">Marina Terminal, Calabar - Nwaniba Timber Beach Terminal, Uyo</p>
            </div>
            <div className="text-right">
              <p className="text-orange-500 text-lg font-semibold">$50.01</p>
              <button
                onClick={handleClick}
                className="mt-2 bg-orange-500 py-1 px-4 rounded text-white font-semibold hover:bg-orange-600 transition duration-300">
                Select Trip
              </button>
            </div>
          </div>
          {/* Repeat for more results as needed */}
        </div>
      </div>
    </div>
  );
};

export default SharedTripResults;
