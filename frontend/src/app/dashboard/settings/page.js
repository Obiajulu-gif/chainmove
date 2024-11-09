"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBell, FaLock, FaPalette, FaUser } from "react-icons/fa";

const SettingsPage = () => {
  const [form, setForm] = useState({
    username: "john_doe",
    email: "john@example.com",
    receiveEmails: true,
    darkMode: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveChanges = () => {
    alert("Settings saved successfully!");
    // Save settings to backend or local storage here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">Settings</h1>
        <p className="text-gray-300 mt-2">Manage your profile, preferences, and account security</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Profile Settings */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
            <FaUser className="mr-2" /> Profile Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Notification Preferences */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
            <FaBell className="mr-2" /> Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Receive Email Notifications</span>
              <input
                type="checkbox"
                name="receiveEmails"
                checked={form.receiveEmails}
                onChange={handleInputChange}
                className="form-checkbox h-6 w-6 text-orange-500"
              />
            </div>
            <p className="text-gray-400 text-sm">Toggle to receive email updates and notifications</p>
          </div>
        </motion.div>

        {/* Account Security */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
            <FaLock className="mr-2" /> Account Security
          </h2>
          <div className="space-y-4">
            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Change Password
            </button>
            <p className="text-gray-400 text-sm">Update your password to keep your account secure</p>
          </div>
        </motion.div>

        {/* Theme Settings */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
            <FaPalette className="mr-2" /> Theme Settings
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Dark Mode</span>
            <input
              type="checkbox"
              name="darkMode"
              checked={form.darkMode}
              onChange={handleInputChange}
              className="form-checkbox h-6 w-6 text-orange-500"
            />
          </div>
          <p className="text-gray-400 text-sm mt-2">Toggle to enable or disable dark mode</p>
        </motion.div>
      </div>

      {/* Save Changes Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleSaveChanges}
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
