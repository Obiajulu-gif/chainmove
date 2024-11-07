// components/dashboard/Checkout.js
"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	// Retrieve data from URL parameters
	const departure = searchParams?.get("departure") || "N/A";
	const destination = searchParams?.get("destination") || "N/A";
	const time = searchParams?.get("time") || "N/A";
	const cost = searchParams?.get("cost") || "N/A";

	return (
		<div className="p-8 bg-gray-900 min-h-screen text-white">
			<div className="flex items-center space-x-2 mb-6">
				<FaArrowLeft onClick={() => router.back()} className="cursor-pointer" />
				<h1 className="text-xl font-semibold">
					Book A Trip &gt;&gt; Solo-Trip &gt;&gt; Checkout
				</h1>
			</div>

			<div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
				{/* Book Information */}
				<div className="bg-gray-800 p-6 rounded-lg flex-grow shadow-lg">
					<h2 className="text-lg font-semibold mb-4">Book Information</h2>
					<div className="bg-gray-700 p-4 rounded mb-4">
						<p className="text-sm text-gray-400">
							🎉 Congratulations! We have sent your booking details to the
							vehicle owner.
						</p>
					</div>

					<div className="mb-4">
						<p className="text-gray-400">Full Name</p>
						<p>Emulo David N.</p>
						<p className="text-gray-400 mt-2">Email Address</p>
						<p>emulodavid@gmail.com</p>
					</div>

					<div className="flex items-center justify-between mb-4">
						<div>
							<p className="text-gray-400">Driver Name</p>
							<p>Olaoluwa Sheyi</p>
							<p className="text-gray-400 mt-2">Email Address</p>
							<p>olaoluwa132@gmail.com</p>
						</div>
						<button className="bg-orange-500 text-white py-1 px-3 rounded-full">
							View
						</button>
					</div>

					<div className="text-sm text-gray-400 mt-4">
						<input type="checkbox" className="mr-2" />
						By Clicking this, I agree to BlockRide{" "}
						<span className="text-orange-500">Term & Conditions</span> and{" "}
						<span className="text-orange-500">Privacy Policy</span> to the
						vehicle owner.
					</div>
				</div>

				{/* Summary Section */}
				<div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
					<h2 className="text-lg font-semibold mb-4">Summary</h2>
					<div className="text-sm text-gray-400 mb-2">
						<p>Pickup Location: {departure}</p>
						<p>Destination: {destination}</p>
						<p>Date/Time: {time}</p>
						<p>Duration: 4h 1m</p>
						<p>Distance: 93km</p>
					</div>
					<hr className="border-gray-700 my-4" />
					<h2 className="text-lg font-semibold mb-2">Payment Details</h2>
					<p>Amount: {cost}</p>
					<p>Fee: $2.00</p>
					<p>Total: $52.07</p>
					<button className="w-full mt-4 py-2 bg-orange-500 rounded-full text-white font-semibold">
						Make Payment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
