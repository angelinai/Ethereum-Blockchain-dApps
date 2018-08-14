# Ethereum Solidity Examples

This is a very basic intro repo with solidity contracts. It's intended to be a display for educational purpose only.

## Ethereum Solidity Demo Examples

### Deploy via Truffle

 ``` > truffle compile ```

 ``` > truffle migrate ```
  
   if you hve more than one destination defined in your deploy specs, look at truffle.js for network configs. Speciry the network name 

  ```  > truffle migrate --network development ```

  Truffle Config file   ```  truffle.js   ```
----
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
