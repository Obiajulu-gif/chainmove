"use client";
import Image from "next/image";
import { FaGoogle, FaTwitter, FaUserAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { liskSepolia } from "src/liskSepolia";
import { client } from "src/client";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { LogoutButton } from "../components/Logout";

const LoginPage = () => {
	const router = useRouter();

	// State to hold form input values
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [walletAddress, setWalletAddress] = useState("");
	const [error, setError] = useState(""); // State for error messages
	const account = useActiveAccount();

	const { data: balance, isLoading: loadBalance } = useWalletBalance({
		client,
		chain: liskSepolia,
		address: account?.address,
	});

	useEffect(() => {
		if (account?.address) {
			console.log("Connected wallet address:", account.address);
			setWalletAddress(account.address);
		}
	}, [account]);

	const handleRegister = () => {
		// Ensure all fields are filled
		if (!fullName || !username || !email || !walletAddress) {
			setError("All fields are required!");
			return;
		}

		// Reset error if fields are valid
		setError("");

		console.log("Registration Data:", {
			fullName,
			username,
			email,
			walletAddress,
		});

		// Navigate to the dashboard route
		router.push("/dashboard");
	};

	return (
		<div className="flex min-h-screen bg-gray-900">
			{/* Left Side - Image with Overlay Card */}
			<div className="relative w-1/2 hidden lg:block">
				<Image
					src="/images/login.png"
					alt="Become a Driver"
					fill
					style={{ objectFit: "cover" }}
					className="opacity-90"
				/>
				<div className="absolute bottom-10 left-10 bg-black bg-opacity-60 text-white p-6 rounded-lg max-w-xs">
					<h3 className="text-lg font-semibold flex items-center">
						<span className="bg-orange-500 rounded-full p-2 mr-2"></span>
						Become a Driver
					</h3>
					<p className="text-sm mt-2">
						Easily share rides and split costs with friends through secure,
						smart contract transactions, making group travel affordable and
						eco-friendly.
					</p>
				</div>
			</div>

			{/* Right Side - Registration Form */}
			<div className="flex w-full lg:w-1/2 items-center justify-center p-10">
				<div className="max-w-md w-full space-y-6">
					<h2 className="text-2xl font-bold text-white">
						Login with your email
					</h2>
					<p className="text-gray-400"> Login to begin your journey</p>

					{/* Error Message */}
					{error && <div className="text-red-500">{error}</div>}

					{/* Registration Form */}
					<div className="space-y-4">
						
						<div className="relative">
							<FaEnvelope className="absolute left-3 top-3 text-gray-400" />
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
							/>
						</div>

						<div className="relative">
							{!account ? (
								<ConnectButton
									client={client}
									chain={liskSepolia}
									connectButton={{
										label: "Connect Wallet",
										style: {
											width: "100%",
											backgroundColor: "#F97316",
											color: "white",
											borderRadius: "0.375rem",
											padding: "0.75rem",
											transition: "background-color 0.3s",
										},
									}}
									wallets={[
										createWallet("io.metamask"),
										createWallet("com.coinbase.wallet"),
										createWallet("me.rainbow"),
									]}
									onConnect={() => {
										console.log("Connected successfully");
									}}
									onDisconnect={({ account }) => {
										console.log("Disconnected", account.address);
									}}
									connectModal={{
										showThirdwebBranding: false,
									}}
									signInButton={{
										className:
											"w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300",
									}}
								/>
							) : (
								<div className="flex items-center space-x-4">
									<div className="text-white px-4 py-2 bg-gray-800 rounded-lg">
										{`${account.address.slice(0, 4)}...${account.address.slice(
											-4
										)}`}
										connected
									</div>
									<LogoutButton />
								</div>
							)}
						</div>

						{/* Proceed Button */}
						{account && (
							<button
								onClick={handleRegister} // Call handleRegister on click
								className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300"
							>
								Proceed
							</button>
						)}
					</div>

					{/* Divider */}
					<div className="flex items-center space-x-2 text-gray-400">
						<hr className="w-full border-gray-600" />
						<span>Or</span>
						<hr className="w-full border-gray-600" />
					</div>

					<p className="text-center text-gray-400">
						Already have an account?{" "}
						<Link href="/register" className="text-orange-500 hover:underline">
							Register here
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
