"use client";
import React from "react";

const OverviewStats = () => {
	const stats = [
		{ title: "BlockRide Network", value: "$200,330.00", change: "↑ 1.5%" },
		{ title: "Total Profit", value: "$2,330.00" },
		{ title: "Total Investments", value: "5" },
		{ title: "Best Inv. Project", value: "Ade Oluwaseyi", change: "↑ 15%" },
	];

	return (
		<div className="grid grid-cols-4 gap-4 mb-6">
			{stats.map((stat, index) => (
				<div
					key={index}
					className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between"
				>
					<h4 className="text-gray-400 text-sm">{stat.title}</h4>
					<p className="text-3xl font-bold text-white">{stat.value}</p>
					{stat.change && (
						<span className="text-green-500 text-xs">{stat.change}</span>
					)}
				</div>
			))}
		</div>
	);
};

export default OverviewStats;
