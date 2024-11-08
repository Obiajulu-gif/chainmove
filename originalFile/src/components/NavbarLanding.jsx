"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import for navigation
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarLanding = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter(); // Initialize router

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navigateToSign = () => {
		router.push("/register"); // Navigate to dashboard
		setIsOpen(false); // Close the menu on navigation
	};

	return (
		<nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 fixed w-full z-20">
			<div className="container mx-auto flex items-center justify-between">
				{/* Logo and Name */}
				<div className="flex items-center">
					<Image
						src="/images/blockridelogo.svg"
						alt="Blockride Logo"
						width={40}
						height={40}
						className="mr-2 animate-pulse"
					/>
					<span className="text-white text-xl font-semibold">Block <span className="text-orange-500">ride</span></span>
				</div>

				{/* Menu Links */}
				<div className="hidden md:flex space-x-8 text-white">
					<Link href="/">Home</Link>
					<Link href="https://www.notion.so/12f385cd77cc8041a9fefc57981d5ea8?pvs=4">
						About Us
					</Link>
					<Link href="/about">Contact Us</Link>
				</div>

				{/* Start a Journey Button */}
				<button
					onClick={navigateToSign}
					className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-lg animate-bounce"
				>
					Start a journey
				</button>

				{/* Hamburger Menu Icon */}
				<div
					className="md:hidden text-white cursor-pointer"
					onClick={toggleMenu}
				>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-gray-800 text-white">
					<Link href="/" onClick={toggleMenu} className="block px-4 py-2">
						Home
					</Link>
					<Link
						href="https://www.notion.so/12f385cd77cc8041a9fefc57981d5ea8?pvs=4"
						onClick={toggleMenu}
						className="block px-4 py-2"
					>
						About Us
					</Link>
					<Link href="/about" onClick={toggleMenu} className="block px-4 py-2">
						Contact Us
					</Link>
					<button
						onClick={navigateToSign}
						className="w-full bg-orange-500 text-white px-4 py-2 mt-2 rounded-lg"
					>
						Start a journey
					</button>
				</div>
			)}
		</nav>
	);
};

export default NavbarLanding;
