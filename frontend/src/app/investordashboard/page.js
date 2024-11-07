"use client";
import React, { useState } from "react";
import {
	FaUser,
	FaIdCard,
	FaCamera,
	FaClock,
	FaDollarSign,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Overview = () => {
	const [step, setStep] = useState(1); // Track the current step
	const [showSuccessModal, setShowSuccessModal] = useState(false); // Track modal visibility
	const router = useRouter(); // Initialize the router for navigation

	// Function to go to the next step
	const handleNextStep = () => {
		if (step === 2) {
			setShowSuccessModal(true); // Show modal after final step
		} else {
			setStep((prevStep) => prevStep + 1);
		}
	};

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-semibold">Welcome, Emmanuel</h1>
				<div className="flex items-center space-x-2">
					<span className="text-gray-400">Currency</span>
					<div className="relative inline-flex items-center bg-gray-800 rounded-md px-4 py-2">
						<FaDollarSign className="text-green-500 mr-1" />
						<span className="text-white">USD</span>
					</div>
				</div>
			</div>

			{/* Step 1: Welcome Card */}
			{step === 1 && (
				<div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between shadow-lg">
					{/* Left Side - Image */}
					<div className="w-1/2 flex justify-center items-center">
						<Image
							src="/images/investor.png" // Replace with the actual imported image path
							alt="BlockRide Driver"
							className="rounded-lg"
							width={600}
							height={600}
						/>
					</div>

					{/* Right Side - Welcome Text */}
					<div className="w-1/2 pl-8">
						<h2 className="text-4xl font-bold mb-4 leading-snug">
							Welcome to BlockRide <br /> For Investor!
						</h2>
						<p className="text-gray-400 mb-6 leading-relaxed">
							As a BlockRide Investor, you have the freedom to earn from every
							Funding and investment while taking full advantage of our
							blockchain-powered platform.
						</p>
						<div className="flex space-x-2 mb-4">
							<span className="w-3 h-3 rounded-full bg-orange-500"></span>
							<span className="w-3 h-3 rounded-full bg-gray-500"></span>
							<span className="w-3 h-3 rounded-full bg-gray-500"></span>
						</div>
						<button
							onClick={handleNextStep}
							className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
						>
							Start Verification
						</button>
					</div>
				</div>
			)}

			{/* Step 2: Verification Page */}
			{step === 2 && (
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
							<button
								onClick={handleNextStep}
								className="mt-8 bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
							>
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
			)}

			{/* Success Modal */}
			{showSuccessModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-gray-800 p-6 rounded-lg text-center w-80 relative">
						<button
							onClick={() => setShowSuccessModal(false)}
							className="absolute top-2 right-2 text-gray-400"
						>
							&times;
						</button>
						<h3 className="text-2xl font-semibold mb-6">Identity Verified</h3>
						<p className="text-orange-400 text-lg font-semibold mb-4">
							You have successfully completed your verification.
						</p>
						<button
							onClick={() => router.push("/investordashboard/overview")} // Navigate to driver dashboard overview
							className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
						>
							Open Dashboard
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Overview;
