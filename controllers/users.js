const uuid = require('uuid')
const crypto = require('./crypto.js')
const userDataBase = {
    '0001': {
        'password': '',
        'salt': '',
        'userName': ''
    }
};




//guardar nuestro usuario en la base de datos
const registerUser = (userName, password) => {
    crypto.hashPassword(password, (err, result) => {
        userDataBase[uuid.v4()] = {
            userName: userName,
            password: result
        }
    })

}

//Comprobar que las credenciales son correctas
const checkUserCredentials = (userId, password, done) => {
    let user = userDataBase[userId]
    crypto.comparePassword(password, user.password, (err, result) => {
        return result
    })
}