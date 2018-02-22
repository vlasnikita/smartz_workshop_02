var SmartzToken = artifacts.require("./SmartzToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SmartzToken);
};
