pragma solidity ^0.4.24;

import "./ERC721BasicToken.sol";
 
/**
* @dev CryptoMonsters Token, inherits from ERC721BasicToken
*/
contract CryptoMonsters is ERC721BasicToken
{
    /**
    * @dev Monster class
    */
    struct Monster {
        string name;
        uint level;
        uint attackPower;
        uint defensePower;        
    }

    // array of monsters, keep track of all born mosters
    Monster[] public monsters; // you can use mapping, array used for simplicity
    address public owner; // moster owner
  
    /**
    * @dev Constructor
    * keep track of owner and owner address in constructor
    */
    constructor() public {
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

        uint mosterId = monsters.length;
        // create with default level/attackPower/defensePower
        monsters.push(Monster(_monsterName, 1, 100, 100)); 

        // create new monster
        _mint(_ownerToAddress, mosterId);
    } 
 
   /**
   * @dev Monsters battle, moster 1 battles monster 2 
   * @param _monsterId monster 1   
   * @param _targetMonsterId monster 2
   */
    function battle(uint _monsterId, uint256 _targetMonsterId) public 
    {  
        Monster storage monster1 = monsters[_monsterId];
        Monster storage monster2 = monsters[_targetMonsterId];
        if(monster1.attackPower >= monster2.defensePower)
        {
            monster1.level += 1; // level up, monster 1 wins the battle
            monster1.attackPower += 10;
        }
        else
        {
            monster2.level += 1; // level up, monster 2 wins the battle
            monster2.defensePower += 10;
        }
    }    
}

 