const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('proyectois', 'proyectois', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging: true // Evita que la consola se llene de consultas SQL, puedes ponerlo en true si quieres verlas
});

const probarConexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a PostgreSQL establecida correctamente con Sequelize.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

probarConexion();

module.exports = sequelize;