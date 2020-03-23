const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


/*routes.get('/', (req, res)=>{
    //return res.send(`hello ${req.query.name}`)
    return res.json({message: `olá ${req.query.name}`});
});
utilizado apenas no começo da aula
    */

/*routes.post('/devs', (req,res)=>{
    console.log(req.body);
    return res.json({"ok":true});
    });
    no inicio da aula */
    
    

module.exports =routes;