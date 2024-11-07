// components/dashboard/Sidebar.js
"use client";
import {
  FaChartBar,
  FaCar,
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

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarVariants = {
    open: { width: "16rem", transition: { duration: 0.5 } },
    closed: { width: "4rem", transition: { duration: 0.5 } },
  };

  const links = [
    { href: "/dashboard", icon: <FaChartBar />, label: "Overview" },
    { href: "/dashboard/book", icon: <FaCar />, label: "Book A Trip" },
    {
      href: "/dashboard/dispatch",
      icon: <FaExchangeAlt />,
      label: "Dispatcher",
      badge: "Coming Soon",
    },
    {
      href: "/dashboard/dao",
      icon: <FaUserTie />,
      label: "BlockRide DAO",
      badge: "Coming Soon",
    },
    { href: "/dashboard/rewards", icon: <FaGift />, label: "Rewards" },
  ];

  const profileLinks = [
    { href: "/driverdashboard", icon: <FaIdCard />, label: "Driver Profile" },
    { href: "/investordashboard", icon: <FaUserTie />, label: "Investor Profile" },
  ];

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
        <nav className="mt-8 space-y-4">
          {links.map(({ href, icon, label, badge }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{icon}</span>
                {isSidebarOpen && <span className="text-lg font-medium">{label}</span>}
              </div>
              {isSidebarOpen && badge && (
                <span className="bg-orange-500 text-xs text-white px-2 py-1 rounded-full">
                  {badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        {isSidebarOpen && (
          <motion.div
            className="text-sm text-gray-400 mt-6 pt-4 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Access Other Profiles
          </motion.div>
        )}

        {/* Profile Links */}
        <nav className="mt-4 space-y-4">
          {profileLinks.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span className="text-2xl">{icon}</span>
              {isSidebarOpen && <span className="text-lg font-medium">{label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4 mt-auto">
        <Link
          href="/dashboard/help"
          className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FaQuestionCircle className="text-2xl" />
          {isSidebarOpen && <span className="text-lg font-medium">Help</span>}
        </Link>
        <Link
          href="/dashboard/settings"
          className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FaCog className="text-2xl" />
          {isSidebarOpen && <span className="text-lg font-medium">Settings</span>}
        </Link>
        <Link
          href="/dashboard/logout"
          className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FaSignOutAlt className="text-2xl" />
          {isSidebarOpen && <span className="text-lg font-medium">Log Out</span>}
        </Link>
      </div>

      {/* Toggle Button */}
      <button
        className="absolute top-4 right-4 text-orange-500"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
      </button>
    </motion.div>
  );
};

export default Sidebar;
