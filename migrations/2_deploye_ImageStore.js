var ImageStore = artifacts.require("./ImageStore.sol");

module.exports = function(deployer) {
  deployer.deploy(ImageStore);
};
