import { TransactionStatus } from "types/enums/TransactionStatus";
declare function useCryptoTransaction(): {
    createTransaction: (transactionHash: string, amount: string, walletAddress: string, integrationId: string | number) => Promise<any>;
    updateTransactionStatus: (transactionHash: string, status: TransactionStatus) => Promise<any>;
};
export default useCryptoTransaction;
