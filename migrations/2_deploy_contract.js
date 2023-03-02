var Crowdfund = artifacts.require("Crowdfund");
module.exports = function(deployer) {
  deployer.deploy(Crowdfund, "0x571dF6CbCAF5A64DDe1862D90689f2D503565Bf0");
};