"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CoreFeaturesSection = () => {
	return (
		<section
			className="relative py-16 px-8 bg-cover bg-center bg-blend-overlay"
			style={{
				backgroundImage:
					"linear-gradient(to bottom right,#1F2937, #111827), url(/images/bg.png)",
			}}
		>
			<div className="container mx-auto text-center">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="w-full md:w-2/3 text-center mx-auto mb-12"
				>
					<div className="inline-flex items-center space-x-2 px-3 py-1 border border-white/50 rounded-full text-white text-sm md:text-base font-medium tracking-wide bg-transparent backdrop-blur-lg">
						<span>💼 Core Features</span>
					</div>
					<h2 className="text-white text-3xl md:text-4xl font-semibold mt-4">
						Empowering Your Travel Experience.
					</h2>
				</motion.div>

				{/* Features and Image Section */}
				<div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					{/* Feature Card - Ride Sharing */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="bg-black bg-opacity-50 rounded-lg p-8 max-w-xs mx-auto md:mx-0 md:col-start-1 md:col-span-1 text-left"
					>
						<h3 className="text-white text-xl font-semibold mb-2">
							Ride Sharing
						</h3>
						<p className="text-gray-300 text-sm">
							Easily share rides and split costs with friends through secure,
							smart contract transactions, making group travel affordable and
							eco-friendly.
						</p>
					</motion.div>

					{/* Car Image with Overlay Text - Centered */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="relative mx-auto md:col-start-2 md:col-span-1"
					>
						<Image
							src="/images/car.png" // Ensure this path is correct and the image is in public/images
							alt="Car"
							width={600}
							height={400}
							className="max-w-full h-auto"
						/>
					</motion.div>

					{/* Feature Card - Investor Car Rentals */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="bg-black bg-opacity-50 rounded-lg p-8 max-w-xs mx-auto md:mx-0 md:col-start-3 md:col-span-1 text-left"
					>
						<h3 className="text-white text-xl font-semibold mb-2">
							Investor Car Rentals
						</h3>
						<p className="text-gray-300 text-sm">
							Investors can earn passive income by listing their cars for rent
							on Blockride, with all payments and terms securely managed
							on-chain.
						</p>
					</motion.div>

					{/* Feature Card - Book a Trip - Positioned below the car image */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="bg-black bg-opacity-50 rounded-lg p-8 max-w-xs mx-auto md:mx-0 md:col-start-2 md:col-span-1 text-left mt-6"
					>
						<h3 className="text-white text-xl font-semibold mb-2">
							Book a Trip
						</h3>
						<p className="text-gray-300 text-sm">
							Quickly book a ride or rent a vehicle for any occasion with
							transparent, trustless transactions powered by blockchain.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CoreFeaturesSection;
