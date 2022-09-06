// SPDX-License-Identifier: GPL-3.0

//Dployed at: 0xa6Acea5812E9f7A82B588C447E55c5B9eC81bAdF

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Events {

    uint256 public number;
    string public name;

    event numberStored(uint indexed _newNumStored);
    event nameAndNumberStored(string _name, uint _newNumStored);
    event onlyNameStored(string _name);

    function store(uint256 _num, string memory _name) public {
        number = _num;
        name = _name;
        emit numberStored(number);
        emit nameAndNumberStored(name, number);
    }

    function storeOnlyName(string memory _name) public {
        name = _name;
        emit onlyNameStored(name);
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}