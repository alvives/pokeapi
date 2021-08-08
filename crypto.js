const bcrypt = require('bcrypt')

//Esta funcion nos encripta las contraseñas
const hashPassword = (plainTextPwd, done) => {
    bcrypt.hash(plainTextPwd, 10, done)
}

const comparePassword = (plainPassword, hashPassword, done) => {
    bcrypt.compare(plainPassword, hashPassword, done) 
}