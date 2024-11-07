"use client";
import React from "react";
import { FaDollarSign } from "react-icons/fa";

const WelcomeHeader = () => {
	return (
		<div className="flex justify-between items-center mb-4">
			<h1 className="text-2xl font-semibold">Welcome, Emmanuel</h1>
			<div className="flex items-center space-x-2">
				<span className="text-gray-400">Currency</span>
				<div className="flex items-center bg-gray-800 rounded-md px-4 py-2 cursor-pointer">
					<FaDollarSign className="text-green-500 mr-1" />
					<span className="text-white">USD</span>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHeader;
