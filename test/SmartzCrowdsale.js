'use strict';

const Token = artifacts.require("SmartzToken.sol");
const Crowdsale = artifacts.require("SmartzCrowdsale.sol");

contract('SmartzCrowdsale', async (accounts) => {
  
  it("should works", async () => {
  	let token = await Token.new({from: accounts[0]})

    let instance = await Crowdsale.new(
    		accounts[3],
    		token.address,
    		{from: accounts[0]}
    	)

    await token.transferOwnership(instance.address)

    await instance.sendTransaction({from: accounts[5], value: 100})
    assert.equal(100000, await token.balanceOf(accounts[5]))
  })

})

