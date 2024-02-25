// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DataFeeds {
    // interface
    AggregatorV3Interface public dataFeed;

    // constructor
    constructor() {
        dataFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    }

    // get latest rounded value
    function getLatestAnswer() public view returns(int) {
        (, int answer, , ,) = dataFeed.latestRoundData();
        return answer;
    }    
}