"use client";
import React from "react";

const InvestmentHistory = () => {
	const investments = [
		{
			name: "Michael Ogbu",
			amount: "$1000.00",
			plan: "Standard",
			date: "21-02-2024/11:00PM",
			status: "Pending",
		},
		{
			name: "Chisom Nneka",
			amount: "$1000.00",
			plan: "Short Term",
			date: "21-02-2024/11:00PM",
			status: "Pending",
		},
		{
			name: "Robert Odunke",
			amount: "$1000.00",
			plan: "Standard",
			date: "21-02-2024/11:00PM",
			status: "Completed",
		},
		{
			name: "Emule David",
			amount: "$1000.00",
			plan: "Extended",
			date: "21-02-2024/11:00PM",
			status: "Cancelled",
		},
	];

	return (
		<div className="bg-gray-800 p-4 rounded-lg">
			<h3 className="text-lg font-semibold mb-4">Investment History</h3>
			<table className="w-full text-sm text-gray-400">
				<thead>
					<tr className="bg-gray-700">
						<th className="p-4 text-left">Driver's Name</th>
						<th className="p-4 text-left">Amount Inv.</th>
						<th className="p-4 text-left">Plan</th>
						<th className="p-4 text-left">Date/Time</th>
						<th className="p-4 text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					{investments.map((investment, index) => (
						<tr key={index} className="border-b border-gray-700">
							<td className="p-4 text-white">{investment.name}</td>
							<td className="p-4 text-white">{investment.amount}</td>
							<td className="p-4 text-white">{investment.plan}</td>
							<td className="p-4 text-white">{investment.date}</td>
							<td
								className={`p-4 ${
									investment.status === "Pending"
										? "text-yellow-500"
										: investment.status === "Completed"
										? "text-green-500"
										: "text-red-500"
								}`}
							>
								{investment.status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default InvestmentHistory;
