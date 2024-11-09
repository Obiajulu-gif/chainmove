// pages/dashboard/rewards.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaCoins, FaGift, FaTrophy } from "react-icons/fa";

// pages/dashboard/rewards.js

const RewardPage = () => {
  // Sample data for rewards
  const [rewards, setRewards] = useState([
    {
      id: 1,
      title: "Early Adopter Bonus",
      description: "Reward for joining ChainMove in its first 100 days.",
      pointsRequired: 500,
      isRedeemed: false,
    },
    {
      id: 2,
      title: "Top Driver",
      description: "Awarded to drivers with over 100 completed rides.",
      pointsRequired: 1000,
      isRedeemed: true,
    },
    {
      id: 3,
      title: "Frequent Rider",
      description: "Earn points for taking 10 or more trips.",
      pointsRequired: 300,
      isRedeemed: false,
    },
  ]);

  const handleRedeem = (rewardId) => {
    console.log(`Redeeming reward with ID: ${rewardId}`);
    // Logic for redeeming reward here
    setRewards((prevRewards) =>
      prevRewards.map((reward) => (reward.id === rewardId ? { ...reward, isRedeemed: true } : reward))
    );
  };

  return (
    <div className="bg-gray-800 min-h-screen p-6 text-white">
      {/* Page Header */}
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-orange-500">Rewards</h1>
      </motion.div>

      {/* Rewards Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-4">
              <FaTrophy className="text-3xl text-orange-500" />
              <h2 className="text-xl font-semibold">{reward.title}</h2>
            </div>
            <p className="text-gray-400">{reward.description}</p>
            <p className="text-gray-400">
              <FaCoins className="inline text-yellow-400 mr-1" />
              Points Required: <span className="text-white">{reward.pointsRequired}</span>
            </p>

            {reward.isRedeemed ? (
              <div className="flex items-center space-x-2 text-green-500">
                <FaCheckCircle />
                <span>Reward Redeemed</span>
              </div>
            ) : (
              <button
                onClick={() => handleRedeem(reward.id)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
                Redeem
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RewardPage;
