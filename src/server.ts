import 'reflect-metadata'
import '@/infrastructure/dy'
import express from 'express'

import route from './infrastructure/routes/transaction.route'

const app = express()
app.use(express.json())

app.use('/api', route)

app.listen(3333, () => 'server running on port 3333')
