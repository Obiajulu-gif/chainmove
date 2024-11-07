"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaEye } from "react-icons/fa";

const RequestFundsDashboard = () => {
	const [isRequestOpen, setIsRequestOpen] = useState(true);
	const [isRepaymentOpen, setIsRepaymentOpen] = useState(true);
	const [isHistoryOpen, setIsHistoryOpen] = useState(false);

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-semibold">Request Funds</h1>
				<button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200">
					View Marketplace
				</button>
			</div>

			{/* Active Request Section */}
			<div className="mb-6">
				<div
					className="bg-gray-800 rounded-lg p-4 flex items-center justify-between cursor-pointer"
					onClick={() => setIsRequestOpen(!isRequestOpen)}
				>
					<h2 className="text-lg font-semibold">Active Request</h2>
					{isRequestOpen ? <FaChevronUp /> : <FaChevronDown />}
				</div>
				{isRequestOpen && (
					<div className="bg-gray-800 rounded-b-lg p-4">
						<p className="text-gray-400 mb-2">March 2024 Funding Progress</p>
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-2xl font-bold">$2,830.00 / $2,830.00</h3>
							<a href="#" className="text-orange-500 font-semibold">
								Click here to view
							</a>
						</div>
						<div className="flex items-center space-x-4">
							<div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
								<div
									className="h-full bg-orange-500"
									style={{ width: "75%" }}
								></div>
							</div>
							<div className="text-gray-400 text-sm flex items-center space-x-2">
								<FaEye /> <span>4 Days left</span> <span>75%</span>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Active Repayment Section */}
			<div className="mb-6">
				<div
					className="bg-gray-800 rounded-lg p-4 flex items-center justify-between cursor-pointer"
					onClick={() => setIsRepaymentOpen(!isRepaymentOpen)}
				>
					<h2 className="text-lg font-semibold">Active Repayment</h2>
					{isRepaymentOpen ? <FaChevronUp /> : <FaChevronDown />}
				</div>
				{isRepaymentOpen && (
					<div className="bg-gray-800 rounded-b-lg p-4">
						<p className="text-gray-400 mb-2">March 2024 Repayment Progress</p>
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-2xl font-bold">$2,830.00 / $2,830.00</h3>
							<a href="#" className="text-green-500 font-semibold">
								Click here to view
							</a>
						</div>
						<div className="flex items-center space-x-4">
							<div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
								<div
									className="h-full bg-green-500"
									style={{ width: "75%" }}
								></div>
							</div>
							<div className="text-gray-400 text-sm flex items-center space-x-2">
								<FaEye /> <span>4 Days left</span> <span>75%</span>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Funding History Section */}
			<div>
				<div
					className="bg-gray-800 rounded-lg p-4 flex items-center justify-between cursor-pointer"
					onClick={() => setIsHistoryOpen(!isHistoryOpen)}
				>
					<h2 className="text-lg font-semibold">Funding History</h2>
					{isHistoryOpen ? <FaChevronUp /> : <FaChevronDown />}
				</div>
				{isHistoryOpen && (
					<div className="bg-gray-800 rounded-b-lg p-4">
						{/* History content goes here */}
						<p className="text-gray-400">No funding history available.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default RequestFundsDashboard;
