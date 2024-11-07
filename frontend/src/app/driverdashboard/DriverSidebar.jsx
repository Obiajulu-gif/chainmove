"use client";
import {
	FaChartBar,
	FaCar,
	FaExchangeAlt,
	FaGift,
	FaUser,
	FaUserTie,
	FaIdCard,
	FaQuestionCircle,
	FaCog,
	FaSignOutAlt,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DriverSidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const sidebarVariants = {
		open: { width: "16rem", transition: { duration: 0.5 } },
		closed: { width: "4rem", transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			className="bg-gray-900 text-white h-screen p-4 flex flex-col justify-between fixed md:relative z-50 shadow-lg"
			animate={isSidebarOpen ? "open" : "closed"}
			variants={sidebarVariants}
		>
			{/* Sidebar Header */}
			<div>
				<Link href="/">
					<h2 className="text-3xl font-bold text-orange-500">
						{isSidebarOpen && "BlockRide"}
					</h2>
				</Link>

				{/* Main Navigation */}
				<nav className="mt-8 flex flex-col space-y-4">
					{/* Overview */}
					<Link
						href="/driverdashboard/overview"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaChartBar className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Overview</span>
						)}
					</Link>

					{/* Trips */}
					<Link
						href="/driverdashboard/trips"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaCar className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Trips</span>
						)}
					</Link>

					{/* Request Funds */}
					<Link
						href="/driverdashboard/request-funds"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaExchangeAlt className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Request Funds</span>
						)}
					</Link>

					{/* BlockRide DAO with "Coming Soon" Badge */}
					<Link
						href="/dashboard/dao"
						className="flex items-center justify-between p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<div className="flex items-center space-x-4">
							<FaUserTie className="text-2xl" />
							{isSidebarOpen && (
								<span className="text-lg font-medium">BlockRide DAO</span>
							)}
						</div>
						{isSidebarOpen && (
							<span className="bg-orange-500 text-xs text-white px-2 py-1 rounded-full">
								Coming Soon
							</span>
						)}
					</Link>

					{/* Rewards */}
					<Link
						href="/dashboard/rewards"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaGift className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Rewards</span>
						)}
					</Link>

					{/* Access Other Profiles Header */}
					{isSidebarOpen && (
						<div className="text-sm text-gray-400 mt-6">
							Access Other Profiles
						</div>
					)}

					{/* User Profile */}
					<Link
						href="/dashboard"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaUser className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">User Profile</span>
						)}
					</Link>

					{/* Investor Profile */}
					<Link
						href="/investordashboard"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaUserTie className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Investor Profile</span>
						)}
					</Link>
				</nav>
			</div>

			{/* Bottom Section */}
			<div className="flex flex-col space-y-4 mt-auto">
				{/* Help */}
				<Link
					href="/dashboard/help"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaQuestionCircle className="text-2xl" />
					{isSidebarOpen && <span className="text-lg font-medium">Help</span>}
				</Link>

				{/* Settings */}
				<Link
					href="/dashboard/settings"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaCog className="text-2xl" />
					{isSidebarOpen && (
						<span className="text-lg font-medium">Settings</span>
					)}
				</Link>

				{/* Log Out */}
				<Link
					href="/dashboard/logout"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaSignOutAlt className="text-2xl" />
					{isSidebarOpen && (
						<span className="text-lg font-medium">Log Out</span>
					)}
				</Link>
			</div>

			{/* Toggle Button */}
			<button
				className="absolute top-4 right-4 text-orange-500"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? (
					<FaChevronLeft size={24} />
				) : (
					<FaChevronRight size={24} />
				)}
			</button>
		</motion.div>
	);
};

export default DriverSidebar;
