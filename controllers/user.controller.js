import { registerService } from '../services/user.service.js'

// logica de controlador encargada de recibir los datos enviados por el cliente para realizar el registro
export async function register(req, res) {
    try {
        const user = await registerService(
            req.body.email,
            req.body.password
        )

        res.status(201).json(user)
    } catch (error) {
        if (error.message == 'USER_EXISTS') {
            return res.status(409).json({error: 'User already exists'})
        }

        return res.status(400).json({error: 'Invalid data'})
    }
}