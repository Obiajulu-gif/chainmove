// pages/dashboard/dao.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChartPie, FaPlus, FaVoteYea } from "react-icons/fa";

// pages/dashboard/dao.js

const DaoPage = () => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Proposal to Increase Rewards",
      description: "Increase the driver rewards by 10% for Q4 2023.",
      votesFor: 120,
      votesAgainst: 30,
      status: "Open",
    },
    {
      id: 2,
      title: "Proposal to Fund New Vehicles",
      description: "Allocate funds for purchasing new electric vehicles.",
      votesFor: 90,
      votesAgainst: 20,
      status: "Closed",
    },
  ]);

  return (
    <div className="bg-gray-800 min-h-screen p-6 text-white">
      {/* Page Header */}
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-orange-500">ChainMove DAO</h1>
        <button className="bg-orange-500 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-orange-600 transition">
          <FaPlus className="text-lg" />
          <span>Create Proposal</span>
        </button>
      </motion.div>

      {/* Proposals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proposals.map((proposal) => (
          <motion.div
            key={proposal.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-xl font-semibold">{proposal.title}</h2>
            <p className="text-gray-400">{proposal.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>
                <FaVoteYea className="inline mr-1 text-green-400" /> Votes For: {proposal.votesFor}
              </span>
              <span>
                <FaVoteYea className="inline mr-1 text-red-400" /> Votes Against: {proposal.votesAgainst}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span
                className={`text-sm font-semibold ${
                  proposal.status === "Open" ? "text-green-400" : "text-gray-500"
                }`}>
                {proposal.status}
              </span>
              <button
                className={`${
                  proposal.status === "Open" ? "bg-green-500" : "bg-gray-600 cursor-not-allowed"
                } px-4 py-2 rounded-md text-sm font-medium text-white transition`}
                disabled={proposal.status !== "Open"}>
                {proposal.status === "Open" ? "Vote" : "Closed"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Voting Statistics Section */}
      <motion.div
        className="mt-10 p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-around"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="flex flex-col items-center">
          <FaChartPie className="text-4xl text-orange-500 mb-2" />
          <h3 className="text-xl font-semibold text-orange-500">DAO Statistics</h3>
        </div>
        <div className="mt-4 md:mt-0 text-gray-400">
          <p>
            Total Proposals: <span className="font-semibold text-white">{proposals.length}</span>
          </p>
          <p>
            Active Proposals:{" "}
            <span className="font-semibold text-green-400">
              {proposals.filter((p) => p.status === "Open").length}
            </span>
          </p>
          <p>
            Closed Proposals:{" "}
            <span className="font-semibold text-red-400">
              {proposals.filter((p) => p.status === "Closed").length}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DaoPage;
