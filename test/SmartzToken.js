'use strict';

const SmartzToken = artifacts.require("SmartzToken.sol");

contract('SmartzToken', async (accounts) => {
  
  it("should works", async () => {
    let instance = await SmartzToken.new({from: accounts[0]})

    instance.mint(accounts[1], 100, {from: accounts[0]})
    assert.equal(100, await instance.balanceOf(accounts[1]))

    instance.transfer(accounts[2], 50, {from: accounts[1]})
    assert.equal(50, await instance.balanceOf(accounts[1]))
    assert.equal(50, await instance.balanceOf(accounts[2]))

    instance.burn(50, {from: accounts[1]})
    assert.equal(0, await instance.balanceOf(accounts[1]))

    assert.equal(50, await instance.totalSupply())
  })

})

