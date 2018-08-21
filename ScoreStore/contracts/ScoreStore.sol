pragma solidity ^0.4.24;

contract ScoreStore 
{
    // mash table
    mapping (string => int) PersonScores;

    function AddPersonScore(string name, int startingScore) public 
    {
        if(PersonScores[name] > 0){
            revert("Person's score is > 0.");
        }else{
            PersonScores[name] = startingScore;
        }
    }
    
    function GetScore(string name) public view returns(int)  {
        return PersonScores[name];
    }
}