// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// Inherits from the ERC-721 standard
contract Muccoin is ERC721URIStorage {
    uint256 private _tokenIds;

    // Called once the contract is deployed
    constructor() ERC721("Muccoin", "MUC") {}

    event TokenMinted(uint256 tokenId);

    function mintToken(address recipient, string memory tokenURI) public {
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _mint(recipient, newItemId); // creates a new token and assigns its ownership
        _setTokenURI(newItemId, tokenURI); // associates new token with its original metadata

        emit TokenMinted(newItemId);
        // In ethers.js, contract method calls return a transaction response,
        // not the return value of the function
    }
}
