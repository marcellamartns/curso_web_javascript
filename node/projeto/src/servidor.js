const porta = 3003
const express = require('express')

const app = express()
const bodyParse= require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParse.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProduto()) //converter para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id : req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  //JSON
})
app.listen(porta, () => {
    console.log(`servidor está executando na porta ${porta}`)
})