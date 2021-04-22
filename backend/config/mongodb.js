const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        console.log('ERRO! Não foi possível conectar com o MongoDB!')
    })