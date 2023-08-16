'use strict'

const botaoSomar = document.getElementById('somar')

function somar(){
    const n1 = Number(document.getElementById('numero1').value)
    const n2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = n1 + n2

    resultado.textContent = total
}

botaoSomar.addEventListener('click', somar)