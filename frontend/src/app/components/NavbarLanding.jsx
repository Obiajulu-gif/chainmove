"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarLanding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSign = () => {
    setIsLoading(true);
    setIsOpen(false); // Close the menu on navigation
    router.push("/onboard");

    // Reset isLoading after a short delay to simulate completion
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  };

  const navigateToHome = () => {
    router.push("/"); // Navigate to the landing page
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 fixed w-full z-20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Name - Wrap in a div with onClick for navigation */}
        <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
          <Image
            src="/images/blockridelogo.svg"
            alt="ChainMove Logo"
            width={40}
            height={40}
            className="mr-2 animate-pulse"
          />
          <span className="text-white text-xl font-semibold">
            Chain<span className="text-orange-500">Move</span>
          </span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/">Home</Link>
          <Link href="https://www.notion.so/12f385cd77cc8041a9fefc57981d5ea8?pvs=4">About Us</Link>
          <Link href="/about">Contact Us</Link>
        </div>

        {/* Start a Journey Button */}
        <button
          onClick={navigateToSign}
          className={`hidden animate-bounce md:block px-4 py-2 rounded-lg text-white transition duration-300 ease-in-out ${
            isLoading
              ? "bg-gray-500 cursor-wait animate-pulse" // Loading state styles
              : "bg-orange-500 hover:bg-orange-600" // Normal styles
          }`}
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? "Starting..." : "Start a journey"}
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
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
            className="block px-4 py-2">
            About Us
          </Link>
          <Link href="/about" onClick={toggleMenu} className="block px-4 py-2">
            Contact Us
          </Link>
          <button
            onClick={navigateToSign}
            className="w-full bg-orange-500 text-white px-4 py-2 mt-2 rounded-lg">
            Start a journey
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarLanding;
