pragma solidity ^0.4.24;

import "./ERC721BasicToken.sol";

//Our Own Token, inherits from ERC721BasicToken
contract CryptoMonsters is ERC721BasicToken
{
    struct Monster {
        string name;
        uint level;
        uint attachPower;
        uint defensePower;        
    }

    // array of monsters, keep track of all born mosters
    Monster[] public monsters; // you can use mapping, array used for simplicity
    address public owner; // moster master / owner

    
    // CONSTRUCTOR - keep track of owner and owner address in constructor
   /* constructor() public {
       owner = msg.sender;
    } */
    function CryptoMonsters() public {  // use it as function for now, TBD change to constructor()
        owner = msg.sender;
    }
 
   /**
   * @dev Create new monster, with name _monsterName and address owner _ownerToAddress
   * @param _monsterName string - The name of the monster
   * @param _ownerToAddress address - The address of the monster owner
   */
    function createMonster(string _monsterName, address _ownerToAddress) public 
    {  
        // pre-checks
        require(owner == msg.sender,"Owner of the game can only create monsters.");

        uint mosterId = monsters.legth;
        monsters.push(Monster(_monsterName, 1, 100, 100));

        // create new monster
        _mint(_ownerToAddress, mosterId);
    } 
 
     /**
   * @dev Monsters battle, moster 1 battles monster 2
   * NOTE: onlyOwnerOf spec - only the owner of teh onlyOwnerOf specified can control the monster and make it battle
   * @param _monsterId monster 1   
   * @param _targetMonsterId monster 2
   */
    function battle(uint _monsterId, uint _targetMonsterId) public onlyOwnerOf(_monsterId) {
        Monster storage monster1 = monsters[_monsterId];
        Monster storage monster2 = monsters[_targetMonsterId];

        if(monster1.attachPower >= monster2.defensePower ){
            monster1.legth += 1; // level up, monster 1 wins the battle
            monster1.attachPower += 10;
        }
        else
        {
            monster2.legth += 1; // level up, monster 2 wins the battle
            monster2.defensePower += 10;
        }
    }
}

 