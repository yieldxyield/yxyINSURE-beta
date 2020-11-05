var yxyINSURE = artifacts.require("./yxyINSURE.sol");
var YxYi = artifacts.require("./YxYi.sol");

module.exports = async function (deployer) {
  await deployer.deploy(yxyINSURE);
  const dfip = await yxyINSURE.deployed();

  await deployer.deploy(YxYi, dfip.address, 0, false, 0);
  const YxYi = await YxYi.deployed();

  await dfip.approve(YxYi.address, "TBA");
};
