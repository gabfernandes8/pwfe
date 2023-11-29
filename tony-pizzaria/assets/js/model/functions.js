/****************************************************************************************************************************************************
* Objetivo: arquivo de funções para selecionar e organizar dados da pizzaria
* Data: 29/11/2023
* Autor: Gabriela Fernandes
* Versão: 1.0
****************************************************************************************************************************************************/

var dados = require('./dados')

const getListaUsuarios = () => {

    const usuariosInfo = dados.usuarios.usuario 
    let usuariosArray = []
    let usuariosJSON = {} 

    usuariosInfo.forEach((usuario) =>{
       
        let usuarioJSON = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
        }
        
        usuariosArray.push(usuarioJSON)

    })

    usuariosJSON.usuarios = usuariosArray
    usuariosJSON.quantidade = usuariosInfo.length

    return usuariosJSON

}

const getInfoUsuario = (idUsuario) => {

    let id = idUsuario
    let status = false
    let usuario = {}

    const usuariosInfo = dados.usuarios.usuario

    usuariosInfo.forEach((usuarios) => {

        if(usuarios.id == id){
            
            usuario.nome = usuarios.nome
            usuario.email = usuarios.email
            usuario.senha = usuarios.senha
            usuario.foto = usuarios.fotoPerfil
            usuario.telefone = usuarios.telefone
            usuarios.endereco.forEach((endereco) => {
                usuario.endereco = [
                    {    
                        logradouro: endereco.logradouro,
                        cidade: endereco.cidade,
                        uf: endereco.uf
                    }
                ]
            })

            status = true

        }

    })

    if(status){
        return usuario
    }else{
        return false
    }

}

const getListaCategorias = () => {

    const categorias = dados.categorias.categoria

    let categoriaArray = []
    let categoriaJSON = {}

    categorias.forEach((categoria) => {
       
        let categoriaJSON = {
            id: categoria.id,
            nome: categoria.nome,
            imagem: categoria.imagem
        }

        categoriaArray.push(categoriaJSON)

    })

    categoriaJSON.categorias = categoriaArray
    categoriaJSON.quantidade = categorias.length

    return categoriaJSON

}

const getListaPizzasFavoritas = () => {

    const pizzas = dados.produtos.pizzas

    let pizzaArray = []
    let pizzaJSON = {}
    let quantidade = 0

    pizzas.forEach((pizza) => {
       
        if(pizza.favorito){
           
            let pizzaJSON = {
                id: pizza.id,
                nome: pizza.nome,
                preco: pizza.preco,
                imagem: pizza.imagem
            }
    
            quantidade++
            pizzaArray.push(pizzaJSON)
            
        }

    })

    pizzaJSON.pizzas = pizzaArray
    pizzaJSON.quantidade = quantidade

    return pizzaJSON

}

const getListaPizzas = () => {

    const pizzas = dados.produtos.pizzas

    let pizzaArray = []
    let pizzaJSON = {}
    let quantidade = 0

    pizzas.forEach((pizza) => {
       
        if(pizza.favorito == false){

            let pizzaJSON = {
                id: pizza.id,
                nome: pizza.nome,
                preco: pizza.preco,
                imagem: pizza.imagem
            }
    
            pizzaArray.push(pizzaJSON)
            quantidade++

        }

    })

    pizzaJSON.pizzas = pizzaArray
    pizzaJSON.quantidade = quantidade

    return pizzaJSON

}

const getInfoPizza = (idPizza) => {

    let id = idPizza
    let status = false
    let pizza = {}

    const pizzasInfo = dados.produtos.pizzas

    pizzasInfo.forEach((pizzas) => {

        if(pizzas.id == id){
            
            pizza.nome = pizzas.nome,
            pizza.preco = pizzas.preco,
            pizza.imagem = pizzas.imagem
            pizza.estrelas = pizzas.estrelas
            pizza.descricao = pizzas.descricao
            status = true

        }

    })

    if(status){
        return pizza
    }else{
        return false
    }

}

const getComentarios = (idPizza) => {

    let id = idPizza
    let comentariosArray = []
    const pizzasInfo = dados.produtos.pizzas
    let status = false
    let quantidade = 0

    pizzasInfo.forEach((pizzas) => {

        if(pizzas.id == id){
            
            pizzas.comentarios.forEach((comentarios) => {

                let comentario = {
                    estrelas: comentarios.estrelas,
                    data: comentarios.data,
                    titulo: comentarios.titulo,
                    comentario: comentarios.comentario,
                    nomeUsuario: getInfoUsuario(comentarios.usuario.id).nome,
                    fotoUsuario: getInfoUsuario(comentarios.usuario.id).foto
                }
                
                quantidade++
                comentariosArray.push(comentario)
                status = true

            })
        }
    })

    let comentariosJSON = {
        comentarios: comentariosArray,
        quantidade: quantidade
    }

    if(status){
        return comentariosJSON
    }else{
        return false
    }

}

const getListaBebidas = () => {

    const bebidas = dados.produtos.bebidas

    let bebidaArray = []
    let bebidaJSON = {}

    bebidas.forEach((bebida) => {

        let caracteristicasArray = []

        bebida.caracteristicas.forEach((caracteristica) => {
            caracteristicasArray.push(caracteristica)
        })
       
        let bebidaJSON = {
            id: bebida.id,
            nome: bebida.nome,
            preco: bebida.preco,
            imagem: bebida.imagem,
            caracteristicas: caracteristicasArray
        }

        bebidaArray.push(bebidaJSON)

    })

    bebidaJSON.bebidas = bebidaArray
    bebidaJSON.quantidade = bebidas.length

    return bebidaJSON

}

module.exports = {
    getListaUsuarios,
    getInfoUsuario,
    getListaCategorias,
    getListaPizzas,
    getListaPizzasFavoritas,
    getInfoPizza,
    getComentarios,
    getListaBebidas
}