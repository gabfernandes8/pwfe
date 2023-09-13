'use strict'

const input = document.getElementById('input-cep')
const endereco = document.getElementById('endereco')
const bairro = document.getElementById('bairro')
const city = document.getElementById('city')
const estado = document.getElementById('estado')

const pegarCep = async()  =>{
    let inputCep = document.getElementById('input-cep').value
    const url = 'viacep.com.br/ws/' + inputCep + '/json/'

    const response = await fetch(url)
    const cepInfo = await response.json()
    console.log(cepInfo)
    return cepInfo
}

const completarDados = () => {

    const infos = pegarCep()

    endereco.textContent
    bairro.textContent
    city.textContent
    estado.textContent
}

const returnCep = async() =>{
    const cep = await pegarCep()

}

// input.addEventListener('keyup', function(e){
//     if (e.key === 'Enter'){
//         returnCep()
//     }
// })

returnCep()