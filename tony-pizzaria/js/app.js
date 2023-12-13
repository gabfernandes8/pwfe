/****************************************************************************************************************************************************
* Objetivo: criar uma api para respoder dados de uma pizzaria
* Data: 29/11/2023
* Autor: Gabriela Fernandes
* Versão: 1.0
****************************************************************************************************************************************************/




const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const funcoes = require('./model/funcoes.js')




const app = express()




app.use((request, response, next) => {




    response.header('Acess-Control-Allow-Origin', '*')

    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors)

    next()




})  




// endpoints: listar o nome, id, email e senha de todos os usuários

app.get('/usuarios/', cors(), async (request, response, next) => {




    response.json(funcoes.getListaUsuarios())

    response.status(200)




})




// endpoints: listar os dados de um usuário

app.get('/usuario/:id', cors(), async (request, response, next) => {




    let id = request.params.id




    if(funcoes.getInfoUsuario(id)){

        response.json(funcoes.getInfoUsuario(id))

        response.status(200)

    }else{

        response.json({erro: 'Não foi possível encontrar um item'})

        response.status(404)

    }




})




// endpoints: listar o nome e imagem das categorias

app.get('/categorias/', cors(), async (request, response, next) => {




    response.json(funcoes.getListaCategorias())

    response.status(200)




})




// endpoints: listar o nome, imagem e preço das pizzas

app.get('/pizzas/', cors(), async (request, response, next) => {




    response.json(funcoes.getListaPizzas())

    response.status(200)




})




app.get('/pizzas/favoritas', cors(), async (request, response, next) => {




    response.json(funcoes.getListaPizzasFavoritas())

    response.status(200)




})




// endpoints: listar as informações de uma pizza

app.get('/pizza/:id', cors(), async (request, response, next) => {




    let id = request.params.id




    if(funcoes.getInfoPizza(id)){

        response.json(funcoes.getInfoPizza(id))

        response.status(200)

    }else{

        response.json({erro: 'Não foi possível encontrar um item'})

        response.status(404)

    }




})




// endPoints: listar os comentários de uma pizza

app.get('/comentarios/:id', cors(), async (request, response, next) => {




    let id = request.params.id




    if(funcoes.getComentarios(id)){

        response.json(funcoes.getComentarios(id))

        response.status(200)

    }else{

        response.json({erro: 'Não foi possível encontrar um item'})

        response.status(404)

    }




})




// endpoints: listar as informações de todas as bebidas

app.get('/bebidas/', cors(), async (request, response, next) => {




    let id = request.params.id




    if(funcoes.getListaBebidas(id)){

        response.json(funcoes.getListaBebidas(id))

        response.status(200)

    }else{

        response.json({erro: 'Não foi possível encontrar um item'})

        response.status(404)

    }




})
app.listen(8080, () => {})