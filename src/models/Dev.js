const {Schema, model} = require('mongoose'); // desestruturação
/* outra forma 
const moongose = require ...
mongoose.Schema */
const DevSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },
    bio:String, //sem o type por nao ser obrigatorio
    avatar:{
        type:String, //pq nao armazena a imagem e sim a url dela
        required:true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', // uma espécie de chave estrangeira do sql(referencia models.Dev)
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
},{
    timestamps:true, // CreatedAt , updateAT armazena a data
});
module.exports = model('Dev', DevSchema);
//agr qualquer arquivo que importar pode inserir dados na tabela, buscar etc
