"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaCoins, FaGift, FaTrophy, FaCar } from "react-icons/fa";

const RewardsPage = () => {
  // Sample rewards data
  const [rewards, setRewards] = useState([
    {
      id: 1,
      title: "5% Discount on Next Ride",
      description: "Get a 5% discount on your next ride as a reward for your loyalty.",
      pointsRequired: 100,
      redeemed: false,
    },
    {
      id: 2,
      title: "Priority Booking",
      description: "Enjoy priority booking status on your next trip.",
      pointsRequired: 200,
      redeemed: false,
    },
    {
      id: 3,
      title: "Free Ride Upgrade",
      description: "Upgrade to a premium ride for free on your next booking.",
      pointsRequired: 300,
      redeemed: true,
    },
  ]);

  const userPoints = 150; // Example user points for display

  const redeemReward = (rewardId) => {
    setRewards((prevRewards) =>
      prevRewards.map((reward) => (reward.id === rewardId ? { ...reward, redeemed: true } : reward))
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">Rewards Program</h1>
        <p className="text-gray-300 mt-2">Earn points and redeem them for exclusive rewards.</p>
      </motion.div>

      {/* User Points Display */}
      <div className="text-center mb-12">
        <motion.div
          className="text-3xl font-semibold text-orange-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <FaCoins className="inline-block mr-2" />
          {userPoints} Points
        </motion.div>
        <p className="text-gray-400 mt-2">Your current reward points balance</p>
      </div>

      {/* Rewards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            className={`bg-gray-800 rounded-lg shadow-lg p-6 ${reward.redeemed ? "opacity-50" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reward.id * 0.1 }}>
            <div className="flex items-center mb-4">
              <FaGift className="text-orange-500 text-2xl mr-2" />
              <h2 className="text-xl font-semibold">{reward.title}</h2>
            </div>
            <p className="text-gray-300 mb-4">{reward.description}</p>
            <div className="text-gray-400 mb-4">
              <span className="font-semibold text-lg text-orange-500">{reward.pointsRequired} Points</span>{" "}
              required
            </div>
            <button
              onClick={() => redeemReward(reward.id)}
              className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition duration-300 ${
                reward.redeemed
                  ? "bg-gray-600 cursor-not-allowed"
                  : userPoints >= reward.pointsRequired
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-600 cursor-not-allowed"
              }`}
              disabled={reward.redeemed || userPoints < reward.pointsRequired}>
              {reward.redeemed ? "Redeemed" : "Redeem Now"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* How to Earn Points Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <h2 className="text-2xl font-semibold text-white mb-4">How to Earn Points</h2>
        <p className="text-gray-400 mb-8">Participate in the ChainMove platform to earn reward points.</p>
        <div className="flex justify-center items-center space-x-4">
          <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg w-full max-w-xs">
            <FaCar className="text-orange-500 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-white mb-2">Complete Trips</h3>
            <p className="text-gray-400 text-sm">Earn points for every trip completed as a driver.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg w-full max-w-xs">
            <FaTrophy className="text-orange-500 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-white mb-2">Achieve Milestones</h3>
            <p className="text-gray-400 text-sm">Hit milestones and earn extra reward points.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RewardsPage;
