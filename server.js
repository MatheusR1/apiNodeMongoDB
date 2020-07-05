const express = require('express');
const mongoose = require('mongoose');
const requireDir= require('require-dir')
const port = 8080;

// inciando o app
const app = express();

// conectando db
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


requireDir('./src/models');


const Product= mongoose.model('Product') 


// portas da app 
app.get('/', (req, res) => {

    Product.create({
        title:'roupa',
        description:'azul',
        url:'http://google.com'
    });

   return res.send('hello word');
})

app.listen(port, () => {
    console.log(`sevidor rodando na porta ${port}`);
})