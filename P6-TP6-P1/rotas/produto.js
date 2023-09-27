const { produtoRepositorio } = require('../repositorios/produto')
const repositorio = produtoRepositorio()

const produtoValidacao = require('../validacoes/produto')

const Router = require('express').Router()

Router.get('/produto/:id', (req, res) => {
    const {id} = req.params

    const produto = repositorio.get(id)

    res.send(produto)
})

Router.post('/produtos', (req, res) => {
    
    const produto = req.body

    if(!produtoValidacao.validar(produto)){
        throw new Error(JSON.stringify({
            status: 404, // ???
            msg: "Produto Invalido"
        }))
    } else {
        res.repositorio.push(produto) // ???
    }
})

Router.delete('/produtos/:id', (req, res) => {
    const {id} = req.params

    const produto = repositorio.get(id)

    res.destroy(produto) // ???
})

module.exports = Router