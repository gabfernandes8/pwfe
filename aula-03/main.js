'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdenti = document.getElementById('identificar')

function somar(){
    const n1 = Number(document.getElementById('numero1').value)
    const n2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = n1 + n2

    resultado.textContent = total
}

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg

    if(numero > 0){
        msg = 'positivo!'
    } else if(numero < 0) {
        msg = 'negativo!'
    } else {
        msg = 'zero!'
    }

    resultado.textContent = msg
}

botaoSomar.addEventListener('click', somar)
botaoIdenti.addEventListener('click', identificar)