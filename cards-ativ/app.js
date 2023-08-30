// 'use strict'

// // array [{objetos}]
// const funcionarios = [
//     {
//         nome: "Maria Souza",
//         msg: "Posso realizar o pagamento por...",
//         tempo: "Há 30 minutos",
//         imagem: "maria.jpg"
//     },
//     {
//         nome: "João Silva",
//         msg: "Bom dia, como posso ajuda...",
//         tempo: "Há 30 minutos",
//         imagem: "joao.jpg"
//     },
//     {
//         nome: "Hugo Pereira",
//         msg: "Bom dia, gostaria de saber quant...",
//         tempo: "Há 30 minutos",
//         imagem: "hugo.jpg"
//     },
//     {
//         nome: "Ana Maria",
//         msg: "Adorei o atendimento, foi nota 10...",
//         tempo: "Há 30 minutos",
//         imagem: "ana.jpg"
//     }
// ]

// // criando o html
// const criarCard = (funcionario) => {
//     const card = document.createElement('div')
//     card.classList.add('card')

//     const imagem = document.createElement('img')
//     imagem.src = `./img/${funcionario.imagem}`
//     imagem.alt = funcionario.nome

//     const nome = document.createElement('h5')
//     nome.textContent = funcionario.nome

//     const msg = document.createElement('p')
//     msg.textContent = funcionario.msg

//     const tempo = document.createElement('p')
//     tempo.textContent = funcionario.tempo   

//     card.appendChild(imagem)
//     card.appendChild(nome)
//     card.appendChild(msg)
//     card.appendChild(tempo)

//     return card
// }

// const mostrarCards = (funcionario) => {
//     const cardContainer = document.getElementById('card-container')
//     const card = criarCard(funcionario)
//     cardContainer.appendChild(card)
// }

// funcionarios.forEach(mostrarCards)

