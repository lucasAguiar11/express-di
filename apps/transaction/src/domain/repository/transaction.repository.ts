import { TransactionEntity } from "../entities/transaction.entity";

export interface ITransactionRepository {
  saveAsync(transaction: TransactionEntity): Promise<TransactionEntity>
}
