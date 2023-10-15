const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Muc NFT tests", function() {
  let Muc, muc;
  // Random mocked address
  const checksummedAddress = ethers.getAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36");

  before(async function() {
    Muc = await ethers.getContractFactory("Muc");
    muc = await Muc.deploy();
    await muc.waitForDeployment();
  });

  it("Should mint a new token", async function() {
    const transactionResponse = await muc.mintNFT(checksummedAddress, "local.host/my-uri");
    const transactionReceipt = await transactionResponse.wait();
    expect(transactionReceipt).to.emit(muc, 'TokenMinted').withArgs(1);
  });

  it("Should assign ownership of the minted token", async function() {
    const owner = await muc.ownerOf(1);
    expect(owner).to.equal(checksummedAddress);
  });

  it("Should set the token URI of the minted token", async function() {
    const tokenURI = await muc.tokenURI(1);
    expect(tokenURI).to.equal("local.host/my-uri");
  });
});
