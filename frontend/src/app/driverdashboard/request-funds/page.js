"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaDollarSign } from "react-icons/fa";
import Image from "next/image";

const RequestFunds = () => {
	const router = useRouter();

	const handleBeginProcess = () => {
		// Navigate to the funding form page
		router.push("/driverdashboard/request-funds/form"); // Replace with the correct route
	};
	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-semibold">Request Funds</h1>
				<div className="flex items-center space-x-2">
					<span className="text-gray-400">Currency</span>
					<div className="relative inline-flex items-center bg-gray-800 rounded-md px-4 py-2 cursor-pointer">
						<FaDollarSign className="text-green-500 mr-1" />
						<span className="text-white">USD</span>
					</div>
				</div>
			</div>

			{/* Funding Portal Card */}
			<div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between shadow-lg">
				{/* Left Side - Image that fills container */}
				<div className="w-1/2 flex justify-center items-center">
					<div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
						<Image
							src="/images/requestfund.png" // Replace with the actual image path
							alt="Funding Illustration"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				{/* Right Side - Funding Information */}
				<div className="w-1/2 pl-8">
					<h2 className="text-4xl font-bold mb-4">
						Welcome to BlockRide Funding Portal!
					</h2>
					<p className="text-gray-400 mb-6">
						<strong>Choose Your Purpose:</strong> Select whether you need funds
						for vehicle repairs or to purchase a new motorcycle.
					</p>
					<p className="text-gray-400 mb-6">
						<strong>Set Your Repayment Plan:</strong> Pick a repayment schedule
						that fits your earnings. With blockchain technology, repayments are
						automatic and fully transparent.
					</p>
					<p className="text-gray-400 mb-6">
						<strong>Start Earning and Repay as You Go:</strong> Use the funds to
						fuel your work on BlockRide, and repay investors seamlessly as you
						earn on the platform.
					</p>
					<button
						onClick={handleBeginProcess}
						className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
					>
						Begin Process
					</button>
				</div>
			</div>
		</div>
	);
};

export default RequestFunds;
