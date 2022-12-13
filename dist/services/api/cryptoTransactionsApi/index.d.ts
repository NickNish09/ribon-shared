import { AxiosResponse } from "axios";
import { TransactionStatus } from "types/enums/TransactionStatus";
declare const cryptoTransactionApi: {
    postTransaction: (transactionHash: string, amount: string, walletAddress: string, integrationId: string | number) => Promise<AxiosResponse<any>>;
    putTransactionStatus: (transactionHash: string, status: TransactionStatus) => Promise<AxiosResponse<any>>;
};
export default cryptoTransactionApi;
