// Create hardhat runtime environment
const hre = require("hardhat");

async function main() {
  // Get, deploy and wait for Muc contract to be deployed
  const Muc = await hre.ethers.getContractFactory("Muc");
  const muc = await Muc.deploy();
  await muc.waitForDeployment();
  console.log("Muccoin deployed to:", muc.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
