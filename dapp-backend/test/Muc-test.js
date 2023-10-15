const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Muc NFT", function() {
  it("Should mint a new token", async function() {
    const Muc = await ethers.getContractFactory("Muc");
    const muc = await Muc.deploy();
    await muc.waitForDeployment();

    // Random mocked address
    const checksummedAddress = ethers.getAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36");    

    const transactionResponse = await muc.mintNFT(checksummedAddress, "local.host/my-uri");
    const transactionReceipt = await transactionResponse.wait();
    expect(transactionReceipt).to.emit(muc, 'TokenMinted').withArgs(1);

    const owner = await muc.ownerOf(1);
    expect(owner).to.equal(checksummedAddress);

    const tokenURI = await muc.tokenURI(1);
    expect(tokenURI).to.equal("local.host/my-uri");
  });
});
