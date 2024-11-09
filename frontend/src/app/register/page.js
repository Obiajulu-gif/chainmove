"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleRegister = () => {
    if (!fullName || !username || !email) {
      setError("All fields are required!");
      return;
    }
    setError("");

    // Navigate to the dashboard directly after completing registration form
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="relative w-1/2 hidden lg:block">
        <Image src="/images/login.png" alt="Become a Driver" fill className="opacity-90 object-cover" />
        <div className="absolute bottom-10 left-10 bg-black bg-opacity-60 text-white p-6 rounded-lg max-w-xs">
          <h3 className="text-lg font-semibold">Become a Driver</h3>
          <p className="text-sm mt-2">
            Easily share rides and split costs through secure, smart contract transactions, making group
            travel affordable.
          </p>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center p-10">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-white">Register with your email</h2>
          <p className="text-gray-400">Sign up to begin your journey</p>

          {error && <div className="text-red-500">{error}</div>}

          <div className="space-y-4">
            <div className="relative">
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
              />
            </div>
            <div className="relative">
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleRegister}
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
