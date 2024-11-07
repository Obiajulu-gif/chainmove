"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const JoinCommunitySection = () => {
	return (
		<section
			className="relative py-8 px-4 flex justify-center bg-cover bg-center bg-blend-overlay text-white"
			style={{
				backgroundImage:
					"linear-gradient(to bottom right, #1F2937, #111827), url(/images/bg.png)", // Ensure bg.png is in the public/images directory
			}}
		>
			<motion.div
				className="relative w-full max-w-4xl rounded-lg overflow-hidden flex flex-col md:flex-row bg-black bg-opacity-70 backdrop-blur-lg"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				{/* Text and Button Section */}
				<motion.div
					className="flex-1 p-8 md:p-12 flex flex-col justify-center text-left"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 text-xl md:text-2xl font-semibold mb-4">
						Come work with our amazing team as we make wealth accessible to both
						the current and upcoming generations.
					</h2>
					<motion.button
						onClick={() =>
							window.open(
								"https://x.com/BlockRide__1?t=gQMAlmOnQoeGgXShmJ6Wfw&s=09",
								"_blank"
							)
						}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="mt-4 bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300"
					>
						Join Community
					</motion.button>
				</motion.div>

			
				<motion.div
					className="flex-1 relative"
					initial={{ scale: 1.1 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<Image
						src="/images/community.png" // Replace with the actual path to your image
						alt="Community"
						layout="fill"
						objectFit="cover"
						className="opacity-80"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default JoinCommunitySection;
