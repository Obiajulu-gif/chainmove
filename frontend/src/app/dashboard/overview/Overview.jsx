"use client";
import BadgeAndTasks from "./BadgeAndTasks";
import WalletInfo from "./WalletInfo";
import VideoTutorial from "./VideoTutorial";
import TripHistory from "./TripHistory";

const CANISTER_ID = process.env.NEXT_PUBLIC_CANISTER_ID || "rdmx6-jaaaa-aaaaa-aaadq-cai";

const Overview = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-semibold mb-4">Welcome, David</h1>
      <div
        className="grid gap-6"
        style={{
          gridTemplateAreas: `
						"badge wallet wallet"
						"badge video video"
						"badge history history"
					`,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}>
        <div style={{ gridArea: "badge" }}>
          <BadgeAndTasks />
        </div>
        <div style={{ gridArea: "wallet" }}>
          <WalletInfo />
        </div>
        <div style={{ gridArea: "video" }}>
          <VideoTutorial />
        </div>
        <div style={{ gridArea: "history" }}>
          <TripHistory />
        </div>
      </div>
    </div>
  );
};

export default Overview;