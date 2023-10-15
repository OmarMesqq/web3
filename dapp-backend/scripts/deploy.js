// Create hardhat runtime environment
const hre = require("hardhat");

async function main() {
  // Get, deploy and wait for Muccoin contract to be deployed
  const Muccoin = await hre.ethers.getContractFactory("Muccoin");
  const muccoin = await Muccoin.deploy();
  await muccoin.waitForDeployment();
  console.log("Muccoin deployed to:", muccoin.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
