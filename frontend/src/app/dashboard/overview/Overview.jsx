"use client";

import { Actor, HttpAgent } from "@dfinity/agent";
import React, { useEffect, useState } from "react";



import { idlFactory } from "frontend/frontend/src/declarations/test/ChainMoveContract.did.js";

// Move actor creation inside a try-catch and add error handling
const createChainMoveContractActor = () => {
  try {
    const agent = new HttpAgent({ host: "https://ic0.app" });
    // Add agent initialization for production
    if (process.env.NODE_ENV !== "development") {
      agent.fetchRootKey().catch((err) => {
        console.error("Error fetching root key:", err);
      });
    }
    return Actor.createActor(idlFactory, {
      agent,
      canisterId: process.env.NEXT_PUBLIC_CANISTER_ID || "rdmx6-jaaaa-aaaaa-aaadq-cai",
    });
  } catch (error) {
    console.error("Error creating actor:", error);
    return null;
  }
};

const ChainMoveContract = createChainMoveContractActor();

const Overview = () => {
  const [userList, setUserList] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  // Fetch all registered users with proper error handling
  const fetchRegisteredUsers = async () => {
    if (!ChainMoveContract) {
      setError("Failed to initialize contract connection");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const users = await ChainMoveContract.isRegisteredUser(
        "mwnzvikrqob557xqhsmgs4luhwumjxht4m6lluy5hol5nj4zitpae"
      );
      setUserList(Array.isArray(users) ? users : []);
    } catch (error) {
      console.error("Error fetching registered users:", error);
      setError("Failed to fetch registered users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Register as user with input validation
  const registerUser = async (e) => {
    e.preventDefault();

    if (!ChainMoveContract) {
      setError("Failed to initialize contract connection");
      return;
    }

    // Basic input validation
    if (!formData.fullName || !formData.username || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const result = await ChainMoveContract.registerUser(
        formData.fullName,
        formData.username,
        formData.email,
        formData.phoneNumber
      );

      if (result?.ok) {
        alert("User registration successful!");
        setIsRegistered(true);
        setFormData({
          fullName: "",
          username: "",
          email: "",
          phoneNumber: "",
        });
        await fetchRegisteredUsers();
      } else {
        alert(`User registration failed: ${result?.err || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert(`Registration failed: ${error.message || "Unknown error"}`);
    }
  };

  // Register as driver with input validation
  const registerDriver = async (e) => {
    e.preventDefault();

    if (!ChainMoveContract) {
      setError("Failed to initialize contract connection");
      return;
    }

    // Basic input validation
    if (!formData.fullName || !formData.username || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const result = await ChainMoveContract.registerDriver(
        formData.fullName,
        formData.username,
        formData.email,
        formData.phoneNumber
      );

      if (result?.ok) {
        alert("Driver registration successful!");
        setIsRegistered(true);
        setFormData({
          fullName: "",
          username: "",
          email: "",
          phoneNumber: "",
        });
        await fetchRegisteredUsers();
      } else {
        alert(`Driver registration failed: ${result?.err || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error registering driver:", error);
      alert(`Registration failed: ${error.message || "Unknown error"}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  if (error) {
    return (
      <div className="p-6 bg-gray-900 min-h-screen text-white">
        <div className="text-red-500 p-4 bg-red-900/20 rounded">
          {error}
          <button
            onClick={fetchRegisteredUsers}
            className="ml-4 px-4 py-2 bg-red-500 rounded hover:bg-red-600">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-semibold mb-4">Registered Users</h1>

      {loading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      {!loading && userList.length > 0 ? (
        <div className="user-list mt-4">
          <ul>
            {userList.map((user, index) => (
              <li key={index} className="mb-2 p-3 bg-gray-800 rounded">
                <p>
                  <strong>Name:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phoneNumber}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        !loading && <p>No registered users found.</p>
      )}

      {!isRegistered && (
        <div className="registration-form mt-6 p-4 bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-4">Register as User or Driver</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
            <div className="flex space-x-4">
              <button
                type="submit"
                onClick={registerUser}
                className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-500">
                Register as User
              </button>
              <button
                type="submit"
                onClick={registerDriver}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500">
                Register as Driver
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Overview;