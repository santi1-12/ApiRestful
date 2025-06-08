require('dotenv').config(); // Carga las variables de entorno

const exp = require('express');
const app = exp();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

// Importa el modelo para asegurarte de que la conexión a MongoDB se realiza
const modeloCliente = require('./backend/models/cliente.model');

// Ruta de prueba
app.post('/cliente', (req, res) => {
  const nuevoCliente = new modeloCliente({
    Documento: '1026757549',
    nombre: 'santiago',
    fechaNacimiento: new Date('2005-01-25')
  });
  
  nuevoCliente.save()
    .then(clienteGuardado => {
      res.status(201).json(clienteGuardado);
    })
    .catch(error => {
      console.error('Error al guardar el cliente:', error);
      res.status(400).json({ error: 'Error al guardar el cliente' });
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en línea en el puerto ${PORT}`);
});

