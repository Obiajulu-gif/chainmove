"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const PortfolioDashboard = () => {
	const chartData = {
		labels: [
			"Jul 28",
			"Aug 1",
			"Aug 7",
			"Aug 14",
			"Aug 21",
			"Aug 28",
			"Sept 1",
		],
		datasets: [
			{
				label: "Portfolio Returns",
				data: [1000, 2000, 5000, 10000, 15000, 10000, 12000],
				backgroundColor: "#f97316", // Orange color for the bars
				borderRadius: 4,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: { grid: { display: false }, ticks: { color: "#fff" } },
			y: { ticks: { color: "#fff" } },
		},
		plugins: {
			legend: { display: false },
		},
	};

	return (
		<div className="flex gap-4 p-1 bg-gray-900 text-white h-50">
			{/* Left Section - Portfolio Returns */}
			<div className="flex-1 bg-gray-800 rounded-lg p-3">
				<h3 className="text-base font-semibold mb-3">Portfolio Returns</h3>
				<div className="h-50">
					{" "}
					{/* Reduced height to make the chart smaller */}
					<Bar data={chartData} options={chartOptions} />
				</div>
				<div className="flex justify-center space-x-2 mt-3 text-gray-400">
					{["1D", "7D", "1M", "6M", "1Y"].map((period) => (
						<button
							key={period}
							className="hover:text-white focus:text-white text-sm"
						>
							{period}
						</button>
					))}
				</div>
			</div>

			{/* Right Section - Profit Summary */}
			<div className="w-1/3 bg-gray-800 rounded-lg p-3 flex flex-col justify-between">
				{/* Total Profit */}
				<div>
					<h4 className="text-gray-400 text-sm">Total Profit</h4>
					<p className="text-3xl font-bold text-white">$2,330.00</p>
				</div>

				{/* Best Investment Project */}
				<div className="mt-5">
					<h4 className="text-gray-400 text-sm">Best Inv. Project</h4>
					<div className="flex justify-between items-center">
						<span className="text-lg font-semibold">Ade Oluwaseyi</span>
						<span className="text-green-500 bg-green-900 px-2 py-0.5 rounded-full text-xs">
							↑ 15%
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioDashboard;
