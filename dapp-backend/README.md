### Deploy instructions:

1 - Install dependencies:

```bash
npm i
```

2 - Compile the contract: 
```bash
npx hardhat compile
```

3 - In a different terminal, start a local Ethereum network: 
```bash
npx ganache-cli
```

4 - Test the contract: 
```bash
npx hardhat test --network localhost
```

5 - Deploy the contract to the local network: 
```bash
npx hardhat run scripts/deploy.js --network localhost
```



### References:

- [Intro to Smart Contracts - Solidity Lang](https://docs.soliditylang.org/en/v0.8.21/introduction-to-smart-contracts.html)

- [Contracts - OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/)

- [Fungible Tokens (Ethereum) - ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)

- [NFTs (Ethereum) - ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)
