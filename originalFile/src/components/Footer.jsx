"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // State for dynamic year
  const [year, setYear] = useState(null);

  useEffect(() => {
    // Set the current year dynamically
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
		<footer className="bg-gray-900 text-white py-10 px-4">
			<motion.div
				className="container mx-auto max-w-5xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				{/* Top Section */}
				<div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
					{/* Logo Section */}
					<motion.div
						className="text-center md:text-left mb-4 md:mb-0"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.1 }}
					>
						<h2 className="text-2xl font-semibold">Blockride</h2>
						<hr className="border-gray-600 w-full mt-2" />
					</motion.div>

					{/* Navigation Links */}
					<motion.div
						className="flex space-x-8 text-sm"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<Link href="/" passHref>
							<span className="text-gray-400 hover:text-white transition duration-300">
								Home
							</span>
						</Link>
						<a
							href="https://www.notion.so/12f385cd77cc8041a9fefc57981d5ea8?pvs=4"
							className="text-gray-400 hover:text-white transition duration-300"
						>
							About Us
						</a>
						<a
							href="#contact"
							className="text-gray-400 hover:text-white transition duration-300"
						>
							Contact Us
						</a>
					</motion.div>

					{/* Social Media Icons */}
					<motion.div
						className="flex space-x-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						<a
							href="https://x.com/BlockRide__1?t=gQMAlmOnQoeGgXShmJ6Wfw&s=09"
							aria-label="Twitter"
							className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300"
						>
							<FaTwitter className="text-white" />
						</a>
						<a
							href="https://t.me/BLOCKRIDE__1"
							aria-label="Facebook"
							className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300"
						>
							<FaFacebookF className="text-white" />
						</a>
						<a
							href="https://x.com/BlockRide__1?t=gQMAlmOnQoeGgXShmJ6Wfw&s=09"
							aria-label="Instagram"
							className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300"
						>
							<FaInstagram className="text-white" />
						</a>
						<a
							href="https://t.me/BLOCKRIDE__1"
							aria-label="LinkedIn"
							className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300"
						>
							<FaLinkedinIn className="text-white" />
						</a>
					</motion.div>
				</div>

				{/* Divider */}
				<hr className="border-gray-600 mb-4" />

				{/* Bottom Section */}
				<motion.div
					className="text-center text-sm text-gray-400 space-y-2"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
				>
					<div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:justify-center items-center">
						{/* Legal Links */}
						<div className="flex flex-wrap justify-center space-x-3">
							<a href="#privacy" className="hover:text-white">
								Privacy Policy
							</a>
							<span>|</span>
							<a href="#terms" className="hover:text-white">
								Terms & Condition
							</a>
							<span>|</span>
							<a href="#cookie" className="hover:text-white">
								Cookie Notice
							</a>
							<span>|</span>
							<a href="#copyright" className="hover:text-white">
								Copyright Policy
							</a>
							<span>|</span>
							<a href="#data" className="hover:text-white">
								Data Policy
							</a>
						</div>
					</div>

					{/* Copyright Notice */}
					<p className="mt-4">&copy; {year} Blockride. All rights reserved.</p>
				</motion.div>
			</motion.div>
		</footer>
	);
};

export default Footer;
