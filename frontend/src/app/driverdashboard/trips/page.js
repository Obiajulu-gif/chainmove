"use client";
import React, { useState } from "react";
import { FaBitcoin, FaSort, FaCloud } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const trips = [
	{
		pickUp: "Pick 734 Main Str, Lagos Nigeria",
		destination: "Pick 734 Main Str, Lagos Nigeria",
		payment: "Bitcoin",
		distance: "12KM",
		status: "Pending",
		color: "text-yellow-500",
	},
	{
		pickUp: "Pick 734 Main Str, Lagos Nigeria",
		destination: "Pick 734 Main Str, Lagos Nigeria",
		payment: "Bitcoin",
		distance: "12KM",
		status: "Completed",
		color: "text-green-500",
	},
	{
		pickUp: "Pick 734 Main Str, Lagos Nigeria",
		destination: "Pick 734 Main Str, Lagos Nigeria",
		payment: "Bitcoin",
		distance: "12KM",
		status: "Cancelled",
		color: "text-red-500",
	},
	{
		pickUp: "Pick 734 Main Str, Lagos Nigeria",
		destination: "Pick 734 Main Str, Lagos Nigeria",
		payment: "Bitcoin",
		distance: "12KM",
		status: "Pending",
		color: "text-yellow-500",
	},
	{
		pickUp: "Pick 734 Main Str, Lagos Nigeria",
		destination: "Pick 734 Main Str, Lagos Nigeria",
		payment: "Bitcoin",
		distance: "12KM",
		status: "Completed",
		color: "text-green-500",
	},
	{
		pickUp: "Pick 734 Main Str, Lagos Nigeria",
		destination: "Pick 734 Main Str, Lagos Nigeria",
		payment: "Bitcoin",
		distance: "12KM",
		status: "Cancelled",
		color: "text-red-500",
	},

];

const TripsSummary = () => {
	const [currency, setCurrency] = useState("USD");
	const [sortActive, setSortActive] = useState(false);

	const handleCurrencyChange = () => {
		setCurrency(currency === "USD" ? "EUR" : "USD");
	};

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-semibold">Trips Summary</h1>
				<div className="flex items-center space-x-2">
					<span className="text-gray-400">Currency</span>
					<div
						className="relative inline-flex items-center bg-gray-800 rounded-md px-4 py-2 cursor-pointer"
						onClick={handleCurrencyChange}
					>
						<FaDollarSign className="text-green-500 mr-1" />
						<span className="text-white">{currency}</span>
					</div>
				</div>
			</div>

			{/* Trip History Header */}
			<div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-semibold">
						Trip History <span className="text-gray-400">(Today)</span>
					</h2>
					<div className="flex items-center space-x-2">
						<span className="text-gray-400">Sort by</span>
						<button
							onClick={() => setSortActive(!sortActive)}
							className={`p-2 rounded-full ${
								sortActive ? "bg-orange-500" : "bg-gray-600"
							}`}
						>
							<FaSort className="text-white" />
						</button>
					</div>
				</div>
			</div>

			{/* Trips Table */}
			<div className="bg-gray-800 rounded-lg shadow-lg overflow-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="text-gray-400 border-b border-gray-700">
							<th className="p-4 text-left">Pick Up Point</th>
							<th className="p-4 text-left">Destination</th>
							<th className="p-4 text-left">Payment</th>
							<th className="p-4 text-left">Distance</th>
							<th className="p-4 text-left">Status</th>
						</tr>
					</thead>
					<tbody>
						{trips.map((trip, index) => (
							<tr
								key={index}
								className="border-b border-gray-700 hover:bg-gray-700 transition"
							>
								<td className="p-4 text-white">{trip.pickUp}</td>
								<td className="p-4 text-white">{trip.destination}</td>
								<td className="p-4 flex items-center space-x-2 text-white">
									<FaBitcoin className="text-yellow-500" />
									<span>{trip.payment}</span>
								</td>
								<td className="p-4 text-white">{trip.distance}</td>
								<td className={`p-4 font-semibold ${trip.color}`}>
									{trip.status}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TripsSummary;
