const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying contract...");
  const contractFactory = await ethers.getContractFactory("DataFeeds");
  const contract = await contractFactory.deploy();

  await contract.waitForDeployment();

  const contractAddress = contract.target;

  console.log("DataFeeds contract address:", contractAddress);
  console.log("Contract deployed.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
