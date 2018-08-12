/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost", // local testRPC host
      port: 8545, // local testRPC port
      network_id: "*" // Match any network id
    },
     // Plan for remote testing, enter credentials for remote testnet
     staging: {  // you call it whatever your hear's desire
      host: "xxx", // Ehtereum RPC endpoint- no http or https, just host
      port: 1111, //  Ehtereum RPC port
      network_id: "*" // Match any network id
    },
    // Plan for production, enter credentials for mainnet
    production: {
      host: "xxx", // Ehtereum RPC endpoint - no http or https, just host 
      port: 1111, //  Ehtereum RPC port
      network_id: "*" // Match any network id
    }
  }
};
