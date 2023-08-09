'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const texto = document.getElementById('texto')
const forma4 = document.getElementById('forma4')
const caixa = document.getElementById('caixa')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function trocarCor() {
    forma1.classList.toggle('roxo')
}

function trocarForma() {
    forma2.classList.toggle('circulo')
}

function trocarFonte() {
    texto.classList.toggle('consolas')
}

function girar() {
    forma4.classList.toggle('giro')
}

function trocarCorCaixa() {
    caixa.classList.toggle('caixa')
}

function colocarFoto() {
    forma6.classList.toggle('forma-img')
}

function inverterPosition() {
    forma7.classList.toggle('posicao')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarFonte)
forma4.addEventListener('click', girar)
forma5.addEventListener('click', trocarCorCaixa)
forma6.addEventListener('click', colocarFoto)
forma7.addEventListener('click', inverterPosition)

