import { TransactionEntity } from '@/domain/entities/transaction.entity'
import { ITransactionRepository } from '@/domain/repository/transaction.repository'

export class PrismaTransactionRepository implements ITransactionRepository {
  async saveAsync(transaction: TransactionEntity): Promise<TransactionEntity> {
    console.log('PrismaTransactionRepository -> transaction', transaction)
    return transaction
  }
}
