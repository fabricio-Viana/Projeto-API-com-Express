const porta = 3003

const express = require('express')

const app = express()

const db = require('./db')

app.get('/produtos', (req,res,next)=>{
    res.send(db.getProdutos())
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(db.getProduto(req.params.id)) 
})

app.post('/produtos',(req,res,next)=>{
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})


app.listen(porta, ()=>{
    console.log(`Console executando na porta ${porta}`)
}) // porta que vc escuta o metodo