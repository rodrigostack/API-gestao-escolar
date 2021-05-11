const Sequelize = require('sequelize');
const connection = require('./connection')

const Cursos = connection.define('cursos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false
    },
    curso:{
        type:Sequelize.STRING,
        allowNull:false
    },

    duracao:{
        type:Sequelize.STRING,
        allowNull:false
    },

    mensalidade:{
        type:Sequelize.DECIMAL,
        allowNull:false
    },
    modulos:{
        type:Sequelize.TEXT,
        allowNull:false
    },
})

Cursos.sync({force: false}).then(() =>{});

module.exports = Cursos;