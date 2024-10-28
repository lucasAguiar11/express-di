import { inject, injectable } from 'tsyringe'
import { ReturnBaseDTO } from '../dtos/base/return-base.dto'
import { CreateTransactionDto } from '../dtos/transaction/create-transaction.dto'
import { TransactionDto } from '../dtos/transaction/transaction.dto'
import { UseCase } from './use-case.interface'
import { ITransactionRepository } from '@/domain/repository/transaction.repository'
import { TransactionEntity } from '@/domain/entities/transaction.entity'

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
