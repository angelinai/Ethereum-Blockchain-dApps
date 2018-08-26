# Ethereum Solidity Examples

This is a very basic intro repo with solidity contracts. It's intended to be a display for educational purpose only.
I've used Truffle for project templated, truffle is also the general tool used for compiling.
 
## Projects Outline

## ERC721 Non-Fungible Token Project

### Crypto Monsters Blockchain Game
----
ERC721 solidity contract token implementaion.
Simple solidity game on the blockchain. Create
Crypto Monsters much like an over simplified version of 
Crypto Kitties.
Create Monster > give it level attack power, defense power and make it battle other monster that you've created. 


## FoodSafe Project 

End to end sample distributed application (dapp) running on the Ethereum blockchain.

Tech: Web3.js, Ethereum, Solidity, Truffle, Metamask, Webpack. 

  Goals

  Interact with Ethereum

  Utilize Truffle Client

  Interact Web3.js
      > Make RPC calls on our behalf

  Utilize the power of Metamask
      > All interaction with accounts yeasy to do
      > All plumbing for authentication is done easily
      

  Utilize Webpack
      > Take all assets through the webpack module bundler

## HelloWorld Project

Basic hello world solidity contract implementaion.

## Deployment
---

### Deploy via Truffle

 ``` > truffle compile ```

 ``` > truffle migrate ```
  
   if you hve more than one destination defined in your deploy specs, look at truffle.js for network configs. Speciry the network name 

  ```  > truffle migrate --network development ```

## Configuration
----
### Truffle Config file   ```  truffle.js   ```
Add your local, testnet, mainnet configs here.
```
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost", // local testRPC host
      port: 8545, // local testRPC port
      network_id: "*" // Match any network id
    }
  },
   networks: {
    staging: {
      host: "xxx", // Ehtereum RPC endpoint - no http or https, just host 
      port: 1111, //  Ehtereum RPC port
      network_id: "*" // Match any network id
    }
  }
};
```
Truffle Console
Interract with your contract via Truffle Console

```
PS <...>\Ethereum-Solidity\FoodSafe> truffle console

truffle(development)> var fs
undefined

truffle(development)> FoodSafe.deployed().then(function(deployed){fs=deployed;});
undefined

PS C:\Users\Angelina\Desktop\GIT\Ethereum-Solidity\FoodSafe> truffle console

truffle(development)> var fs
undefined

truffle(development)> FoodSafe.deployed().then(function(deployed){fs=deployed;});
undefined

truffle(development)> fs.AddNewLocation(123456, "The Store","sdsd");
{ tx: '0x29dd21908fdc3321699fe077494b136a8b92025061439ab979870fda92a6e5ca',
  receipt:
   { transactionHash: '0x29dd21908fdc3321699fe077494b136a8b92025061439ab979870fda92a6e5ca',
     transactionIndex: 0,
     blockHash: '0xb8152b6a92f7dcae61d766bba8713bcf297258c83f1f8eb2dfafb5fe23ad3226',
     blockNumber: 7,
     gasUsed: 117140,
     cumulativeGasUsed: 117140,
     contractAddress: null,
     logs: [],
     status: 1 },
  logs: [] }
  
truffle(development)> truffle(development)> fs.GetLocation(0);
[ 'The Supplier',
  BigNumber { s: 1, e: 5, c: [ 123456 ] },
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]
  ```