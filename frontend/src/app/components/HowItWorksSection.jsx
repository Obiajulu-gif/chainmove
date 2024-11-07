"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";

const HowItWorksSection = () => {
	return (
		<section
			className="relative py-20 px-8 bg-cover bg-center bg-blend-overlay"
			style={{
				backgroundImage:
					"linear-gradient(to bottom right, #1F2937, #111827), url(/images/bg.png)",
			}}
		>
			<div className="relative container mx-auto text-center z-10">
				{/* Section Header */}
				<motion.div
					className="w-full md:w-2/3 text-center mx-auto mb-12"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center space-x-2 px-3 py-1 border border-white/50 rounded-full text-white text-sm md:text-base font-medium tracking-wide bg-transparent backdrop-blur-lg">
						<FaBriefcase className="text-orange-500" />
						<span>How It Works</span>
					</div>
					<h2 className="text-white text-3xl md:text-4xl font-semibold mt-4">
						Simple Steps To Seamless Travel.
					</h2>
				</motion.div>

				{/* Steps Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Step 1 */}
					<motion.div
						className="bg-black bg-opacity-50 rounded-lg p-6 text-left"
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="bg-gray-700 w-full h-40 rounded mb-4 flex items-center justify-center">
							<Image
								src="/images/p1.png"
								alt="Step 1 Icon"
								width={400}
								height={100}
								className="animate-pulse"
							/>
						</div>
						<h3 className="text-white text-lg font-semibold mb-2">
							Step 1: Join the Community
						</h3>
						<p className="text-gray-300 text-sm">
							Sign up easily and connect your wallet to start exploring.
						</p>
					</motion.div>

					{/* Step 2 */}
					<motion.div
						className="bg-black bg-opacity-50 rounded-lg p-6 text-left"
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className="bg-gray-700 w-full h-40 rounded mb-4 flex items-center justify-center">
							<Image
								src="/images/p2.png"
								alt="Step 2 Icon"
								width={400}
								height={100}
								className="animate-pulse"
							/>
						</div>
						<h3 className="text-white text-lg font-semibold mb-2">
							Step 2: List Your Vehicle or Book a Ride
						</h3>
						<p className="text-gray-300 text-sm">
							Car owners can list their vehicles for rental, while riders can
							browse available options or book shared trips.
						</p>
					</motion.div>

					{/* Step 3 */}
					<motion.div
						className="bg-black bg-opacity-50 rounded-lg p-6 text-left"
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="bg-gray-700 w-full h-40 rounded mb-4 flex items-center justify-center">
							<Image
								src="/images/p3.png"
								alt="Step 3 Icon"
								width={400}
								height={100}
								className="animate-pulse"
							/>
						</div>
						<h3 className="text-white text-lg font-semibold mb-2">
							Step 3: Enjoy Secure Transactions
						</h3>
						<p className="text-gray-300 text-sm">
							Smart contracts handle payments and bookings, ensuring
							transparency and trust.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
