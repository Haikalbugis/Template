import { Wallet } from "ethers";

export class Evm {
  wallet: Wallet;

  constructor(privateKey: string) {
    this.wallet = new Wallet(privateKey);
  }

  async signMessage(message: string) {
    return await this.wallet.signMessage(message);
  }
}
