'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos')

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoIndice = numeros.length
    const container = document.getElementById('container-todos-numeros')

    // substituir os filhos por vazio
    container.replaceChildren('')

    for (let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]

        // adicionar filho ao span
        container.appendChild(novoSpan)
    }
}

botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)

// ===========================================================================

const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-pares')

function mostrarPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarNumerosPares.addEventListener('click', mostrarPares)

// ===========================================================================
const botaoMostrarImpares = document.getElementById('botao-mostrar-impares')

function mostrarImpares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 2 != 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarImpares.addEventListener('click', mostrarImpares)

// ===========================================================================
const botaoMostrarMultiplos3 = document.getElementById('botao-mostrar-multiplos3')

function mostrarMultiplos3(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos3')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplos3.addEventListener('click', mostrarMultiplos3)

// ===========================================================================
const botaoMostrarMultiplos3e4 = document.getElementById('botao-mostrar-multiplos3e4')

function mostrarMultiplos3e4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos3e4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0 && numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplos3e4.addEventListener('click', mostrarMultiplos3e4)

// ===========================================================================
const botaoMostrarMultiplos3ou4 = document.getElementById('botao-mostrar-multiplos3ou4')

function mostrarMultiplos3ou4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos3ou4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0 || numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplos3ou4.addEventListener('click', mostrarMultiplos3ou4)

// ===========================================================================
const botaoMostrarMultiplos3Ou4 = document.getElementById('botao-mostrar-multiplos3ou4')

function mostrarMultiplos3ou4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos3ou4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0 || numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarMultiplos3ou4.addEventListener('click', mostrarMultiplos3ou4)

// ===========================================================================
const botaoMostrarProximo = document.getElementById('botao-mostrar-proximo')

function mostrarProximo (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-proximos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice])+1
        container.appendChild(novoSpan)
    }
}

botaoMostrarProximo.addEventListener('click', mostrarProximo)

// ===========================================================================
const botaoMostrarProximoPar = document.getElementById('botao-mostrar-proximo-par')

function mostrarProximoPar (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice])+2
            container.appendChild(novoSpan)
        } else {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice])+1
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarProximoPar.addEventListener('click', mostrarProximoPar)

// ===========================================================================
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')

function mostrarDobro (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice])*2
            container.appendChild(novoSpan)
    }
}

botaoMostrarDobro.addEventListener('click', mostrarDobro)