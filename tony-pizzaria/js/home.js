'use strict'

const selecionarPizza = () => {
    
    const pizzas = document.getElementsByClassName('pizza-favorita')
    
    for (let pizza of pizzas){
        
        pizza.addEventListener('click', () => {

            console.log(pizza.style.cssText.split('"')[1])
            localStorage.setItem('imagemPizza', pizza.style.cssText.split('"')[1])
            localStorage.setItem('nomePizza', pizza.children[0].children[1].textContent)
            localStorage.setItem('precoPizza', pizza.children[0].children[0].textContent)

        })

    }
    
}