"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define a sample team members list
const teamMembers = [
	{
		name: "Okoye Emmanuel Obiajulu",
		title: "Project Lead / FullStack Developer",
		bio: "A seasoned developer with a passion for blockchain technology and creating seamless user experiences.",
		image: "/images/emmanuel.jpeg", // Replace with the actual image path
	},
	{
		name: "Victoria Nwogu",
		title: "Project Manager",
		bio: "Ensuring smooth workflows and efficient project execution with a focus on collaboration and innovation.",
		image: "/images/vee.jpeg", // Replace with the actual image path
	},
	{
		name: "David Emulo",
		title: "UI/UX Designer",
		bio: "Crafting user-friendly interfaces with a focus on aesthetics and functionality.",
		image: "/images/david.jpeg", // Replace with the actual image path
	},
	{
		name: "Olebuezie Chibuzor Damian",
		title: "Smart Contract Developer",
		bio: "Bringing secure and efficient smart contracts to life, specializing in blockchain technology.",
		image: "/images/damian.jpeg", // Replace with the actual image path
	},
];

const AboutSection = () => {
	return (
		<section className="bg-gray-900 text-white py-16 px-8">
			<motion.div
				className="text-center mb-12"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold">About BlockRide</h2>
				<p className="text-gray-400 mt-4 max-w-2xl mx-auto">
					BlockRide is a revolutionary blockchain-powered platform designed to
					bring transparency and security to mobility services. Built with
					Next.js and Lisk Blockchain, BlockRide connects drivers, riders, and
					investors in a decentralized, trustworthy environment.
				</p>
			</motion.div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{teamMembers.map((member, index) => (
					<motion.div
						key={index}
						className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
						whileHover={{ scale: 1.05 }}
					>
						<Image
							src={member.image}
							alt={member.name}
							width={100}
							height={100}
							className="object-cover w-full h-full rounded-full"
						/>
						<h3 className="text-xl font-semibold mt-4">{member.name}</h3>
						<p className="text-orange-500">{member.title}</p>
						<p className="text-gray-400 mt-2 text-center">{member.bio}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default AboutSection;
