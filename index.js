const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Servidor')
})

app.listen(3001, function(){
    console.log('Servidor rodando com express!')
});