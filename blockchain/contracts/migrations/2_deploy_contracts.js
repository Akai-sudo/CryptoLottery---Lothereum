const Lottery = artifacts.require("./NewLottery.sol");

module.exports = function(deployer) {
  deployer.deploy(Lottery);
};