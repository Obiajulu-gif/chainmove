"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaPlus, FaThumbsDown, FaThumbsUp, FaUserTie } from "react-icons/fa";

const DAOPage = () => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Proposal to Increase Driver Rewards",
      description: "Increase the driver rewards by 15% to motivate drivers and improve retention rates.",
      votes: { up: 120, down: 30 },
      status: "Open",
    },
    {
      id: 2,
      title: "Proposal to Improve User Security",
      description: "Enhance security measures by implementing two-factor authentication for all users.",
      votes: { up: 95, down: 10 },
      status: "Open",
    },
    {
      id: 3,
      title: "Proposal to Launch New Marketing Campaign",
      description: "Invest in a new marketing campaign to attract more users to the platform.",
      votes: { up: 150, down: 20 },
      status: "Closed",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">ChainMove DAO</h1>
        <p className="text-gray-300 mt-2">
          Participate in governance by voting on proposals to shape the future of ChainMove.
        </p>
      </motion.div>

      {/* Proposals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proposals.map((proposal) => (
          <motion.div
            key={proposal.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: proposal.id * 0.1 }}>
            <div className="flex items-center mb-4">
              <FaUserTie className="text-orange-500 text-2xl mr-2" />
              <h2 className="text-xl font-semibold">{proposal.title}</h2>
            </div>
            <p className="text-gray-300 mb-4">{proposal.description}</p>
            <div className="flex items-center justify-between text-gray-400 mb-4">
              <div className="flex items-center">
                <FaThumbsUp className="text-green-500 mr-2" /> {proposal.votes.up}
              </div>
              <div className="flex items-center">
                <FaThumbsDown className="text-red-500 mr-2" /> {proposal.votes.down}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  proposal.status === "Open" ? "bg-green-500 text-green-100" : "bg-gray-500 text-gray-200"
                }`}>
                {proposal.status}
              </span>
              {proposal.status === "Open" && (
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                  Vote Now
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Proposal Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-600 transition duration-300">
          <FaPlus className="mr-2" /> <span>Submit New Proposal</span>
        </button>
      </motion.div>
    </div>
  );
};

export default DAOPage;
