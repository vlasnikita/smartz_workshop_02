pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

contract SmartzToken is StandardToken, MintableToken, BurnableToken {
	
	string public name = 'Smartz Token';
	string public symbol = 'SMRT';
	uint8 public decimals = 18;


}