'use strict'

const botaoPesquisar = document.getElementById('lupa')
const input = document.getElementById('search-input')

async function pegarImagens() {
    const pesquisa = document.getElementById('search-input').value
    let url = 'https://dog.ceo/api/breed/hound/images'

    if(pesquisa != ''){
        url = 'https://dog.ceo/api/breed/' + pesquisa + '/images'
    }
    
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
    const galeria = document.getElementById('galeria')
    galeria.replaceChildren('')
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}

botaoPesquisar.addEventListener('click', carregarFotos)

input.addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
        carregarFotos()
    }
})

carregarFotos()