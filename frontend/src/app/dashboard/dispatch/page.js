"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCar, FaClipboardList, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const DispatchPage = () => {
  // Mock data for demonstration purposes
  const [trips, setTrips] = useState([
    { id: 1, passenger: "John Doe", status: "Pending", pickup: "Central Station", dropoff: "Airport" },
    { id: 2, passenger: "Jane Smith", status: "In Progress", pickup: "Main Square", dropoff: "Tech Park" },
    { id: 3, passenger: "Mike Johnson", status: "Pending", pickup: "City Mall", dropoff: "University" },
  ]);

  const [drivers, setDrivers] = useState([
    { id: 1, name: "Driver A", available: true },
    { id: 2, name: "Driver B", available: false },
    { id: 3, name: "Driver C", available: true },
  ]);

  // Assign driver to a trip
  const assignDriver = (tripId, driverName) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === tripId ? { ...trip, driver: driverName, status: "In Progress" } : trip
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">Dispatch Center</h1>
        <p className="text-gray-300 mt-2">Manage and assign drivers to active trips.</p>
      </motion.div>

      {/* Active Trips Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <motion.div
            key={trip.id}
            className={`p-6 rounded-lg shadow-lg transition-shadow duration-300 ${
              trip.status === "Pending" ? "bg-gray-800 hover:bg-gray-700" : "bg-green-700"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-orange-400">Trip #{trip.id}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  trip.status === "Pending" ? "bg-yellow-500" : "bg-blue-500"
                }`}>
                {trip.status}
              </span>
            </div>
            <div className="text-gray-300">
              <p>
                <FaUserTie className="inline-block text-orange-400 mr-2" />
                Passenger: {trip.passenger}
              </p>
              <p>
                <FaMapMarkerAlt className="inline-block text-orange-400 mr-2" />
                Pickup: {trip.pickup}
              </p>
              <p>
                <FaMapMarkerAlt className="inline-block text-orange-400 mr-2" />
                Dropoff: {trip.dropoff}
              </p>
              {trip.driver && (
                <p className="mt-2 text-green-400">
                  <FaCar className="inline-block text-green-400 mr-2" />
                  Assigned Driver: {trip.driver}
                </p>
              )}
            </div>
            <div className="mt-4">
              {trip.status === "Pending" && (
                <select
                  onChange={(e) => assignDriver(trip.id, e.target.value)}
                  className="w-full bg-gray-700 text-white p-2 rounded-md">
                  <option value="">Assign Driver</option>
                  {drivers
                    .filter((driver) => driver.available)
                    .map((driver) => (
                      <option key={driver.id} value={driver.name}>
                        {driver.name}
                      </option>
                    ))}
                </select>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Driver List Section */}
      <motion.div
        className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Available Drivers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className={`p-4 rounded-lg shadow-lg text-center ${
                driver.available ? "bg-green-700" : "bg-gray-700"
              }`}>
              <h3 className="text-xl font-bold">{driver.name}</h3>
              <p className="text-sm">
                Status:{" "}
                <span className={`font-semibold ${driver.available ? "text-green-300" : "text-red-300"}`}>
                  {driver.available ? "Available" : "Unavailable"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DispatchPage;
