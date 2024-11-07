// components/dashboard/WalletInfo.js
import React from "react";
import { FaEyeSlash } from "react-icons/fa";

const WalletInfo = () => {
	return (
		<div className="flex space-x-4">
			<div className="bg-gray-800 p-4 rounded-lg flex-1 flex items-center justify-between">
				<div>
					<p className="text-gray-400 text-sm">Wallet Balance</p>
					<h3 className="text-white text-xl font-semibold">$2,330.00</h3>
				</div>
				<FaEyeSlash className="text-gray-500" />
			</div>
			<div className="bg-gray-800 p-4 rounded-lg flex-1 flex items-center justify-between">
				<div>
					<p className="text-gray-400 text-sm">Total Trips</p>
					<h3 className="text-white text-xl font-semibold">52</h3>
				</div>
				<FaEyeSlash className="text-gray-500" />
			</div>
		</div>
	);
};

export default WalletInfo;
