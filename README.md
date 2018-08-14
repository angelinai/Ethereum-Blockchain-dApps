# Ethereum Solidity Examples

This is a very basic intro repo with solidity contracts. It's intended to be a display for educational purpose only.
I've used Truffle for project templated, truffle is also the general tool used for compiling.
 
## Project Folders Outline
---
## HelloWorld folder
 Basic hello world implementaion.

## FoodSafe folder   

End to end sample app(dapp) with Ethereum.

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
