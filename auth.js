const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt




/*
Todo esto es una función, que recibe un objeto passport por parámetro.
Uso una estrategiia/pluggin llamado use
*/
module.exports = passport => {
    //Creo el json que es la configuracion de la estrategia
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
        , secretOrKey: 'secret' //TODO debería estar en una variable de entorno (es la contraseña )
    } 
    //Creo la estrategia
    passport.use(new JwtStrategy(opts, (decoded, done) => {
        console.log('decoded jwt', decoded)
        return done(null, decoded)
    }))
}
