import bcrypt from 'bcryptjs'

import { findByEmail, save } from '../repositories/user.repository.js'

export async function registerService(email, password) {
    if (!email || !password) {
        throw new Error('VALIDATION')
    }

    if (findByEmail(email)) {
        throw new Error('USER_EXISTS')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    return save({email, passwordHash})
}