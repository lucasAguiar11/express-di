import { ITransactionRepository } from '@/domain/repository/transaction.repository'
import { container } from 'tsyringe'
import { PrismaTransactionRepository } from './persistence/repository/prisma-transaction.repository'

container.register<ITransactionRepository>(
  'TransactionRepository',
  PrismaTransactionRepository,
)
