const Dev = require('../models/Dev');
module.exports ={
    async store(req, res){
        //console.log(req.params.devId);
        //console.log(req.headers.user);
        
        const {devId} = req.params;
        const{user} = req.headers;
        //req.params para acessar parametro que vem através da rota
        //o header simboliza autenticação
        const loggedDev = await Dev.findById(user); //guarda a instancia do usuario no banco
        const targetDev = await Dev.findById(devId);
        if(!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
            //400 no geral é bad request
        }
        
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();
        
        return res.json(loggedDev);
    }
};