"use client";

import { AuthClient } from "@dfinity/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";


const LoginPage = () => {
  const router = useRouter();
  const [principal, setPrincipal] = useState(null); // State for storing principal after II login
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleConnectWallet = async () => {
    if (!fullName || !username || !email) {
      setError("All fields are required!");
      return;
    }
    setError("");
    const authClient = await AuthClient.create();
    await authClient.login({
      identityProvider: "https://identity.ic0.app", // URL of Internet Identity
      onSuccess: () => {
        const userPrincipal = authClient.getIdentity().getPrincipal().toString();
        setPrincipal(userPrincipal);

        // Save to local storage and log the principal
        localStorage.setItem("userPrincipal", userPrincipal);
        console.log("User Principal:", userPrincipal);

        router.push("/dashboard");
      },
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Side - Image with Overlay Card */}
      <div className="relative w-1/2 hidden md:block">
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

      {/* Right Side - Connect Wallet */}
      <div className="flex w-full text-center lg:w-1/2 items-center justify-center p-10">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-white">Connect with Internet Identity</h2>
          <p className="text-gray-400">
            Verify your Identity with Internet Computer Protocol to begin your journey
          </p>
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
          {/* Connect Wallet Button */}
          <button
            onClick={handleConnectWallet}
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-500 transition duration-300">
            Verify Identity
          </button>
          {error && <div className="text-red-500">{error}</div>}

          {/* Display principal if authenticated */}
          {principal && <div className="text-green-500 text-center mt-4">Connected as: {principal}</div>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;