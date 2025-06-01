const exp = require('express')
const app = exp();

require('dotenv').config();

const logger = require ('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended:false}));
app.use(exp.json())

app.post('/clientes',async(req,res)=>{
    const nuevoCliente = new modelocliente({
        
    })
})

const modelocliente = require('./backend/models/cliente.model')
app.get('/clientes',(req,res)=>{

});

app.listen(process.env.PORT,() => {
    console.log("servidor en linea");
});0

