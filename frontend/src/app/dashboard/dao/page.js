"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaInfoCircle, FaPlusCircle, FaVoteYea } from "react-icons/fa";

const DAOPage = () => {
  const [proposals, setProposals] = useState([
    { id: 1, title: "Proposal 1: Increase Driver Rewards", status: "Active" },
    { id: 2, title: "Proposal 2: New Feature for Shared Rides", status: "Completed" },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">ChainMove DAO</h1>
        <p className="text-gray-300 mt-2">
          Participate in community governance and shape the future of ChainMove.
        </p>
      </motion.div>

      {/* Proposal Creation Section */}
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}>
        <div className="flex items-center space-x-4">
          <FaPlusCircle className="text-3xl text-orange-500" />
          <h2 className="text-2xl font-semibold">Create a New Proposal</h2>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition duration-300">
          Create Proposal
        </button>
      </motion.div>

      {/* Active Proposals Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Active Proposals</h3>
        {proposals.map((proposal) => (
          <motion.div
            key={proposal.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: proposal.id * 0.1 }}>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-orange-400">{proposal.title}</h4>
                <p className="text-gray-400">{proposal.status}</p>
              </div>
              <button
                onClick={() => console.log(`Voted on Proposal ${proposal.id}`)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center space-x-2">
                <FaVoteYea className="text-lg" />
                <span>Vote</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DAO Info and Insights Section */}
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-4 mb-4">
          <FaInfoCircle className="text-3xl text-orange-500" />
          <h2 className="text-2xl font-semibold">DAO Insights</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The ChainMove DAO empowers the community to make decisions about the platform's evolution, fund
          allocation, and feature prioritization. Get involved and vote on active proposals to have a say in
          the platform's future.
        </p>
        <div className="flex space-x-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-400">500+</p>
            <p className="text-gray-400">Community Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-400">12</p>
            <p className="text-gray-400">Active Proposals</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-400">25</p>
            <p className="text-gray-400">Votes Cast</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DAOPage;
