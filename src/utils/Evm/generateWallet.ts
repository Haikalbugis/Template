import { Wallet } from "ethers";

export async function generate() {
  return Wallet.createRandom();
}
