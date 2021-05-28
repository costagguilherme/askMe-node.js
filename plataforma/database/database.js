const Sequelize = require('sequelize')
const connection = new Sequelize('guiaperguntas', 'root', 'root12345', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection