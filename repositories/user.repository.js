const users = []

export function findByEmail(email) {
    return users.find(u => u.email == email)
}

export function save(user) {
    users.push()
    return user
}