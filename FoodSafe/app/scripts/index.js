// Import the page's CSS. Webpack will know what to do with it.
import '../styles/app.css'

// Import libraries we need.
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import metaCoinArtifact from '../../build/contracts/MetaCoin.json'
import foodSafeArtifact from '../../build/contracts/FoodSafe.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
const MetaCoin = contract(metaCoinArtifact)
const FoodSafe = contract(foodSafeArtifact)


// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts
let account
var foodSafeABI;
var foodsafeContract;
var foodSafeBinaryCode;
var foodSafeCompiled;

const App = {
  start: function () {
    const self = this

    // Bootstrap the MetaCoin abstraction for Use.
    //MetaCoin.setProvider(web3.currentProvider)
    FoodSafe.setProvider(web3.currentProvider)

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        alert('There was an error fetching your accounts.')
        return
      }

      if (accs.length === 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }

      accounts = accs
      account = accounts[0]

      web3.eth.defaultAccount = account; //setup accout

      var foodSafeSource = "pragma solidity ^0.4.24;  contract FoodSafe {     struct Location      {          uint LocationId;         string Name;         uint PreviousLocationId;         uint Timestamp; // timestamp of the block mining          string Secret;             }      mapping(uint => Location) Trail;     uint8 TrailCount = 0;          function AddNewLocation(uint locationId, string name, string secret) public     {         Location memory newLocation;          newLocation.LocationId = locationId;         newLocation.Name = name;         newLocation.Secret = secret;         newLocation.Timestamp = block.timestamp;           if(TrailCount != 0)         {             newLocation.PreviousLocationId = Trail[TrailCount].LocationId;         }         // add          Trail[TrailCount] = newLocation;             TrailCount++;      }      function GetTrailCount() public view returns(uint8) {         return TrailCount;     }      function GetLocation(uint8 trailNumber) public view returns(string, uint, uint)     {         return (Trail[trailNumber].Name, Trail[trailNumber].LocationId, Trail[trailNumber].PreviousLocationId);     } }";
     
      web3.eth.compile.solidity(foodSafeSource, function(error, foodSafeCompiled){
            foodSafeABI - foodSafeCompiled['<stdin>:FoodSafe'].info.abiDefinition;
            foodsafeContract = web3.eth.contract(foodSafeABI);
            foodSafeBinaryCode = foodSafeCompiled['<stdin>:FoodSafe'].code;
        });
    })
  },
  // upload contract to the blockchain 
  createContract: function(){
    foodsafeContract.new("", {from: account, data:foodSafeCode, gas:3000000}, function(error, deployedContract){
        if(deployedContract.address){
          document.getElementById("contractAddress").value = deployedContract.address;
        }
    });
  }

    /*

  setStatus: function (message) {
    const status = document.getElementById('status')
    status.innerHTML = message
  },


  refreshBalance: function () {
    const self = this

    let meta
    MetaCoin.deployed().then(function (instance) {
      meta = instance
      return meta.getBalance.call(account, { from: account })
    }).then(function (value) {
      const balanceElement = document.getElementById('balance')
      balanceElement.innerHTML = value.valueOf()
    }).catch(function (e) {
      console.log(e)
      self.setStatus('Error getting balance; see log.')
    })
  },
 

  sendCoin: function () {
    const self = this

    const amount = parseInt(document.getElementById('amount').value)
    const receiver = document.getElementById('receiver').value

    this.setStatus('Initiating transaction... (please wait)')

    let meta
    MetaCoin.deployed().then(function (instance) {
      meta = instance
      return meta.sendCoin(receiver, amount, { from: account })
    }).then(function () {
      self.setStatus('Transaction complete!')
      self.refreshBalance()
    }).catch(function (e) {
      console.log(e)
      self.setStatus('Error sending coin; see log.')
    })
  }
  */
}
 

window.App = App

window.addEventListener('load', function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn(
      'Using web3 detected from external source.' +
      ' If you find that your accounts don\'t appear or you have 0 MetaCoin,' +
      ' ensure you\'ve configured that source properly.' +
      ' If using MetaMask, see the following link.' +
      ' Feel free to delete this warning. :)' +
      ' http://truffleframework.com/tutorials/truffle-and-metamask'
    )
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider)
  } else {
    console.warn(
      'No web3 detected. Falling back to http://127.0.0.1:9545.' +
      ' You should remove this fallback when you deploy live, as it\'s inherently insecure.' +
      ' Consider switching to Metamask for development.' +
      ' More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
    )
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545'))
  }

  App.start()
})
