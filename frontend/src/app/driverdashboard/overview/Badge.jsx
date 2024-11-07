// components/dashboard/BadgeAndTasks.js
import React from "react";
import Image from "next/image";

const Badge = () => {
	const tasks = [
		{
			title: "Invite 9 People To The Platform",
			progress: 54,
			points: "6 People Invited Only",
		},
		{ title: "Complete 1000km", progress: 64, points: "320km covered only" },
		{
			title: "Spend over $200 in Fare",
			progress: 34,
			points: "Only $50 Spent",
		},
	];

	return (
		<div className="bg-gray-800 p-6 rounded-lg text-white">
			{/* Badge Section */}
			<div className="flex flex-col items-center mb-6">
				<Image src="/images/b1.png" alt="Badge" width={164} height={164} />
				<p className="mt-4 text-lg font-semibold">Newbie</p>
				<div className="flex justify-between w-full mt-2">
					<p className="text-gray-400 text-sm">3 Tasks Left</p>
					<p className="text-white text-sm font-semibold">64%</p>
				</div>
				<div className="bg-gray-700 rounded-full h-2 w-full mt-2">
					<div className="bg-purple-600 h-2 rounded-full w-2/3"></div>
				</div>
				<div className="mt-4 w-full">
					<p className="text-gray-400 text-sm">Next Level</p>
					<p className="text-purple-500 text-sm font-semibold">Traveller</p>
				</div>
			</div>

			{/* Task List Section */}
			<div>
				{tasks.map((task, index) => (
					<div key={index} className="mb-4">
						<div className="flex justify-between">
							<p className="text-sm">{task.title}</p>
							<p className="text-sm">{task.progress}%</p>
						</div>
						<p className="text-gray-500 text-xs mb-2">{task.points}</p>
						<div className="bg-gray-700 rounded-full h-2">
							<div
								className="bg-purple-600 h-2 rounded-full"
								style={{ width: `${task.progress}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Badge;
