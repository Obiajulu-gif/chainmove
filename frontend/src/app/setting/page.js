// components/dashboard/Settings.js
"use client";
import React from "react";

const Settings = () => {
	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			<h2 className="text-3xl font-bold mb-6">Settings</h2>
			<p className="text-gray-400 mb-6">
				Here you can manage your account settings, privacy preferences, and
				more.
			</p>

			<div className="space-y-6">
				{/* Profile Settings */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Profile Settings</h3>
					<div className="bg-gray-800 p-4 rounded-lg">
						<label className="block text-gray-300 mb-2">Username</label>
						<input
							type="text"
							className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
							placeholder="Enter your username"
						/>
					</div>
				</div>

				{/* Email Notifications */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Email Notifications</h3>
					<div className="bg-gray-800 p-4 rounded-lg">
						<label className="block text-gray-300 mb-2">
							Receive marketing emails
						</label>
						<input type="checkbox" className="mr-2" />
						<span className="text-gray-400">Yes, send me updates</span>
					</div>
				</div>

				{/* Security Settings */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Security Settings</h3>
					<div className="bg-gray-800 p-4 rounded-lg">
						<button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
							Change Password
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
