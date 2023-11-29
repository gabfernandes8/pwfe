'use strict'

const selecionarPizza = () => {
    
    const pizzas = document.getElementsByClassName('pizza')
    
    for (let pizza of pizzas){
        
        pizza.addEventListener('click', () => {

            console.log(pizza.id)
            localStorage.setItem('imagemPizza', `../img/${pizza.id}.webp`)
            localStorage.setItem('nomePizza', pizza.children[0].children[1].textContent)
            localStorage.setItem('precoPizza', pizza.children[0].children[0].textContent)
            
        })
        
    }
    
}

selecionarPizza()