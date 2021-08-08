/*               AUTENTICACIÓN ¿QUIEN ES EL USUARIO? != AUTORIZACIÓN                       */
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app').app

describe('Suite de pruebas auth', () => {
    it('should return 401 when no jwt token available', (done) => {
        chai.request(app)
            .post('/login')
            .end((err, res) => {
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done()
                    })
            })
               
        })
})