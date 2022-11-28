// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  //Adress du print du fichier deploy.js
  const tiketEvent = await TiketEvent.attach("0x561e2154386d785B2D60445Fa03f626B53b3E459");
//ADDRESS = mon adress public du wallet

  await tiketEvent.mintNFT("0x70107D8405247bFa644655e04633ee9A686eA859", "https://gateway.pinata.cloud/ipfs/QmaqTkqpWVyZkCbWr95AK2G4wypecbqDD1krmt1zuV7d3N");
  console.log(
    ` deployed to ${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});