"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBell, FaCog, FaLock, FaSave, FaUndo, FaUser } from "react-icons/fa";

const DriverSettingsPage = () => {
  // State to handle form inputs
  const [settings, setSettings] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    notifications: true,
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveSettings = () => {
    // Logic to save settings goes here
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  const handleResetSettings = () => {
    // Logic to reset settings to defaults or last saved state
    setSettings({
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 234 567 890",
      notifications: true,
      password: "",
      confirmPassword: "",
    });
    alert("Settings reset to defaults.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">Driver Settings</h1>
        <p className="text-gray-300 mt-2">Manage your account and preferences.</p>
      </motion.div>

      {/* Settings Sections */}
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Profile Settings */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaUser className="mr-2 text-orange-500" /> Profile Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={settings.fullName}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaBell className="mr-2 text-orange-500" /> Notification Settings
          </h2>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleInputChange}
              className="w-5 h-5"
            />
            <label className="text-gray-300">Enable Notifications</label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaLock className="mr-2 text-orange-500" /> Security Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">New Password</label>
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>

        {/* Save & Reset Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleResetSettings}
            className="flex items-center bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300">
            <FaUndo className="mr-2" />
            Reset
          </button>
          <button
            onClick={handleSaveSettings}
            className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-300">
            <FaSave className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverSettingsPage;
