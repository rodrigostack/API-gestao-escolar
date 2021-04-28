const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')
const connection = require('./banco/connection');
const Alunos = require('./banco/Alunos')

connection
    .authenticate()
    .then(()=>{
        console.log("Conexao feita com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.use(cors()); 
app.use(express.json()); 
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());    


app.get('/', function(req, res){
    res.send('Servidor')
})

app.post('/api/alunos', (req, res)=>{
    const aluno = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.tel;
    const cpf = req.body.cpf;
    const curso = req.body.curso;
    const CEP = req.body.cep;
    const endereco = req.body.endereco;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    Alunos.create({
        aluno: aluno,
        email: email,
        telefone: telefone,
        cpf: cpf,
        curso: curso,
        CEP: CEP,
        endereco:endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado

    })
    res.status(201).send()
})


app.listen(3001, function(){
    console.log('Servidor rodando com express!')
});

