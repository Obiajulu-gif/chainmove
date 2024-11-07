"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaGoogle, FaTwitter, FaUserAlt } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();

  // State to hold form input values
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleRegister = () => {
    // Ensure all fields are filled
    if (!fullName || !username || !email) {
      setError("All fields are required!");
      return;
    }

    // Reset error if fields are valid
    setError("");

    console.log("Registration Data:", {
      fullName,
      username,
      email,
      walletAddress,
    });

    // Navigate to the dashboard route
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Side - Image with Overlay Card */}
      <div className="relative w-1/2 hidden lg:block">
        <Image
          src="/images/login.png"
          alt="Become a Driver"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-90"
        />
        <div className="absolute bottom-10 left-10 bg-black bg-opacity-60 text-white p-6 rounded-lg max-w-xs">
          <h3 className="text-lg font-semibold flex items-center">
            <span className="bg-orange-500 rounded-full p-2 mr-2"></span>
            Become a Driver
          </h3>
          <p className="text-sm mt-2">
            Easily share rides and split costs with friends through secure, smart contract transactions,
            making group travel affordable and eco-friendly.
          </p>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-10">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-white">Register with your email</h2>
          <p className="text-gray-400">Sign up to begin your journey</p>

          {/* Error Message */}
          {error && <div className="text-red-500">{error}</div>}

          {/* Registration Form */}
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

            {/* Proceed Button */}
            <button
              onClick={handleRegister} // Call handleRegister on click
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300">
              Proceed
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center space-x-2 text-gray-400">
            <hr className="w-full border-gray-600" />
            <span>Or</span>
            <hr className="w-full border-gray-600" />
          </div>

          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;