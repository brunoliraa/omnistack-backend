const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const server = express();
//conecta com o banco
mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-l0ibz.mongodb.net/tindev?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
});

server.use(cors());
server.use(express.json()); //pro express lidar com json
server.use(routes); //adiciona as rotas
/*server.get('/', (req, res)=>{
    //return res.send(`hello ${req.query.name}`)
    return res.json({message: `olá ${req.query.name}`});

});*/
server.listen(3333);
/* mongoose (odm, ferramenta que facilita o trabalho em banco 
    apenas usando sintaxe java script) */
    //cors (permite que a aplicação seja acessada pro qualquer endereço)
    //no caso o react
