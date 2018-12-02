
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./server');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.post('/confirmacionSolicitud', (req, res) => {
    console.log('req.body', req.body)
    configMensaje.sendEmail(req.body, () =>{
        res.status(200).send({
            status: '1',
            message: 'OK'
        });
    }, (err) => {
        
    res.status(404).send({
        status: '-1',
        message: 'Error: ' + err
    });
    });
    //console.log(req.body);
})

app.listen(3000, () => {
console.log('Servidor corriendo')
});