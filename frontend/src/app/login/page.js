"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  // State to hold form input values
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleLogin = () => {
    // Ensure email is provided
    if (!email) {
      setError("Email is required!");
      return;
    }

    // Reset error if fields are valid
    setError("");

    console.log("Login Data:", { email });

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
            Easily share rides and split costs with friends through secure, smart transactions, making group
            travel affordable and eco-friendly.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-10">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-white">Login with your email</h2>
          <p className="text-gray-400">Login to begin your journey</p>

          {/* Error Message */}
          {error && <div className="text-red-500">{error}</div>}

          {/* Login Form */}
          <div className="space-y-4">
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
              onClick={handleLogin} // Call handleLogin on click
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
            Don't have an account?{" "}
            <Link href="/register" className="text-orange-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
