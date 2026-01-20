const users = []

// logica para la busqueda de un usuario a traves de su email en el arreglo users
export function findByEmail(email) {
    return users.find(u => u.email == email)
}

// logica para guardar un usuario en el arreglo users
export function save(user) {
    users.push()
    return user
}