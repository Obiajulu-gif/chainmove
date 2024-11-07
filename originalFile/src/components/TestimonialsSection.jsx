"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
	return (
		<section className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-16 relative overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{ backgroundImage: "url('/images/bg.png')" }}
			/>

			{/* Background Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/60 to-gray-900/30 opacity-90"></div>

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
						<FaQuoteLeft className="text-orange-500" />
						<span>Testimonials</span>
					</div>
					<h2 className="text-white text-3xl md:text-4xl font-semibold mt-4">
						User Shared Insight
					</h2>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Testimonial 1 */}
					<motion.div
						className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center text-center hover:bg-opacity-70 transition duration-300"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.05 }}
					>
						<FaQuoteLeft className="text-white text-3xl mb-4" />
						<p className="text-gray-300 mb-6">
							Blockride is incredibly reliable. I can top up my phone, pay
							bills, and save money effortlessly.
						</p>
						<div className="flex items-center space-x-4">
							<Image
								src="/images/av1.png"
								alt="User 1"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<div className="text-left">
								<p className="text-white font-semibold">Okoye Emmanuel</p>
								<p className="text-gray-400 text-sm">Business Owner</p>
							</div>
						</div>
					</motion.div>

					{/* Testimonial 2 */}
					<motion.div
						className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center text-center hover:bg-opacity-70 transition duration-300"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.05 }}
					>
						<FaQuoteLeft className="text-white text-3xl mb-4" />
						<p className="text-gray-300 mb-6">
							Blockride is incredibly reliable. I can top up my phone, pay
							bills, and save money effortlessly.
						</p>
						<div className="flex items-center space-x-4">
							<Image
								src="/images/av1.png"
								alt="User 2"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<div className="text-left">
								<p className="text-white font-semibold">David Emulo</p>
								<p className="text-gray-400 text-sm">CEO Swift</p>
							</div>
						</div>
					</motion.div>

					{/* Testimonial 3 */}
					<motion.div
						className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center text-center hover:bg-opacity-70 transition duration-300"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.05 }}
					>
						<FaQuoteLeft className="text-white text-3xl mb-4" />
						<p className="text-gray-300 mb-6">
							Blockride is incredibly reliable. I can top up my phone, pay
							bills, and save money effortlessly.
						</p>
						<div className="flex items-center space-x-4">
							<Image
								src="/images/av1.png"
								alt="User 3"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<div className="text-left">
								<p className="text-white font-semibold">Victoria Nwogu</p>
								<p className="text-gray-400 text-sm">Business Owner</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
