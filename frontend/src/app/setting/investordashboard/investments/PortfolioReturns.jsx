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

// Register necessary Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const PortfolioReturns = () => {
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
			x: {
				type: "category", // Explicitly set the type to 'category'
				grid: { display: false },
				ticks: { color: "#fff" },
			},
			y: { ticks: { color: "#fff" } },
		},
		plugins: {
			legend: { display: false },
		},
	};

	return (
		<div className="bg-gray-800 p-4 rounded-lg h-60">
			<h3 className="text-lg font-semibold mb-4">Portfolio Returns</h3>
			<div className="h-40">
				<Bar data={chartData} options={chartOptions} />
			</div>
		</div>
	);
};

export default PortfolioReturns;
