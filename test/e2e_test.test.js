/*          TESTS DE INTEGRACIÓN         */


const chai = require('chai')
const chaiHttp = require('chai-http')   //Este pluggin permite hacer tests de servidor (chai.get, chai.post...) con el framework chai

chai.use(chaiHttp)  //informa de que voy a usar este pluggin

const app = require('../app').app

describe('Suite de prueba end2end  para el curso', () => {
    it('should return hello world', (done) => {
        chai.request(app).get('/')     //Hazme una llamada al servidor '/' de app
        .end((err, res) => {
            chai.assert.equal(res.text, 'Hello World!')
            done()      //Llamo al callback para indicar que se ha acabado el test 
            //de esta forma me aseguro de que el programa no continúa hasta que el test ha heho la llamada http (ha terminado)
        })
    })
})