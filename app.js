import express from 'express'
import router from './routes/user.routes.js'

// crear aplicacion de express
const app = express()

app.use(express.json()) // acceder a los datos de req.body
app.use('/api/v1', router) // rutas que usan el endpoint /api/v1

export default app