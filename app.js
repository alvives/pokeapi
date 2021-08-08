const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const usersController = require('./controllers/users')
require('./auth')(passport)     //llamamos a la función de auth.js con el objeto importado passpor

const app = express()       //Definimos una variable que puede crear endpoints, hacer peticiones... usar http, con el constructor de express
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!').status(200)
}) 

app.listen(port, () => {
    console.log('Server started at port ' + port)
})
//la funcion se ejecuta cuando recibimos un get al endpoint '/'

    

app.post('/team/pokemon', () => {
        res.status(200).send('Hello World!')
})

app.post('/login', (req, res) => {
    //Comprobamos credenciales
    usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
        //Si no son válidas, error
        if(!result) {
            return res.status(401).json({message: 'Invalid credentials'})
        }
        //Si son válidas, generamos un JWT y lo devolvemos
        const token = jwt.sign({userId: req.body.user})
        res.status(200).json({})
        {token: token}
    
    })

})

//Coge el endpoint '/team' y hazme una autenticación usando jwt
app.get('/team', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200).send('Hello World!')
})

//los ":" definen un parámetro, que puede ser cualquier tipo d dato
app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello World!')

})

app.put('/team', () =>{
    res.status(200).send('Hello World!')

})

exports.app = app