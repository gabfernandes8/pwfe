// 'use strict'

// array [{objetos}]
const chats = [
    {
        nome: "Baco Exu do Blue",
        msg: "tô aqui com a taylor no estúdio gravando nosso feat",
        tempo: "Há 2 minutos",
        imagem: "baco.jpg",
        naoLida: "1",
        ctt: "Baco"
    },
    {
        nome: "Roberta Ratzke",
        msg: "Vou entrar em quadra!",
        tempo: "Há 10 minutos",
        imagem: "roberta.jpg",
        naoLida: "3",
        ctt: "Betinha"
    },
    {
        nome: "Jonathan Scott",
        msg: "to construindo a casa aqui",
        tempo: "Há 11 minutos",
        imagem: "jonathan.jpg",
        naoLida: "1",
        ctt: "Irmão a Obra"
    },
    {
        nome: "Claire Dunphy",
        msg: "Vem buscar as cria",
        tempo: "Há 15 minutos",
        imagem: "claire.jpg",
        naoLida: "2",
        ctt: "Claire Sis 🤞💝"
    },
    {
        nome: "Jake Peralta",
        msg: "title of your sex tape 😆",
        tempo: "Há 99 minutos",
        imagem: "jake-amy.jpg",
        naoLida: "1",
        ctt: "Peralta Amazing Detective/Genius"
    },
    {
        nome: "Taylor Swift",
        msg: "não cachorra, não vou levar o filme da The Eras pro Brasil",
        tempo: "Há 13 horas",
        imagem: "taylor2.jpg",
        naoLida: "13",
        ctt: "Miss Swift💜"
    },
    {
        nome: "Michael Scott",
        msg: "Se eu tivesse uma arma com duas balas...",
        tempo: "Há 1 dia",
        imagem: "michaelscott.jpg",
        naoLida: "5",
        ctt: "Chefinho do Escritório"
    },
    {
        nome: "Joey Tribbiani",
        msg: "How u doin'? 😏",
        tempo: "Há 1 mês",
        imagem: "joey.jpg",
        naoLida: "10",
        ctt: "Joey 🙄"
    },

]

// criando o html
const criarCard = (chat) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${chat.imagem}`
    imagem.alt = chat.nome

    const infos = document.createElement('div')
    infos.classList.add('info')

    const nomeCont = document.createElement('div')
    nomeCont.classList.add('nome-container')

    const nome = document.createElement('h4')
    nome.textContent = chat.nome

    const naoLida = document.createElement('span')
    naoLida.textContent = chat.naoLida
    
    const msg = document.createElement('p')
    msg.textContent = chat.msg

    const tempo = document.createElement('div')
    tempo.classList.add('tempo')

    const time = document.createElement('p')
    time.textContent = chat.tempo

    const contato = document.createElement('div')
    contato.classList.add ('contato')

    contato.textContent = chat.ctt

    card.appendChild(imagem)
    card.appendChild(infos)
    card.appendChild(tempo)
    card.appendChild(contato)

    infos.appendChild(nomeCont)
    infos.appendChild(msg)
    nomeCont.appendChild(nome)
    nomeCont.appendChild(naoLida)

    tempo.appendChild(time)

    return card
}

const mostrarCards = (chat) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(chat)
    cardContainer.appendChild(card)
}

chats.forEach(mostrarCards)

