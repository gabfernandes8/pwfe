'use strict'

// array [{objetos}]
const funcionarios = [
    {
        nome: "Maria Souza",
        cargo: "Designer",
        imagem: "maria.jpg"
    },
    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg"
    },
    {
        nome: "Hugo Pereira",
        cargo: "Front-End",
        imagem: "hugo.jpg"
    },
    {
        nome: "Ana Maria",
        cargo: "Back-End",
        imagem: "ana.jpg"
    }
]

// const limite = funcionarios.length
// for (let i=0; i<limite; i++){
//     console.log(`ID:${i} -- ${funcionarios[i].nome}`) 
// }

// criando o html
const criarCard = (funcionario) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.nome

    const nome = document.createElement('h3')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(cargo)

    return card
}

const mostrarCards = (funcionario) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionario)
    cardContainer.appendChild(card)
}

funcionarios.forEach(mostrarCards)

