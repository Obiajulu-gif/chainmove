import { useActiveWallet } from "thirdweb/react";

export const LogoutButton = () => {
  const wallet = useActiveWallet();

  const handleDisconnect = async () => {
    try {
      if (wallet) {
        await wallet.disconnect();
        console.log("Successfully disconnected");
      }
    } catch (error) {
      console.error("Error disconnecting:", error);
    }
  };
  return (
    <button
      onClick={handleDisconnect}
      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 ease-in-out">
      <span>Disconnect</span>
    </button>
  );
};
