"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	// States for each statistic
	const [ridesCompleted, setRidesCompleted] = useState(0);
	const [carsListed, setCarsListed] = useState(0);
	const [totalUsers, setTotalUsers] = useState(0);
	const [satisfiedUsers, setSatisfiedUsers] = useState(0);
	const [text, setText] = useState("");
	const fullText = "  Blockchain-Powered,";

	// For the typewriter effect
	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			if (index < fullText.length - 1) {
				setText((prev) => prev + fullText[index]);
				index++;
			} else {
				clearInterval(interval);
			}
		}, 200);
		return () => clearInterval(interval);
	}, [fullText]);

	// useEffect for counter effect
	useEffect(() => {
		const incrementValue = (endValue, setValue, duration) => {
			let start = 0;
			const step = Math.ceil((endValue / duration) * 10);

			const counter = setInterval(() => {
				start += step;
				if (start >= endValue) {
					setValue(endValue);
					clearInterval(counter);
				} else {
					setValue(start);
				}
			}, 10);
		};

		// Initialize counters with desired end values
		incrementValue(1250, setRidesCompleted, 2500); // Rides Completed
		incrementValue(150, setCarsListed, 2000); // Cars Listed
		incrementValue(560, setTotalUsers, 2000); // Total Users
		incrementValue(98, setSatisfiedUsers, 2000); // Satisfied Users
	}, []);

	return (
		<section
			className="relative w-full h-screen bg-cover bg-center flex items-center"
			style={{ backgroundImage: "url(/images/Hero.png)" }}
		>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 md:opacity-70"></div>

			{/* Content */}
			<div className="relative container mx-auto px-6 flex flex-col justify-center items-start h-full">
				<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
					<span className="text-orange-500">{text}</span>
					<br /> Transportation.
				</h1>
				<p className="text-white text-lg sm:text-xl md:text-2xl max-w-md mb-6">
					Redefining Trust and efficiency.
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
			<Link href="/register" passHref>
				<button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300 w-full sm:w-auto">
					Book A Trip
				</button>
			</Link>
			<Link href="/register" passHref>
				<button className="bg-transparent border border-gray-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:text-black transition duration-300 w-full sm:w-auto">
					Rent A Car
				</button>
			</Link>
		</div>
			</div>

			{/* Stats Section */}
			<div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-6">
				<div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-white">
					<div className="flex flex-col items-center">
						<h3 className="text-xl md:text-2xl font-semibold text-orange-500">
							{ridesCompleted}+
						</h3>
						<p className="text-xs sm:text-sm">Rides Completed</p>
					</div>
					<div className="flex flex-col items-center">
						<h3 className="text-xl md:text-2xl font-semibold text-orange-500">
							{carsListed}+
						</h3>
						<p className="text-xs sm:text-sm">Cars Listed</p>
					</div>
					<div className="flex flex-col items-center">
						<h3 className="text-xl md:text-2xl font-semibold text-orange-500">
							{totalUsers}+
						</h3>
						<p className="text-xs sm:text-sm">Total Users</p>
					</div>
					<div className="flex flex-col items-center">
						<h3 className="text-xl md:text-2xl font-semibold text-orange-500">
							{satisfiedUsers}%
						</h3>
						<p className="text-xs sm:text-sm">Satisfied Users</p>
					</div>
					<div className="flex flex-col items-center">
						<h3 className="text-xl md:text-2xl font-semibold text-orange-500">
							$200k+
						</h3>
						<p className="text-xs sm:text-sm">Transactions</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
