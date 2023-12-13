'use strict'

const selecionarPizza = () => {
    
    const pizzas = document.getElementsByClassName('pizza')
    
    for (let pizza of pizzas){
        
        pizza.addEventListener('click', () => {

            localStorage.setItem('pizzaId', `${pizza.id}`)
            
        })
        
    }
    
}

const categorias = [

    {
        imagem: "../img/logo.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Kawaii Soda.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Watermelon.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Pizza.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Ice Cream Sundae.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Kawaii Ice Cream.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/logo.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Kawaii Soda.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Watermelon.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Pizza.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Ice Cream Sundae.svg",
        descricao: "pizza logo tony"
    },
    {
        imagem: "../img/Kawaii Ice Cream.svg",
        descricao: "pizza logo tony"
    },

]

const pizzasFavoritas = [

    { 
        id: 1,
        nome: "Pizza de calabreza com queijo",
        preco: "16,00",
        imagem: "../img/calabresa-queijo.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comentarios: [
            {
                nome: 'Gabriela Fernandes',
                foto: '../img/gabriela.webp',
                data: '08/08/2023',
                estrelas: 3,
                avaliacao: 'Pizza muito boa!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Ryan Alves',
                foto: '../img/ryan.webp',
                data: '04/08/2023',
                estrelas: 5,
                avaliacao: 'Essa pizza é demais, recomendo.',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Celso Furtado',
                foto: '../img/celso.webp',
                data: '13/07/2023',
                estrelas: 1,
                avaliacao: 'Pizza chegou fria!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            }
        ]
    },
    { 
        id: 2,
        nome: "Pizza de pepperoni com queijo",
        preco: "19,00",
        imagem: "../img/pepperoni.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comentarios: [
            {
                nome: 'Gabriela Fernandes',
                foto: '../img/gabriela.webp',
                data: '08/08/2023',
                estrelas: 3,
                avaliacao: 'Pizza muito boa!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Ryan Alves',
                foto: '../img/ryan.webp',
                data: '04/08/2023',
                estrelas: 5,
                avaliacao: 'Essa pizza é demais, recomendo.',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Celso Furtado',
                foto: '../img/celso.webp',
                data: '13/07/2023',
                estrelas: 1,
                avaliacao: 'Pizza chegou fria!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            }
        ]
    },
    { 
        id: 3,
        nome: "Pizza de calabreza com queijo",
        preco: "16,00",
        imagem: "../img/pizza-3.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comentarios: [
            {
                nome: 'Gabriela Fernandes',
                foto: '../img/gabriela.webp',
                data: '08/08/2023',
                estrelas: 3,
                avaliacao: 'Pizza muito boa!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Ryan Alves',
                foto: '../img/ryan.webp',
                data: '04/08/2023',
                estrelas: 5,
                avaliacao: 'Essa pizza é demais, recomendo.',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Celso Furtado',
                foto: '../img/celso.webp',
                data: '13/07/2023',
                estrelas: 1,
                avaliacao: 'Pizza chegou fria!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            }
        ]
    },
    { 
        id: 4,
        nome: "Pizza de calabreza com queijo",
        preco: "16,00",
        imagem: "../img/calabresa-queijo.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comentarios: [
            {
                nome: 'Gabriela Fernandes',
                foto: '../img/gabriela.webp',
                data: '08/08/2023',
                estrelas: 3,
                avaliacao: 'Pizza muito boa!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Ryan Alves',
                foto: '../img/ryan.webp',
                data: '04/08/2023',
                estrelas: 5,
                avaliacao: 'Essa pizza é demais, recomendo.',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Celso Furtado',
                foto: '../img/celso.webp',
                data: '13/07/2023',
                estrelas: 1,
                avaliacao: 'Pizza chegou fria!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            }
        ]
    },
    { 
        id: 5,
        nome: "Pizza de calabreza com queijo",
        preco: "19,00",
        imagem: "../img/pepperoni.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comentarios: [
            {
                nome: 'Gabriela Fernandes',
                foto: '../img/gabriela.webp',
                data: '08/08/2023',
                estrelas: 3,
                avaliacao: 'Pizza muito boa!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Ryan Alves',
                foto: '../img/ryan.webp',
                data: '04/08/2023',
                estrelas: 5,
                avaliacao: 'Essa pizza é demais, recomendo.',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Celso Furtado',
                foto: '../img/celso.webp',
                data: '13/07/2023',
                estrelas: 1,
                avaliacao: 'Pizza chegou fria!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            }
        ]
    },
    { 
        id: 6,
        nome: "Pizza de calabreza com Queijo",
        preco: "16,00",
        imagem: "../img/pizza-3.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comentarios: [
            {
                nome: 'Gabriela Fernandes',
                foto: '../img/gabriela.webp',
                data: '08/08/2023',
                estrelas: 3,
                avaliacao: 'Pizza muito boa!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Ryan Alves',
                foto: '../img/ryan.webp',
                data: '04/08/2023',
                estrelas: 5,
                avaliacao: 'Essa pizza é demais, recomendo.',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            },
            {
                nome: 'Celso Furtado',
                foto: '../img/celso.webp',
                data: '13/07/2023',
                estrelas: 1,
                avaliacao: 'Pizza chegou fria!',
                comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            }
        ]
    }

]

