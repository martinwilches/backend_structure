import express from 'express'

import { register } from '../controllers/user.controller.js'

const router  = express.Router() // enrutador de express

router.post('/register', register) // peticion post ejecutada en la ruta /register

export default router