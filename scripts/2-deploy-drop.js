import { ethers } from "ethers";
import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x644f2bE39e2261E2730ef661222bD60763A5e479");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "PizzaDAO Membership",
      // A description for the collection.
      description: "A DAO for Pizza Lovers.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/pizza.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
