'use strict'

import { selecionaPizza } from "./home.js"
const pizzaID = localStorage.getItem('pizzaId')
const like = document.getElementById('like')

const pizzas = pizzasFavoritas.concat(pizzasRecomendadas)

const criarImagem = () => {

    let pizzaSelecionada = selecionaPizza(pizzaID)
    
    const header = document.getElementById('header')
    header.style.backgroundImage = `url(${pizzaSelecionada.imagem})`

    document.getElementsByTagName('title')[0].innerText = nomePizza

    const nome = document.getElementById('nome-pizza')
    const preco = document.getElementById('preco')

    nome.textContent = nomePizza
    preco.textContent = precoPizza

}

// const darLike = () => {

//     const img = like.children[0]

//     if (img.src.includes('Off'))
//         img.src = '../img/icons/LikeOn.svg'
//     else if (img.src.includes('On'))
//         img.src = '../img/icons/LikeOff.svg'

// }

// const gerarComentarios = (comentario) => {

//     const containerComentario = document.createElement('div')
//     const containerSuperior = document.createElement('div')
//     const avaliacao = document.createElement('h3')
//     const textoComentario = document.createElement('p')

//     const pessoa = document.createElement('div')
//     const estrelas = document.createElement('div')

//     const img = document.createElement('img')
//     const infoPessoa = document.createElement('div')

//     const nomePessoa = document.createElement('h3')
//     const data = document.createElement('span')

//     let qntEstrelas = comentario.estrelas

//     while(qntEstrelas){
//         const estrela = document.createElement('img')
//         estrela.src = '../img/icons/Star.svg'
//         estrela.alt = 'Estrela'
//         estrelas.appendChild(estrela)
//         qntEstrelas--
//     }
    
//     containerComentario.classList.add('container-comentario')
//     containerSuperior.classList.add('container-superior')
//     avaliacao.classList.add('avaliacao')
//     avaliacao.textContent = comentario.avaliacao
//     textoComentario.classList.add('comentario')
//     textoComentario.textContent = comentario.comentario
//     pessoa.classList.add('pessoa')
//     estrelas.classList.add('estrelas')
//     img.src = comentario.foto
//     img.alt = comentario.nome
//     infoPessoa.classList.add('info-pessoa')
//     nomePessoa.classList.add('nome-pessoa')
//     nomePessoa.textContent = comentario.nome
//     data.classList.add('data')
//     data.textContent = comentario.data

//     containerComentario.replaceChildren(containerSuperior, avaliacao, textoComentario)
//     containerSuperior.replaceChildren(pessoa, estrelas)
//     pessoa.replaceChildren(img, infoPessoa)
//     infoPessoa.replaceChildren(nomePessoa, data)


//     const containerComentarios = document.getElementById('container-comentarios')
//     containerComentarios.appendChild(containerComentario)

// }

// like.addEventListener('click', darLike)
// window.addEventListener('load', criarImagem)
// window.addEventListener('load', comentarios.forEach(comentario => {
//     gerarComentarios(comentario)
// }))