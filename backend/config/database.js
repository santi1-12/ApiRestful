const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://santiago:santiago2011@cluster0.9ui8qdp.mongodb.net/santiagoapirestful?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a MongoDB Atlas'))
.catch(err => console.error('Error de conexión a MongoDB Atlas:', err));

module.exports = mongoose;