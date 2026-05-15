const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Inicializar la aplicación
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/db');


// MIDDLEWARES (Configuraciones base)


// 1. Morgan: Para el registro de peticiones
// Nos mostrará en la consola cada petición HTTP que llegue.
app.use(morgan('dev'));

// 2. CORS (Cross-Origin Resource Sharing)
// ¿Qué es y para qué se utiliza? Es un mecanismo de seguridad.
// Le dice al navegador que permita a tu frontend (que corre en un puerto distinto, ej. 5173)
// acceder y consumir los recursos de este backend (puerto 3000). Si no lo pones, el navegador bloquea la conexión.
app.use(cors());

// 3. Lectura de JSON
// Permite que Express entienda los datos que el frontend envíe en formato JSON.
app.use(express.json());


// RUTAS DE PRUEBA
app.get('/', (req, res) => {
    res.json({ mensaje: '¡Servidor Express funcionando' });
});


// INICIAR SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});