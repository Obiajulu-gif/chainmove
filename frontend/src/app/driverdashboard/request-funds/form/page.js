// components/FundingForm.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";


const FundingForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
	const router = useRouter();

	const handleSubmitProposal = () => {
		// Show the modal after submitting the proposal
		setIsModalOpen(true);
	};

	const handleContinue = () => {
		// Close the modal and navigate to the specified route
		setIsModalOpen(false);
		router.push("/driverdashboard/request-funds/requestprofile");
	};

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-semibold">Request Funds</h1>
				<button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
					View Marketplace
				</button>
			</div>

			<div className="bg-gray-800 rounded-lg p-6 shadow-lg">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div>
						<label className="block text-gray-400">Full Name</label>
						<input
							type="text"
							placeholder="Enter name"
							className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2"
						/>
					</div>
					<div>
						<label className="block text-gray-400">Phone Number</label>
						<input
							type="text"
							placeholder="XXXXXXXXXX"
							className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2"
						/>
					</div>
					<div>
						<label className="block text-gray-400">Wallet Address</label>
						<input
							type="text"
							placeholder="Paste wallet address here"
							className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2"
						/>
					</div>
					<div>
						<label className="block text-gray-400">Driver ID</label>
						<input
							type="text"
							placeholder="XXXXXXXXXX"
							className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2"
						/>
					</div>
				</div>

				{/* Request Details Section */}
				<div className="mb-6">
					<label className="block text-gray-400">Purpose of Funding</label>
					<select className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2">
						<option>Select vehicle repair/purchase</option>
					</select>
					<label className="block text-gray-400 mt-4">Amount(s)</label>
					<input
						type="text"
						placeholder="$ 0.00"
						className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2"
					/>
					<label className="block text-gray-400 mt-4">Description</label>
					<textarea
						placeholder="Provide details about the repair needed or the motorcycle model you plan to purchase."
						className="w-full bg-gray-700 p-3 rounded-lg text-white mt-2"
					/>
				</div>

				{/* Repayment Plan Section */}
				<div className="flex justify-around mb-6">
					<button className="text-white bg-gray-700 p-2 rounded-lg">
						4 Months
					</button>
					<button className="text-white bg-gray-700 p-2 rounded-lg">
						12 Months
					</button>
					<button className="text-white bg-gray-700 p-2 rounded-lg">
						24 Months
					</button>
				</div>

				{/* Attach Photo */}
				<div className="mb-6">
					<label className="block text-gray-400 mb-2">Attach Photo</label>
					<div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
						<button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full">
							Upload Photo
						</button>
					</div>
				</div>

				{/* Agreement Checkbox and Submit Button */}
				<div className="mb-6">
					<label className="inline-flex items-center">
						<input type="checkbox" className="form-checkbox bg-gray-700" />
						<span className="ml-2 text-gray-400">
							I agree that funds will be disbursed and tracked on-chain, and I
							will repay as per the chosen plan.
						</span>
					</label>
				</div>

				<button
					onClick={handleSubmitProposal}
					className="bg-orange-500 text-white font-semibold w-full py-3 rounded-full hover:bg-orange-600"
				>
					Submit Proposal
				</button>
			</div>
			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-gray-900 p-6 rounded-lg w-80 text-center relative">
						<button
							className="absolute top-2 right-2 text-gray-400 hover:text-white"
							onClick={() => setIsModalOpen(false)}
						>
							<FaTimes />
						</button>
						<h2 className="text-xl font-semibold mb-4">Proposal Sent</h2>
						<div className="bg-gray-800 rounded-lg p-4 mb-4 text-left">
							<p className="text-orange-500 font-semibold mb-2">
								● Your request has been successfully uploaded. Check back to see
								progress.
							</p>
						</div>
						<button
							onClick={handleContinue}
							className="bg-orange-500 text-white font-semibold w-full py-3 rounded-full hover:bg-orange-600"
						>
							Continue
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default FundingForm;
