"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Onboard = () => {
  const router = useRouter();

  // Navigate to the register page with a role parameter
  const handleNavigation = () => {
    router.push(`/register`);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
					"linear-gradient(to bottom right,#1F2937, #111827), url(/images/bg.png)",
        backgroundBlendMode: "overlay",
      }}>
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.div
          className="mb-6 px-4 py-2 border border-orange-500 rounded-full inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <span className="text-sm font-semibold">REGISTRATION</span>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold mb-10">Start Your Journey With Us</h1>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Card for Driver */}
          <motion.div
            className="bg-black bg-opacity-60 rounded-lg p-6 w-64 h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all border border-gray-600"
            onClick={() => handleNavigation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-lg font-semibold">Become A Driver</h3>
          </motion.div>

          {/* Card for Normal User */}
          <motion.div
            className="bg-black bg-opacity-60 rounded-lg p-6 w-64 h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all border border-gray-600"
            onClick={() => handleNavigation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-lg font-semibold">Normal User</h3>
          </motion.div>

          {/* Card for Investor */}
          <motion.div
            className="bg-black bg-opacity-60 rounded-lg p-6 w-64 h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all border border-gray-600"
            onClick={() => handleNavigation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-lg font-semibold">Become An Investor</h3>
          </motion.div>
        </div>

        {/* Register Button */}
        <motion.button
          className="mt-10 px-6 py-3 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-600 transition duration-300"
          onClick={() => router.push("/register")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          Register to start your journey
        </motion.button>
      </div>
    </section>
  );
};

export default Onboard;
