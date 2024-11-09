// pages/investordashboard/settings.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBell, FaLock, FaSave, FaUser } from "react-icons/fa";

// pages/investordashboard/settings.js

const InvestorSettingsPage = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: true,
    displayName: "Investor123",
    email: "investor@example.com",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveSettings = () => {
    console.log("Settings saved:", settings);
    // Implement save logic here, e.g., API call
  };

  return (
    <div className="bg-gray-800 min-h-screen p-6 text-white">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-orange-500">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences.</p>
      </motion.div>

      <div className="space-y-8">
        {/* Account Information Section */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-4">
            <FaUser className="text-orange-500" />
            <span>Account Information</span>
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400">Display Name</label>
              <input
                type="text"
                name="displayName"
                value={settings.displayName}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-400">Email Address</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 mt-1"
              />
            </div>
          </div>
        </motion.div>

        {/* Notification Settings Section */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-4">
            <FaBell className="text-orange-500" />
            <span>Notification Settings</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-400">Email Notifications</label>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleInputChange}
                className="h-5 w-5 accent-orange-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-400">Push Notifications</label>
              <input
                type="checkbox"
                name="pushNotifications"
                checked={settings.pushNotifications}
                onChange={handleInputChange}
                className="h-5 w-5 accent-orange-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Security Settings Section */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-4">
            <FaLock className="text-orange-500" />
            <span>Security Settings</span>
          </h2>
          <div className="flex items-center justify-between">
            <label className="text-gray-400">Two-Factor Authentication</label>
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleInputChange}
              className="h-5 w-5 accent-orange-500"
            />
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          className="text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <button
            onClick={handleSaveSettings}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300 flex items-center space-x-2">
            <FaSave />
            <span>Save Settings</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorSettingsPage;
