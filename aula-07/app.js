'use strict'

const inputCep = document.getElementById('input')

const completarDados = (pegarCep) => {
    const endereco = document.getElementById('endereco').textContent = pegarCep.logradouro
    const bairro = document.getElementById('bairro').textContent = pegarCep.bairro
    const city = document.getElementById('city').textContent = pegarCep.localidade
    const estado = document.getElementById('estado').textContent = pegarCep.uf
}

const pegarCep = async()  =>{
    let inputCep = document.getElementById('input').value
    const url = 'https://viacep.com.br/ws/' + inputCep + '/json/'

    const response = await fetch(url)
    const cep = await response.json()

    completarDados(cep)
}

inputCep.addEventListener('blur', pegarCep)

inputCep.addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
        pegarCep()
    }
})