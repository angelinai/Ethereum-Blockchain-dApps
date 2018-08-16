### ERC721 tokens
Dapp using Ethereum network utilizing ERC721 non fungible tokens
 
## Useage Templates

OPEN ZEPPELIN - openzeppelin.org

## Open Zeppelin on Github
https://github.com/OpenZeppelin/openzeppelin-solidity

 Use Open Zeppelin's template for ERC721 contracts

https://github.com/OpenZeppelin/openzeppelin-solidity/tree/master/contracts/token/ERC721

### ERC721 tokens contract interface details
 ### Events - Used to transfer owndership and approvals
   
## ERC721Basic.sol template overview
https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721Basic.sol
    - event Transfer - transfer owndership
    - event Approval  - autorize someone to act on your behalf
    - event ApprovalForAll - autorize someone to act on your behalf
 ### Functions

 #### Ownership and balance

    - function balanceOf - what is the balance of particular account
    - function ownerOf  - who is the owner of a particular token(each token has an id that is used to query)

#### Approvals 
    - function approve - approve certain address and token 
    - function getApproved - returns whoever is the currently approved entity/person for specific token
    - function setApprovalForAll - give authority to someone to acct as an autorized entity to pproval for all of your tokens to someone
    - function isApprovedForAll - check if an entity has autority over all of 'your'/ set of tokens you own 
    
#### Transfers 
    - function transferFrom
    - safeTransferFrom