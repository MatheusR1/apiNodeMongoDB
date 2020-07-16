const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports={

    async index (req, res){

        const {page=1}= req.query;

        const products = await Product.paginate({},({page,limit: 10})); // busca todos os produtos
        
        return res.json(products);
    },

    async show (req,res){
        const product = await Product.findById(req.params.id); // busca por id 

        return res.json(product);
    },

    async store (req, res){
       const product = await Product.create(req.body); // creando novo produto 

       return res.json(product); 
    },

    async update (req,res){
        const product = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new : true} // preciso pra atualizar um produto.
        );

        return res.json(product);
    },

    async destroy (req, res){
        await Product.findByIdAndRemove(req.params.id);

        res.send('deu bom');
    }
};