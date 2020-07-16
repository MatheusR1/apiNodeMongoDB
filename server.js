const express = require('express');
const mongoose = require('mongoose');
const requireDir= require('require-dir')
const port = 8080;

// inciando o app
const app = express();

app.use(express.json());


// conectando db
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


requireDir('./src/models');


// portas da app 
app.use('/api',require('./src/routes'));

//rotas
app.listen(port, () => {
    console.log(`sevidor rodando na porta ${port}`);
})