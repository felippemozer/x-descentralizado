require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    staging: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YoV6A1KNKtIJ9OCj0JW9FoUjCYk2mA6X",
      accounts: [process.env.ACCOUNT_PK]
    }
  }
};
