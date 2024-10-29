import 'reflect-metadata'
import '@/infrastructure/di'
import express from 'express'

import route from './infrastructure/routes/transaction.route'

const app = express()
app.use(express.json())

app.use('/api', route)

app.listen(3333, () => console.log('🚀 server running on port 3333'))
