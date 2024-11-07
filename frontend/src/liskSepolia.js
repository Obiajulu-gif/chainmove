// liskSepolia.js
export const liskSepolia = {
  id: 4202, // Lisk Sepolia chain ID
  name: "Lisk Sepolia Testnet",
  rpc: "https://rpc.sepolia-api.lisk.com",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "Lisk Sepolia Explorer",
      url: "https://sepolia-blockscout.lisk.com",
      apiUrl: "https://sepolia-blockscout.lisk.com/api",
    },
  ],
  testnet: true,
  // Optional: Add icon if you have one
  // icon: {
  //   url: "path-to-icon",
  //   width: 32,
  //   height: 32,
  //   format: "png"
  // },
  // Optional: Add faucets if available
  // faucets: ["https://faucet.sepolia-api.lisk.com"]
};
