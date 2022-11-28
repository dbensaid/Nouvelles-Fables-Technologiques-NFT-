require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/xPACxJYzW3ovyVZS_NMuOHO-BZaKcF2d",
      accounts:["85e8aea00a305122e8b56c2a08902f32c3ca5e742124302fe33db2bc7773663a"],
    },
  },
};