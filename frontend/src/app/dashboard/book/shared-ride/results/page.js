// components/dashboard/Checkout.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Checkout = () => {
	const router = useRouter();

	// Animation variants for motion components
	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.2 },
		},
	};
	const itemVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { type: "spring", stiffness: 60, damping: 15 },
		},
	};

	return (
		<div className="p-8 bg-gray-900 min-h-screen text-white">
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className="flex items-center space-x-2 mb-6 cursor-pointer"
				onClick={() => router.back()}
			>
				<FaArrowLeft />
				<h1 className="text-2xl font-semibold">
					Book A Trip &gt;&gt; Shared-Trip &gt;&gt; Checkout
				</h1>
			</motion.div>

			<motion.div
				className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{/* Left Side - Book Information, Passenger Details, Driver Information */}
				<div className="flex-grow space-y-6">
					{/* Book Information */}
					<motion.div
						className="bg-gray-800 p-8 rounded-lg shadow-lg"
						variants={itemVariants}
					>
						<h2 className="text-2xl font-semibold mb-4">Book Information</h2>
						<div className="bg-gray-700 p-4 rounded mb-4">
							<p className="text-md text-gray-400">
								🎉 Congratulations! We have sent your booking details to the
								vehicle owner.
							</p>
						</div>
						<div className="mb-4 flex justify-between">
							<div>
								<p className="text-lg text-gray-400">Full Name</p>
								<p className="text-xl">Emulo David N.</p>
							</div>
							<div>
								<p className="text-lg text-gray-400">Email Address</p>
								<p className="text-xl">emulodavid@gmail.com</p>
							</div>
						</div>
					</motion.div>

					{/* Passenger Details */}
					<motion.div
						className="bg-gray-800 p-8 rounded-lg shadow-lg"
						variants={itemVariants}
					>
						<h2 className="text-2xl font-semibold mb-4">Passenger Details</h2>
						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 bg-gray-600 rounded-full"></div>
							<div>
								<p className="text-lg text-gray-400">Passenger 01</p>
								<p className="text-xl">Olaoluwa Sheyi</p>
							</div>
						</div>
					</motion.div>

					{/* Driver Information */}
					<motion.div
						className="bg-gray-800 p-8 rounded-lg shadow-lg"
						variants={itemVariants}
					>
						<h2 className="text-2xl font-semibold mb-4">Driver Information</h2>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-gray-600 rounded-full"></div>
								<div>
									<p className="text-lg text-gray-400">Driver Name</p>
									<p className="text-xl">Olaoluwa Sheyi</p>
									<p className="text-lg text-gray-400 mt-2">Email Address</p>
									<p className="text-xl">olaoluwa132@gmail.com</p>
								</div>
							</div>
							<button className="bg-orange-500 text-white py-2 px-5 rounded-full hover:bg-orange-600 transition">
								View
							</button>
						</div>
					</motion.div>

					{/* Terms & Conditions */}
					<motion.div className="text-md text-gray-400" variants={itemVariants}>
						<input type="checkbox" className="mr-2" />
						By clicking this, I agree to BlockRide{" "}
						<span className="text-orange-500">Terms & Conditions</span> and{" "}
						<span className="text-orange-500">Privacy Policy</span>.
					</motion.div>
				</div>

				{/* Right Side - Summary */}
				<motion.div
					className="bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-1/3"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						delay: 0.3,
						type: "spring",
						stiffness: 60,
						damping: 15,
					}}
				>
					<h2 className="text-2xl font-semibold mb-4">Summary</h2>
					<div className="text-lg text-gray-400 mb-4 space-y-2">
						<p>
							Pickup Location: 432 Main Str, Agwu Avenue, Nsukka, Enugu State,
							Nigeria
						</p>
						<p>
							Destination: 432 Main Str, Agwu Avenue, Nsukka, Enugu State,
							Nigeria
						</p>
						<p>Date/Time: 4th-March-2024/02:00PM</p>
						<p>Duration: 4h 1m</p>
						<p>Distance: 33km</p>
					</div>
					<hr className="border-gray-700 my-4" />
					<h2 className="text-2xl font-semibold mb-2">Payment Details</h2>
					<div className="text-lg text-gray-400 mb-2 space-y-1">
						<p>Amount: $50.07</p>
						<p>Fee: $2.00</p>
						<p>Total: $52.07</p>
					</div>
					<p className="text-xl font-semibold text-right mt-4">You Will Pay</p>
					<p className="text-3xl font-bold text-right text-orange-500">
						$26.035
					</p>
					<motion.button
						className="w-full mt-6 py-3 bg-orange-500 rounded-full text-white font-semibold text-lg hover:bg-orange-600 transition"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Pay ($26.035)
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Checkout;
