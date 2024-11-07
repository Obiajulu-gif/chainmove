"use client";
import React from "react";
import {
	FaUser,
	FaIdCard,
	FaCamera,
	FaClock,
	FaDollarSign,
} from "react-icons/fa";

const InvestorVerification = () => {
	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-semibold">
					Onboarding &gt;&gt; Investor Verification
				</h1>
				<div className="flex items-center space-x-2">
					<span className="text-gray-400">Currency</span>
					<div className="flex items-center bg-gray-800 rounded-md px-4 py-2">
						<FaDollarSign className="text-green-500 mr-1" />
						<span className="text-white">USD</span>
					</div>
				</div>
			</div>

			{/* Verification Card */}
			<div className="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between items-start">
				{/* Left Side - Verification Information */}
				<div>
					<h2 className="text-4xl font-bold mb-4 leading-snug">
						Complete Verification <br /> To Access Your Investor Portal
					</h2>
					<ul className="mt-6 space-y-4 text-lg">
						<li className="flex items-center text-gray-300">
							<FaUser className="mr-4" />
							Personal Information
						</li>
						<li className="flex items-center text-gray-300">
							<FaIdCard className="mr-4" />
							Government-issued ID
						</li>
						<li className="flex items-center text-gray-300">
							<FaCamera className="mr-4" />A Photo Holding Valid ID
						</li>
					</ul>
					<button className="mt-8 bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg">
						Start Now
					</button>
				</div>

				{/* Right Side - Review Time Info */}
				<div className="text-right text-gray-400">
					<FaClock className="text-3xl inline-block mb-2" />
					<p>Review time: 5 mins - 3 working days</p>
				</div>
			</div>
		</div>
	);
};

export default InvestorVerification;
