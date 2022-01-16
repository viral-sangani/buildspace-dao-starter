import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x644f2bE39e2261E2730ef661222bD60763A5e479");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "PizzaDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "PIZZA",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
