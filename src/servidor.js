const porta = 3003

const express = require('express')

const app = express()

/*app.get('/produtos', (req,resp,next)=>{
    console.log('Midleware 1...')
    next()
})  midleware funcionndo na pratica*/

app.get('/produtos', (req,resp,next)=>{
    resp.send({nome:'Pc',preco:2000}) // send converte para json
    next()
})


app.listen(porta, ()=>{
    console.log(`Console executando na porta ${porta}`)
}) // porta que vc escuta o metodo