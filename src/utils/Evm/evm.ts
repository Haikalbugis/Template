import { ethers, Wallet } from "ethers";

export class Evm {
  wallet: Wallet;

  constructor(privateKey: string) {
    this.wallet = new Wallet(privateKey);
  }

  async signMessage(message: string) {
    return await this.wallet.signMessage(message);
  }

  async getAddressFromPrivateKey() {
    return this.wallet.address;
  }

  async getBalance(address: string, rpc: string) {
    const provider = new ethers.JsonRpcProvider(rpc);

    const balance = await provider.getBalance(address);

    return ethers.formatEther(balance);
  }
}
