const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')
const connection = require('./banco/connection');
const Alunos = require('./banco/Alunos');
const Cursos = require('./banco/Cursos');

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

// API de consultas 
app.post('/api/consultaalunos', (req, res)=>{
    const id = req.body.id;
    Alunos.findOne({
        where: {id: id}
    }).then(alunos => {
        if(alunos != undefined){
            res.status(201).send()
        }else{
            
        }
    })
})


// API para os cursos
app.post('/api/cursos', (req, res)=>{
    const curso = req.body.curso;
    const duracao = req.body.duracao;
    const mensalidade = req.body.mensalidade;
    const modulos = req.body.modulos;
    
    Cursos.create({
        curso: curso,
        duracao: duracao,
        mensalidade: mensalidade,
        modulos: modulos

    })
    res.status(201).send()
});


app.get('/api/cursoscadastrados', (req, res)=>{
    Cursos.findAll({ raw: true }).then(cursos =>{
        res.send(cursos)
        cursos: cursos
    });
    
});




//API para os alunos
app.get('/api/alunoscadastrados', (req, res)=>{
    Alunos.findAll({ raw: true }).then(alunos =>{
        res.send(alunos)
        alunos: alunos
    });
    
});



app.post('/api/alunos', (req, res)=>{
    const aluno = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
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

