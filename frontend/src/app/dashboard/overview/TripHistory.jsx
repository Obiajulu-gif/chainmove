// components/dashboard/TripHistory.js
"use client";
import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { motion } from "framer-motion";

const TripHistory = () => {
	const trips = [
		{
			pickUp: "734 Main Str, Lagos, Nigeria",
			status: "Pending",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-yellow-500",
		},
		{
			pickUp: "734 Main Str, Lagos, Nigeria",
			status: "Completed",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-green-500",
		},
		{
			pickUp: "734 Main Str, Lagos, Nigeria",
			status: "Completed",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-green-500",
		},
		{
			pickUp: "734 Main Str, Lagos, Nigeria",
			status: "Cancelled",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-red-500",
		},
		{
			pickUp: "734 Main Str, Lagos, Nigeria",
			status: "Completed",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-green-500",
		},
	];

	return (
		<div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
			<h2 className="text-2xl font-semibold text-white mb-6">Trip History</h2>
			<motion.table
				className="w-full text-lg bg-gray-800 rounded-lg overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<thead>
					<tr className="text-gray-400 bg-gray-700">
						<th className="p-4 text-left">Pick-Up Point</th>
						<th className="p-4 text-left">Destination</th>
						<th className="p-4 text-left">Payment</th>
						<th className="p-4 text-left">Distance</th>
						<th className="p-4 text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					{trips.map((trip, index) => (
						<motion.tr
							key={index}
							className="border-b border-gray-700 hover:bg-gray-700 transition duration-300"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							whileHover={{ scale: 1.02 }}
						>
							<td className="p-4 text-white">{trip.pickUp}</td>
							<td className="p-4 text-white">{trip.pickUp}</td>
							<td className="p-4 flex items-center space-x-2 text-white">
								<FaBitcoin className="text-yellow-500" />
								<span>{trip.payment}</span>
							</td>
							<td className="p-4 text-white">{trip.distance}</td>
							<td className={`p-4 font-semibold ${trip.color}`}>
								{trip.status}
							</td>
						</motion.tr>
					))}
				</tbody>
			</motion.table>
		</div>
	);
};

export default TripHistory;
