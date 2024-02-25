const { ethers } = require("hardhat");
require("dotenv").config();

const { DATA_FEEDS_CONTRACT_ADDRESS } = process.env;

async function main() {
  const contractFactory = await ethers.getContractFactory("DataFeeds");
  const contract = await contractFactory.attach(DATA_FEEDS_CONTRACT_ADDRESS);

  const res = await contract.getLatestAnswer();
  console.log("Latest answer:", res);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
