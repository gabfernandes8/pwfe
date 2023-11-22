'use strict'

const listarUsuarios = async() => {
    const url = 'http://10.107.140.2:8080/usuarios'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data
}

const cadastrarUsuario = async(usuario) => {
    const url = 'http://10.107.140.2:8080/usuarios'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

const deletarUsuario = async(id) => {
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

const atualizarUsuario = async(usuario) => {
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

const usuarioAtualizado = {
    "nome": 'Gabriela',
    "email": 'gab@gmail.com',
    "id":'22'
}

const novoUsuario = {
    "nome": "Gabriela",
    "email": "gabriela@gmail.com"
}

cadastrarUsuario(novoUsuario)
// atualizarUsuario(usuarioAtualizado)