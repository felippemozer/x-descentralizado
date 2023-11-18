const main = async () => {
  const xPost = await hre.ethers.deployContract("XPost");
  await xPost.waitForDeployment();
  console.log("Deploy do contrato no endereço: ", xPost.target);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();