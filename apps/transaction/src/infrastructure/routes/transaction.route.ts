import { CreateTransactionUseCase } from '@/application/use-cases/create-transaction.use-case'
import { Router } from 'express'
import { container } from 'tsyringe'

const route: Router = Router()

const useCase = container.resolve(CreateTransactionUseCase)

route.get('/transaction', async (req, res) => {
  const response = await useCase.execute({ amount: 10 })
  res.json({ message: 'Transaction route', response })
})

export default route
