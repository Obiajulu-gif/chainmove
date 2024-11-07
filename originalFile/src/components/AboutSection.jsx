"use client";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
	return (
		<section className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-20 relative overflow-hidden">
			{/* Background Image with parallax effect */}
			<motion.div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{
					backgroundImage:
						"linear-gradient(to bottom right, #1F2937, #111827), url('/images/bg.png')",
				}}
				initial={{ y: -50 }}
				animate={{ y: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>

			<div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:space-x-5 z-10">
				{/* Left Icon with spin effect */}
				<motion.div
					className="flex justify-center md:justify-start w-full md:w-1/3 mb-6 md:mb-0"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<Image
						src="/images/Vector.png"
						alt="Blockchain icon"
						width={200}
						height={200}
						className="opacity-80 animate-spin" // Adding slower spin effect
					/>
				</motion.div>

				{/* Text Content with improved readability */}
				<div className="w-full md:w-2/3 text-center md:text-left">
					{/* Icon with "About Us" Text */}
					<motion.div
						className="inline-flex items-center space-x-2 px-3 py-1 border border-white/50 rounded-full text-white text-sm md:text-base font-medium tracking-wide bg-transparent backdrop-blur-lg mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<FaBriefcase className="text-orange-500" />
						<span>About Us</span>
					</motion.div>

					<motion.h2
						className="text-white text-3xl md:text-4xl font-semibold mb-4 leading-snug"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						Driving Innovation In Mobility.
					</motion.h2>

					<motion.h3
						className="text-orange-500 text-2xl md:text-2xl font-semibold mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						What is Blockride?
					</motion.h3>

					<motion.p
						className="text-gray-300 leading-relaxed text-lg md:text-xl font-light"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.4 }}
					>
						Blockride is a decentralized car rental and ride-sharing platform
						designed to bring trust, transparency, and flexibility to how you
						move. Built on the Lisk blockchain, Blockride connects car owners
						with riders and renters through a secure, smart contract-based
						environment, eliminating intermediaries and cutting down on fees.
					</motion.p>

					<motion.p
						className="text-gray-300 mt-6 leading-relaxed text-lg md:text-xl font-light"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.5 }}
					>
						With Blockride, you can book a ride, rent a car for a few hours or
						days, or even share trips with friends for more convenient and
						eco-friendly travel.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
