const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mucc NFT", function() {
  it("Should mint a new token", async function() {
    const Muccoin = await ethers.getContractFactory("Mucc");
    const muccoin = await Muccoin.deploy();
    await muccoin.waitForDeployment();

    // Random mocked address
    const checksummedAddress = ethers.getAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36");    

    const transactionResponse = await muccoin.mintNFT(checksummedAddress, "local.host/my-uri");
    const transactionReceipt = await transactionResponse.wait();
    expect(transactionReceipt).to.emit(muccoin, 'TokenMinted').withArgs(1);

    const owner = await muccoin.ownerOf(1);
    expect(owner).to.equal(checksummedAddress);

    const tokenURI = await muccoin.tokenURI(1);
    expect(tokenURI).to.equal("local.host/my-uri");
  });
});
