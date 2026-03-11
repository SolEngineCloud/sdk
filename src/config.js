module.exports = {
  network: process.env.NETWORK || "solana-mainnet",
  rewards: process.env.NODE_REWARD === "enabled"
}
