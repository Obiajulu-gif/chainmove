"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

const SharedTrip = () => {
  const [isRecurring, setIsRecurring] = useState(true);
  const [selectedDays, setSelectedDays] = useState([]);
  const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(false);
  const [foundPerson, setFoundPerson] = useState(false);
  const router = useRouter();

  const handlePublishRide = () => {
    setIsWaitingModalOpen(true);
    setFoundPerson(false);
    setTimeout(() => {
      setFoundPerson(true);
    }, 2000);
  };

  const closeModal = () => {
    setIsWaitingModalOpen(false);
    setFoundPerson(false);
  };

  const toggleDaySelection = (day) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day) ? prevDays.filter((d) => d !== day) : [...prevDays, day]
    );
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white flex flex-col items-center">
      <motion.div
        className="flex items-center space-x-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}>
        <FaArrowLeft
          onClick={() => router.back()}
          className="cursor-pointer text-2xl hover:text-orange-500 transition duration-300"
        />
        <h1 className="text-4xl font-extrabold">Book A Trip &gt;&gt; Shared-Trip</h1>
      </motion.div>

      <div className="flex justify-between w-full max-w-4xl items-center mb-8">
        <div className="text-lg text-gray-400 flex items-center space-x-2">
          <span>Book A Trip</span>
          <span className="text-gray-500">{">>"}</span>
          <span className="font-semibold">Shared-Trip</span>
        </div>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePublishRide}
            className="bg-orange-500 text-white py-2 px-8 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
            Publish A Ride
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/dashboard/book/shared-ride/joinride")}
            className="text-orange-500 font-semibold text-lg">
            Join A Ride
          </motion.button>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg text-gray-400 mb-2">Departure</label>
              <select className="w-full bg-gray-700 p-4 rounded-lg text-white">
                <option>Select Pick-up Location</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-2">Destination</label>
              <select className="w-full bg-gray-700 p-4 rounded-lg text-white">
                <option>Select Destination</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-2">Time</label>
              <select className="w-full bg-gray-700 p-4 rounded-lg text-white">
                <option>08:00 AM</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-2">Trip Cost</label>
              <input
                type="text"
                value="$50.02"
                readOnly
                className="w-full bg-gray-700 p-4 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Passenger Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg text-gray-400 mb-2">Seats on Vehicle</label>
              <select className="w-full bg-gray-700 p-4 rounded-lg text-white">
                <option>1 Seat</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-2">People to Take</label>
              <select className="w-full bg-gray-700 p-4 rounded-lg text-white">
                <option>1 Person</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recurrence</h2>
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setIsRecurring(true)}
              className={`py-2 px-6 rounded-lg ${
                isRecurring ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-400"
              } font-semibold`}>
              Recurring
            </button>
            <button
              onClick={() => setIsRecurring(false)}
              className={`py-2 px-6 rounded-lg ${
                !isRecurring ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-400"
              } font-semibold`}>
              Custom
            </button>
          </div>

          {isRecurring && (
            <div className="flex space-x-4">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDaySelection(day)}
                  className={`w-10 h-10 rounded-full ${
                    selectedDays.includes(day) ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-400"
                  } flex items-center justify-center`}>
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Waiting or Found Person */}
      {isWaitingModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          variants={modalVariants}>
          <div className="bg-gray-800 p-8 rounded-lg text-center w-80 relative shadow-lg">
            <button className="absolute top-2 right-2 text-gray-400" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3 className="text-2xl font-semibold mb-6">
              {foundPerson ? "Found 1 Person" : "Waiting For Others"}
            </h3>
            <div className="flex justify-center items-center mb-6">
              <div className="dot-loader">
                <div className="dot bg-gray-600"></div>
                <div className="dot bg-gray-600"></div>
                <div className="dot bg-gray-600"></div>
                <div className="dot bg-gray-600"></div>
              </div>
            </div>
            <button
              className={`${
                foundPerson ? "bg-orange-500 text-white" : "bg-gray-600 text-gray-400"
              } py-3 px-10 rounded-full font-semibold text-lg`}
              disabled={!foundPerson}
              onClick={() => {
                if (foundPerson) {
                  closeModal();
                  router.push("/dashboard/book/shared-ride/results");
                }
              }}>
              Proceed
            </button>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .dot-loader {
          display: flex;
          gap: 0.5rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
        @keyframes bounce {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default SharedTrip;
