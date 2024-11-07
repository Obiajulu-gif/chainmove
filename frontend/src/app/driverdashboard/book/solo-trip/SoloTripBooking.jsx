// components/dashboard/SoloTripBooking.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const SoloTripBooking = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false); // Add loading state
	const [formData, setFormData] = useState({
		departure: "",
		destination: "",
		time: "08:00 AM",
		cost: "$50.02",
	});

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = () => {
		setLoading(true); // Start loading indicator
		// Simulate processing delay
		setTimeout(() => {
			router.push(
				`/dashboard/book/solo-trip/checkout?departure=${formData.departure}&destination=${formData.destination}&time=${formData.time}&cost=${formData.cost}`
			);
		}, 1500); // Redirect after 1.5s
	};

	return (
		<div className="p-8 bg-gray-900 min-h-screen text-white">
			<div className="flex items-center space-x-3 mb-8">
				<FaArrowLeft
					onClick={() => router.back()}
					className="cursor-pointer text-2xl hover:text-orange-500 transition duration-200"
				/>
				<h1 className="text-3xl font-bold">Book A Trip &gt;&gt; Solo-Trip</h1>
			</div>

			<motion.div
				className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					{/* Departure Selection with Image */}
					<div className="relative">
						<label className="text-lg text-gray-400 mb-2">Departure</label>
						<div className="relative">
							<div className="absolute left-3 top-3">
								<Image
									src="/images/location.png"
									alt="Departure"
									width={40}
									height={40}
									className="rounded-full"
								/>
							</div>
							<select
								name="departure"
								onChange={handleInputChange}
								className="w-full p-4 pl-14 mt-1 bg-gray-700 rounded-lg text-gray-200"
							>
								<option value="">Select Pick-up Location</option>
								<option value="Location A">Location A</option>
								<option value="Location B">Location B</option>
								<option value="Location C">Location C</option>
							</select>
						</div>
					</div>

					{/* Destination Selection with Image */}
					<div className="relative">
						<label className="text-lg text-gray-400 mb-2">Destination</label>
						<div className="relative">
							<div className="absolute left-3 top-3">
								<Image
									src="/images/destination.png"
									alt="Destination"
									width={40}
									height={40}
									className="rounded-full"
								/>
							</div>
							<select
								name="destination"
								onChange={handleInputChange}
								className="w-full p-4 pl-14 mt-1 bg-gray-700 rounded-lg text-gray-200"
							>
								<option value="">Select Destination</option>
								<option value="Destination A">Destination A</option>
								<option value="Destination B">Destination B</option>
								<option value="Destination C">Destination C</option>
							</select>
						</div>
					</div>

					{/* Time Selection */}
					<div>
						<label className="text-lg text-gray-400 mb-2">Time</label>
						<select
							name="time"
							value={formData.time}
							onChange={handleInputChange}
							className="w-full p-4 mt-1 bg-gray-700 rounded-lg text-gray-200"
						>
							<option>08:00 AM</option>
							<option>09:00 AM</option>
							<option>10:00 AM</option>
							<option>11:00 AM</option>
						</select>
					</div>

					{/* Cost Input */}
					<div>
						<label className="text-lg text-gray-400 mb-2">Trip Cost</label>
						<input
							type="text"
							name="cost"
							value={formData.cost}
							readOnly
							className="w-full p-4 mt-1 bg-gray-700 rounded-lg text-gray-200"
						/>
					</div>
				</div>

				{/* Loading Indicator or Continue Button */}
				<motion.button
					whileHover={!loading ? { scale: 1.05 } : {}}
					whileTap={!loading ? { scale: 0.95 } : {}}
					onClick={handleSubmit}
					disabled={loading}
					className={`w-full py-4 rounded-full text-lg font-semibold transition duration-300 ${
						loading
							? "bg-gray-500 cursor-not-allowed"
							: "bg-orange-500 hover:bg-orange-600"
					}`}
				>
					{loading ? (
						<div className="flex items-center justify-center space-x-2">
							<div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
							<span>Processing...</span>
						</div>
					) : (
						"Continue"
					)}
				</motion.button>
			</motion.div>
		</div>
	);
};

export default SoloTripBooking;
