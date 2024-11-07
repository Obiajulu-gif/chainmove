// components/dashboard/Sidebar.js
"use client";
import {
	FaChartBar,
	FaExchangeAlt,
	FaGift,
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

const InvestorSidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	// Sidebar animation variants for framer-motion
	const sidebarVariants = {
		open: { width: "16rem", transition: { duration: 0.5 } },
		closed: { width: "5rem", transition: { duration: 0.5 } },
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
					<motion.h2
						className="text-3xl font-bold text-orange-500"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						{isSidebarOpen && "Blockride"}
					</motion.h2>
				</Link>

				{/* Main Navigation */}
				<nav className="mt-8 flex flex-col space-y-4">
					<Link
						href="/investordashboard/overview"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaChartBar className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Overview</span>
						)}
					</Link>

					<Link
						href="/investordashboard/investments"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaExchangeAlt className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Investments</span>
						)}
					</Link>

					<Link
						href="/dashboard/fund-a-driver"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaExchangeAlt className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Fund A Driver</span>
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

					<Link
						href="/dashboard/rewards"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaGift className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Rewards</span>
						)}
					</Link>

					{/* Other Profiles Section */}
					{isSidebarOpen && (
						<motion.div
							className="text-sm text-gray-400 mt-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							Access Other Profiles
						</motion.div>
					)}

					<Link
						href="/driverdashboard"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaIdCard className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">Driver Profile</span>
						)}
					</Link>

					<Link
						href="/dashboard"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaUserTie className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-lg font-medium">User Profile</span>
						)}
					</Link>
				</nav>
			</div>

			{/* Bottom Section */}
			<div className="flex flex-col space-y-4 mt-auto">
				<Link
					href="/dashboard/help"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaQuestionCircle className="text-2xl" />
					{isSidebarOpen && <span className="text-lg font-medium">Help</span>}
				</Link>
				<Link
					href="/dashboard/settings"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaCog className="text-2xl" />
					{isSidebarOpen && (
						<span className="text-lg font-medium">Settings</span>
					)}
				</Link>
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

export default InvestorSidebar;
