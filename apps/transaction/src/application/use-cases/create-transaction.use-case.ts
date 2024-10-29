import { inject, injectable } from 'tsyringe'
import { ReturnBaseDTO } from '../dtos/base/return-base.dto'
import { CreateTransactionDto } from '../dtos/transaction/create-transaction.dto'
import { TransactionDto } from '../dtos/transaction/transaction.dto'
import { UseCase } from './use-case.interface'
import { ITransactionRepository } from '@/domain/repository/transaction.repository'
import { TransactionEntity } from '@/domain/entities/transaction.entity'
import { AES256CBC } from '@lib/encrypt'

@injectable()
export class CreateTransactionUseCase
  implements UseCase<CreateTransactionDto, ReturnBaseDTO<TransactionDto>>
{
  constructor(
    @inject('TransactionRepository')
    private repository: ITransactionRepository,
  ) {}

  async execute(
    request: CreateTransactionDto,
  ): Promise<ReturnBaseDTO<TransactionDto>> {
    console.log('CreateTransactionUseCase -> request', request)

    const transaction = await this.repository.saveAsync(
      new TransactionEntity(request),
    )

    console.log('CreateTransactionUseCase -> transaction', transaction)
    const aes = new AES256CBC('0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef')
    const encrypted = aes.encrypt(JSON.stringify(transaction))
    console.log('CreateTransactionUseCase -> encrypted', encrypted)

    return {
      success: true,
      statusCode: 201,
      message: 'Transaction created',
      data: {
        nsu: '123456',
      },
    }
  }
}
