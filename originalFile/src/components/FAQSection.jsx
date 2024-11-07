"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
	// State to manage which FAQ is open
	const [openFAQ, setOpenFAQ] = useState(null);

	const toggleFAQ = (index) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};

	return (
		<section
			className="relative py-20 px-8 bg-cover bg-center bg-blend-overlay text-white"
			style={{
				backgroundImage:
					"linear-gradient(to bottom right, #1F2937, #111827), url(/images/bg.png)",
			}}
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{ backgroundImage: "url('/images/bg.png')" }}
			/>

			<div className="container mx-auto flex flex-col md:flex-row items-start md:items-center">
				{/* Left Side - Header */}
				<div className="w-full md:w-1/3 mb-8 md:mb-0">
					<div className="inline-flex items-center space-x-2 px-3 py-1 border border-white/50 rounded-full text-white text-sm md:text-base font-medium tracking-wide bg-transparent backdrop-blur-lg">
						<span>💼 FAQ</span>
					</div>
					<h2 className="text-3xl md:text-4xl font-semibold">
						Got Questions? <br /> We Have Answers!
					</h2>
				</div>

				{/* Right Side - FAQ List */}
				<div className="w-full md:w-2/3">
					<div className="space-y-4">
						{/* FAQ Items */}
						{[
							{
								question: "How does BlockRide ensure secure transactions?",
								answer:
									"BlockRide uses blockchain technology to provide secure and transparent transactions. All payments are managed through smart contracts, ensuring a secure environment for all users.",
							},
							{
								question: "Can anyone list their vehicle on BlockRide?",
								answer:
									"Yes, BlockRide allows verified users to list their vehicles for rental. Each listing goes through a quick verification process to ensure quality and safety.",
							},
							{
								question: "What are the benefits of ride-sharing?",
								answer:
									"Ride-sharing with BlockRide is cost-effective and eco-friendly, allowing you to share costs with other riders while reducing carbon emissions.",
							},
						].map((faq, index) => (
							<div
								key={index}
								className="border-b border-gray-700 pb-4 cursor-pointer"
							>
								<div
									className="flex justify-between items-center"
									onClick={() => toggleFAQ(index)}
								>
									<h3 className="text-lg font-medium">{faq.question}</h3>
									<div
										className={`text-orange-500 transform transition-transform duration-200 ${
											openFAQ === index ? "rotate-45" : ""
										}`}
									>
										<FaPlus />
									</div>
								</div>
								{openFAQ === index && (
									<div className="text-gray-400 mt-2">
										<p>{faq.answer}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
