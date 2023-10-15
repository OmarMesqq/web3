// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// Inherits from the ERC-721 standard 
contract Muccoin is ERC721URIStorage {
    uint256 private _tokenIds;

    // Called once the contract is deployed
    constructor() ERC721("Muccoin", "MUC") {}

    // * @param recipient: address (20 bytes) of the recipient of the token
    // * @param tokenURI: is stored only during the execution of the function in temporary storage
    function mintToken(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds++;  // ensures that each token has a unique ID

        uint256 newItemId = _tokenIds;
        _mint(recipient, newItemId);  // creates a new token and assigns its ownership
        _setTokenURI(newItemId, tokenURI);  // associates new token with its original metadata

        return newItemId;
    }
}
