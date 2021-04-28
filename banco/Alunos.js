const Sequelize = require('sequelize')
const connection = require('./connection')

const Alunos = connection.define('alunos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false
    },
    aluno:{
        type:Sequelize.STRING,
        allowNull:false
    },

    email:{
        type:Sequelize.STRING,
        allowNull:false
    },

    telefone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type:Sequelize.STRING,
        allowNull:false
    },
    curso:{
        type:Sequelize.STRING,
        allowNull:false
    },
    CEP:{
        type:Sequelize.STRING,
        allowNull:false
    },
    endereco:{
        type:Sequelize.STRING,
        allowNull:false
    },
    bairro:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cidade:{
        type:Sequelize.STRING,
        allowNull:false
    },
    estado:{
        type:Sequelize.STRING,
        allowNull:false
    },
    

});

Alunos.sync({force: false}).then(() =>{});

module.exports = Alunos;