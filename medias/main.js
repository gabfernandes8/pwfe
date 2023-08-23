'use strict'


// media

const botaoSomar = document.getElementById('calc')
const botaoIdenti = document.getElementById('identificar')

function calcular(){
    const n1 = Number(document.getElementById('nota1').value)
    const n2 = Number(document.getElementById('nota2').value)
    const n3 = Number(document.getElementById('nota3').value)
    const n4 = Number(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado')
    const resultado2 = document.getElementById('media-item2')

    const media1 = (n1 + n2 + n3 + n4) / 4

    resultado.textContent = media1
    resultado2.value = media1
}

function identificar(){
    const media1 = Number(document.getElementById('media-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg

    if(media1 >= 7){
        msg = 'Aprovado!'
    } else {
        const nE = prompt('Sua média atual é ' + media1 + '. Insira uma quinta nota (nota de exame)')
        
        const media2 = (media1 + Number(nE)) / 2

        if (media2 >= 5){
            msg = 'Aprovado em exame.'
        } else {
            msg = 'Reprovado.'
        }
    }

    resultado.textContent = msg
}

botaoSomar.addEventListener('click', calcular)
botaoIdenti.addEventListener('click', identificar)


// 1 ate 9
const botaoInserir = document.getElementById('inserir')


function inserir(){

    const n = Number(document.getElementById('numero').value)
    const resultado = document.getElementById('resultado3')
    let msg

    if(n <= 9){
        msg = 'O valor está na faixa permitida!'
    } else {
        msg = 'O valor está fora da faixa permitida!'
    }

    resultado.textContent = msg
}

botaoInserir.addEventListener('click', inserir)

// não ser maior que 3

const botaoVerificar = document.getElementById('verificar')

function verificar(){
    const n = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado4')
    let msg

    console.log(n)

    // dois parentes para usar a negação, negar toda a condição
    if(!(n > 3)){
        msg = 'O valor está na faixa permitida!'
    } else {
        msg = '??'
    }

    resultado.textContent = msg
}

botaoVerificar.addEventListener('click', verificar)

// multiplicar por 2 e só mostrar maiores que 30
const botaoMultiplicar = document.getElementById('multiplicar')

function multiplicar(){
    const numero = parseInt(document.getElementById(numero3).value)
}