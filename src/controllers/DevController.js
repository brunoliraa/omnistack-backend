const axios = require('axios');
const Dev = require('../models/Dev');

module.exports ={
    async index(req, res){
        //metodo index é para listagem
        const {user}= req.headers;
        const loggedDev = await Dev.findById(user);
        const users = await Dev.find({
            $and:[
                { _id: { $ne: user}},
                { _id: { $nin: loggedDev.likes}},
                { _id: { $nin: loggedDev.dislikes}},
            ],
            //query do mongodb no formato de objeto pra retornar o json
            //$and(equal no mongo) aplica o filtro AND os três de uma vez só
            //$ne( not equal) $nint (not in, ex em uma lista)
        })
        return res.json(users);
       

        
    },

    async store(req, res){
        //console.log(req.body.username); ou
        const {username}=req.body; //a chave que eu quero dentro de qual objeto
        
        const userExists = await Dev.findOne({user:username});
        if(userExists){
            return res.json(userExists);
        }
        //verifica se o usuario já existe, e o retorna

        const response = await axios.get(`https://api.github.com/users/${username}`);
        //o axios.get é assincrono, demora um tempo para executar
        //o axios retorna os dados da requisição em response.data
        //await aguarda o axios executar para dps descer
        const {name, bio, avatar_url: avatar}= response.data;
        //renomeando avatar_url para avatar.
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })
        //cria o objeto
        
        //return res.json(response.data);
        return res.json(dev);
    }
};
//axios para fazer requisições em APIs externas

/* o seu controller não pode ter mais que 
os 5 métodos fundamentais (boa prática do mvc)
index, store, show, update, delete caso precise de outros métodos
criar novos controllers */