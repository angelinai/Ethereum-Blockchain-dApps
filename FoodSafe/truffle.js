// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: "localhost", // local testRPC host
      port: 8545, // local testRPC port
      network_id: "*" // Match any network id
    } 
  }
}
