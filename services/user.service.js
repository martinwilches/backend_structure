import bcrypt from 'bcryptjs'

import { findByEmail, save } from '../repositories/user.repository.js'

export async function registerService(email, password) {
    // validacion de datos enviados por el cliente
    if (!email || !password) {
        throw new Error('VALIDATION')
    }

    // busqueda del usuario ya registrado a traves de su email
    if (findByEmail(email)) {
        throw new Error('USER_EXISTS')
    }

    // encriptacion de la contraseña
    const passwordHash = await bcrypt.hash(password, 10)

    // registro de usuario
    return save({email, passwordHash})
}