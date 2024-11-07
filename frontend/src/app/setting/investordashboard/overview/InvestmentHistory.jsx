"use client";
import React from "react";

const InvestmentHistory = () => {
	const investments = [
		{
			driver: "Michael Ogbu",
			amount: "$1000.00",
			plan: "Standard",
			date: "21-02-2024/11:00PM",
			status: "Pending",
			color: "text-yellow-500",
		},
		{
			driver: "Chisom Ikechi",
			amount: "$1000.00",
			plan: "Short Term",
			date: "21-02-2024/11:00PM",
			status: "Pending",
			color: "text-yellow-500",
		},
		{
			driver: "Robert Odinnika",
			amount: "$1000.00",
			plan: "Standard",
			date: "21-02-2024/11:00PM",
			status: "Completed",
			color: "text-green-500",
		},
		{
			driver: "Emule David",
			amount: "$1000.00",
			plan: "Extended",
			date: "21-02-2024/11:00PM",
			status: "Cancelled",
			color: "text-red-500",
		},
	];

	return (
		<div className="bg-gray-900 p-10 rounded-lg shadow-lg text-white">
			<h2 className="text-2xl font-semibold mb-6">Investment History</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full text-sm bg-gray-800 rounded-lg">
					<thead>
						<tr className="text-gray-400 bg-gray-700">
							<th className="p-4 text-left font-semibold">Driver's Name</th>
							<th className="p-4 text-left font-semibold">Amount Inv.</th>
							<th className="p-4 text-left font-semibold">Plan</th>
							<th className="p-4 text-left font-semibold">Date/Time</th>
							<th className="p-4 text-left font-semibold">Status</th>
						</tr>
					</thead>
					<tbody>
						{investments.map((investment, index) => (
							<tr
								key={index}
								className="border-b border-gray-700 hover:bg-gray-700 transition duration-300"
							>
								<td className="p-4">{investment.driver}</td>
								<td className="p-4">{investment.amount}</td>
								<td className="p-4">{investment.plan}</td>
								<td className="p-4">{investment.date}</td>
								<td className={`p-4 font-semibold ${investment.color}`}>
									{investment.status}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default InvestmentHistory;
