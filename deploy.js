async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const ItemNFT = await ethers.getContractFactory("ItemNFT");
    const itemNFT = await ItemNFT.deploy("StoreItem", "STI");
  
    console.log("ItemNFT deployed to:", itemNFT.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  