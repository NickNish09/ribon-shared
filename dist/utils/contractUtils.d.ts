import { Contract } from "@ethersproject/contracts";
import { Signer } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
export declare function isAddress(value: string): string | false;
export declare function getContract(address: string, ABI: any, signerOrProvider: Signer | Provider): Contract;
export declare function balanceOf(address: string): Promise<import("ethers").BigNumber | null>;
