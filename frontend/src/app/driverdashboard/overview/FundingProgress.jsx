"use client";
import React from "react";
import { FaClock } from "react-icons/fa";

const FundingProgress = () => {
	return (
		<div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center shadow-lg">
			<div className="flex mb-2">
				{/* Left Side - Title */}
				<div>
					<p className="text-xs text-gray-400">March 2024 Funding Progress</p>
				</div>
				{/* Right Side - Click to view */}
				<a
					href="#"
					className="text-orange-500 text-xs font-semibold hover:underline"
				>
					Click here to view
				</a>
			</div>

			{/* Amount Raised */}
			<div className="flex items-end mb-2 space-x-2">
				<span className="text-4xl font-bold">$2,330.00</span>
				<span className="text-gray-500 text-xl">/ $2,500.00</span>
			</div>

			{/* Progress Bar */}
			<div className="relative w-full h-3 bg-gray-700 rounded-full mb-3">
				<div
					className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
					style={{ width: "76%" }} // Set width dynamically based on percentage progress
				></div>
			</div>

			{/* Bottom Info Row */}
			<div className="flex justify-between items-center text-xs text-gray-400">
				<div className="flex items-center space-x-1">
					<FaClock />
					<span>4 Days Left</span>
				</div>
				<div className="text-gray-200 font-semibold">76%</div>
			</div>
		</div>
	);
};

export default FundingProgress;
