"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCoins, FaGift, FaTrophy } from "react-icons/fa";

const RewardsPage = () => {
  // Mock data for demonstration purposes
  const [rewardsPoints, setRewardsPoints] = useState(1500); // Total reward points
  const [redeemedRewards, setRedeemedRewards] = useState([]);

  // Available rewards that can be redeemed
  const availableRewards = [
    { id: 1, title: "Free Ride", pointsRequired: 500, description: "Get a free ride on your next booking!" },
    { id: 2, title: "Priority Booking", pointsRequired: 800, description: "Book your rides with priority!" },
    {
      id: 3,
      title: "Discounted Rental",
      pointsRequired: 1000,
      description: "Get a 20% discount on car rentals!",
    },
    { id: 4, title: "Exclusive Badge", pointsRequired: 1200, description: "Earn a badge for your profile." },
  ];

  const redeemReward = (reward) => {
    if (rewardsPoints >= reward.pointsRequired) {
      setRewardsPoints(rewardsPoints - reward.pointsRequired);
      setRedeemedRewards([...redeemedRewards, reward]);
      alert(`Congratulations! You have redeemed: ${reward.title}`);
    } else {
      alert("You don’t have enough points to redeem this reward.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">Rewards Center</h1>
        <p className="text-gray-300 mt-2">View and redeem your earned rewards.</p>
      </motion.div>

      {/* Rewards Points Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-orange-400">Your Reward Points</h2>
          <p className="text-gray-400 mt-2">Earn more points by booking rides and completing trips.</p>
        </div>
        <div className="text-5xl font-bold text-yellow-400 mt-4 md:mt-0 flex items-center space-x-2">
          <FaCoins className="text-yellow-400" />
          <span>{rewardsPoints}</span>
        </div>
      </div>

      {/* Available Rewards Section */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Available Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableRewards.map((reward) => (
            <div key={reward.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <FaGift className="text-3xl text-green-400" />
                <h3 className="text-xl font-bold text-white">{reward.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{reward.description}</p>
              <p className="text-yellow-400 font-semibold mb-4">Points Required: {reward.pointsRequired}</p>
              <button
                onClick={() => redeemReward(reward)}
                className={`w-full py-2 rounded-lg ${
                  rewardsPoints >= reward.pointsRequired
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
                disabled={rewardsPoints < reward.pointsRequired}>
                {rewardsPoints >= reward.pointsRequired ? "Redeem" : "Insufficient Points"}
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Redeemed Rewards Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Redeemed Rewards</h2>
        {redeemedRewards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redeemedRewards.map((reward, index) => (
              <div key={index} className="bg-green-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <FaTrophy className="text-3xl text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">{reward.title}</h3>
                </div>
                <p className="text-gray-300">{reward.description}</p>
                <p className="text-gray-400 text-sm mt-2">Redeemed with {reward.pointsRequired} points</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">You haven't redeemed any rewards yet. Start redeeming now!</p>
        )}
      </motion.div>
    </div>
  );
};

export default RewardsPage;
