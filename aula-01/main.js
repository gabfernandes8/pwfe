'use strict'

// 3 - var => mutável => global
// 2 - let => mutável => bloco
// 1 - const => imutável => bloco

function trocarTitulo (){
    //getElementById = utilizado para pegar o elemento pelo id que vc colocou pra ele no html
    const titulo = document.getElementById('titulo')

    // prompt é usado para abrir a caixinha de interação
    let tituloDigitado = prompt('Digite um título.')

    if (tituloDigitado == ''){
        tituloDigitado = 'Escola SENAI 1.27'
    }

    titulo.textContent = tituloDigitado
}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')

botaoTrocarTitulo.addEventListener('click', trocarTitulo)

//===================================

function cadastrar(){
    const nome = document.getElementById('name')
    const idade = document.getElementById('age')
    const cidade = document.getElementById('city')
    const media = document.getElementById('media')

    let nomeDigitado = prompt('Digite seu nome.')
    while (nomeDigitado == ''){
        nomeDigitado = prompt('(OBRIGATÓRIO) Digite seu nome.')
    }
    nome.textContent = 'Nome: ' + nomeDigitado
    

    let idadeDigitada = prompt('Digite sua idade.')
    idade.textContent = 'Idade: ' + idadeDigitada

    let cidadeDigitada = prompt('Digite sua cidade.')
    cidade.textContent = 'Cidade: ' + cidadeDigitada

    let mediaDigitada = prompt('Digite sua média.')
    media.textContent = 'Média: ' + mediaDigitada
    if (mediaDigitada >= 5){
        media.classList.add('azul')
    } else {
        media.classList.add('red')
    }
}

const botaoCadastrar = document.getElementById('cadastro')
botaoCadastrar.addEventListener('click', cadastrar)