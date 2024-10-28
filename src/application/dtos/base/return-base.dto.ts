export class ReturnBaseDTO<T> {
  success: boolean
  message: string
  code?: string
  statusCode: number
  data?: T
}
