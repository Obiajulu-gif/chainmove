// components/InvestmentHistoryTable.js
import React from "react";

const InvestmentHistoryTable = () => {
	const investments = [
		{
			driverName: "Michael Ogbu",
			amount: "$1000.00",
			plan: "Standard",
			date: "21-02-2024/11:00PM",
			status: "Pending",
			statusColor: "text-yellow-500",
		},
		{
			driverName: "Chisom Mkelei",
			amount: "$1000.00",
			plan: "Short Term",
			date: "21-02-2024/11:00PM",
			status: "Pending",
			statusColor: "text-yellow-500",
		},
		{
			driverName: "Robert Odianika",
			amount: "$1000.00",
			plan: "Standard",
			date: "21-02-2024/11:00PM",
			status: "Completed",
			statusColor: "text-green-500",
		},
		{
			driverName: "Emule David",
			amount: "$1000.00",
			plan: "Extended",
			date: "21-02-2024/11:00PM",
			status: "Cancelled",
			statusColor: "text-red-500",
		},
	];

	return (
		<div className="bg-gray-800 p-6 rounded-lg mt-8">
			<h2 className="text-2xl font-semibold text-white mb-4">
				Investment History
			</h2>
			<table className="w-full text-left text-gray-400">
				<thead>
					<tr className="border-b border-gray-700">
						<th className="p-4">Driver's Name</th>
						<th className="p-4">Amount Inv.</th>
						<th className="p-4">Plan</th>
						<th className="p-4">Date/Time</th>
						<th className="p-4">Status</th>
					</tr>
				</thead>
				<tbody>
					{investments.map((investment, index) => (
						<tr
							key={index}
							className="border-b border-gray-700 hover:bg-gray-700 transition duration-300"
						>
							<td className="p-4 text-white">{investment.driverName}</td>
							<td className="p-4 text-white">{investment.amount}</td>
							<td className="p-4 text-white">{investment.plan}</td>
							<td className="p-4 text-white">{investment.date}</td>
							<td className={`p-4 font-semibold ${investment.statusColor}`}>
								{investment.status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default InvestmentHistoryTable;