const pizzasRecomendadas = [

    { 
        id: 7,
        nome: "Pizza de peperoni com queijo e tomate",
        preco: "16,00",
        imagem: "../img/pizza-4.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    { 
        id: 8,
        nome: "Pizza brotinho com queijo e tomate",
        preco: "12,00",
        imagem: "../img/pizza-5.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    { 
        id: 9,
        nome: "Pizza de peperoni com queijo e tomate",
        preco: "16,00",
        imagem: "../img/pizza-4.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    { 
        id: 10,
        nome: "Pizza brotinho com queijo e tomate",
        preco: "12,00",
        imagem: "../img/pizza-5.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    { 
        id: 11,
        nome: "Pizza de peperoni com queijo e tomate",
        preco: "19,00",
        imagem: "../img/pizza-4.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    { 
        id: 12,
        nome: "Pizza brotinho com queijo e tomate",
        preco: "12,00",
        imagem: "../img/pizza-5.webp",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }

]

const bebidas = [

    {
        nome: 'Coca-Cola',
        imagem: '../img/coca.webp',
        preco: 'R$ 14,99',
        descricao: [
            'Refrigerante Garrafa 3l',
            'Embalagem Econômica'
        ]
    },
    {
        nome: 'Cerveja Heineken',
        imagem: '../img/cerveja.webp',
        preco: 'R$ 17,99',
        descricao: [
            'Refrigerante Garrafa 3l',
            'Embalagem Econômica'
        ]
    },
    {
        nome: 'Coca-Cola',
        imagem: '../img/coca.webp',
        preco: 'R$ 14,99',
        descricao: [
            'Refrigerante Garrafa 3l',
            'Embalagem Econômica'
        ]
    },
    {
        nome: 'Cerveja Heineken',
        imagem: '../img/cerveja.webp',
        preco: 'R$ 17,99',
        descricao: [
            'Refrigerante Garrafa 3l',
            'Embalagem Econômica'
        ]
    }

]

const criarCategorias = (categoria) => {

    const li = document.createElement('li')
    const button = document.createElement('button')
    button.classList.add('category')
    const img = document.createElement('img')
    img.src = categoria.imagem
    img.alt = categoria.descricao

    li.appendChild(button)
    button.appendChild(img)

    return li

}

const criarPizza = (pizza) => {

    const button = document.createElement('button')
    button.classList.add('pizza')
    button.style.backgroundImage = `url("${pizza.imagem}")`
    button.id = pizza.id

    const a = document.createElement('a')
    a.href = './pizza-info.html'

    const span = document.createElement('span')
    span.textContent = `R$ ${pizza.preco}`
    span.classList.add('preco')

    const p = document.createElement('p')
    p.textContent = pizza.nome
    p.classList.add('nome')

    button.appendChild(a)
    a.replaceChildren(span, p)

    return button

}

const criarBebida = (bebida) => {

    const bebidaCard = `
        <button class="bebida">
            <a href="#">
                <div class="drink">
                    <img src="${bebida.imagem}" id="${bebida.nome}">
                    <div class="drink-info">
                        <span class="nome-drink"> ${bebida.nome}</span>
                        <ul class="desc-drink">
                            <li>${bebida.descricao[0]}</li>
                            <li>${bebida.descricao[1]}</li>
                        </ul>
                    </div>
                </div>
                <span class="preco"> ${bebida.preco} </span>
            </a>
        </button>
    `

    return bebidaCard

}

categorias.forEach((categoria) => {

    let li = criarCategorias(categoria)
    const ul = document.getElementById('foods')
    ul.appendChild(li)

})

pizzasFavoritas.forEach((pizza) => {
    let button = criarPizza(pizza)
    const containerPizza = document.getElementById('pizzas-fav')
    containerPizza.appendChild(button)
})

pizzasRecomendadas.forEach((pizza) => {
    let button = criarPizza(pizza)
    const containerPizza = document.getElementById('pizzas-recomend')
    containerPizza.appendChild(button)
})

bebidas.forEach((bebida) => {

    let bebidaCard = criarBebida(bebida)
    const containerBebida = document.getElementById('container-drinks')
    containerBebida.insertAdjacentHTML('beforeend', bebidaCard)

})

selecionarPizza()

const pizzas = pizzasFavoritas.concat(pizzasRecomendadas)

const selecionaPizza = (id) => {

    let pizzaSelecionada

    pizzas.forEach((pizza) => {

        if(pizza.id == id){
            pizzaSelecionada = pizza
        }

    })

    return pizzaSelecionada

}

export {
    selecionaPizza
}