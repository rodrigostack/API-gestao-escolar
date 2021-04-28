const express = require('express');
const app = express();
const connection = require('./banco/connection')

connection
    .authenticate()
    .then(()=>{
        console.log("Conexao feita com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })


app.get('/', function(req, res){
    res.send('Servidor')
})

app.listen(3001, function(){
    console.log('Servidor rodando com express!')
});

