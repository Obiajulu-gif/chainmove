"use client";
import React from "react";
import WelcomeHeader from "./WelcomeHeader";
import OverviewStats from "./OverviewStats";
import PortfolioReturns from "./PortfolioReturns";
import InvestmentHistory from "./InvestmentHistory";
import InvestmentHistoryTable from "./InvestmentHistoryTable"; // Import the table component

const DashboardLayout = () => {
	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Welcome and Header Section */}
			<WelcomeHeader />

			{/* Overview Stats Section */}
			<OverviewStats />

			{/* Main Grid Layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Left Column - Portfolio Returns */}
				<PortfolioReturns />

				{/* Right Column - Investment History */}
				<InvestmentHistory />
			</div>

			{/* Full-Width Investment History Table */}
			<div className="mt-8">
				<InvestmentHistoryTable />
			</div>
		</div>
	);
};

export default DashboardLayout;
