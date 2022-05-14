const { ethers, upgrades } = require("hardhat");

  async function main() {
    // simple deploy
    const PublicNFT = await ethers.getContractFactory("PublicNFT");
    const pub = await PublicNFT.deploy();
    await pub.deployed();
    console.log("PublicNFT Contract Address:", pub.address); 
  }
    
  main();