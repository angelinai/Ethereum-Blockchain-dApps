pragma solidity ^0.4.24;

contract FoodSafe
{
    struct Location 
    { 
        uint LocationId;
        string Name;
        uint PreviousLocationId;
        uint Timestamp; // timestamp of the block mining 
        string Secret;        
    }

    mapping(uint => Location) Trail;
    uint8 TrailCount = 0;
    
    function AddNewLocation(uint locationId, string name, string secret) public
    {
        Location memory newLocation;

        newLocation.LocationId = locationId;
        newLocation.Name = name;
        newLocation.Secret = secret;
        newLocation.Timestamp = block.timestamp; 

        if(TrailCount != 0)
        {
            newLocation.PreviousLocationId = Trail[TrailCount].LocationId;
        }
        // add 
        Trail[TrailCount] = newLocation;    
        TrailCount++; 
    }

    function GetTrailCount() public view returns(uint8) {
        return TrailCount;
    }

    function GetLocation(uint8 trailNumber) public view returns(string, uint, uint)
    {
        return (Trail[trailNumber].Name, Trail[trailNumber].LocationId, Trail[trailNumber].PreviousLocationId);
    }
}