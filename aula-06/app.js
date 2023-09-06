'use strict'

const botaoPesquisar = document.getElementById('lupa')

async function pegarImagens() {
    const pesquisa = document.getElementById('search-input').value
    const url = 'https://dog.ceo/api/breed/' + pesquisa + '/images'
    const response = await fetch(url)
    const imagens = await response.json()

    return imagens.message
}

function criarTagImg(imagem){
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src =imagem

    galeria.appendChild(tagImg)
}

async function carregarFotos(){
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}

// carregarFotos()

botaoPesquisar.addEventListener('click', carregarFotos)