var usuarios = {
    usuario: [
        {
            id: 1,
            nome: 'Ryan',
            email: 'ryan@gmail.com',
            senha: '1234',
            fotoPerfil: '/img/ryan.webp',
            telefone: '11 986351543',
            endereco: [
                {
                    logradouro: 'Rua Bonita',
                    cidade: 'Jandira',
                    uf: 'SP'
                }
            ]
        },
        {
            id: 2,
            nome: 'Gabriela',
            email: 'gabriela@gmail.com',
            senha: 'bcd0808',
            fotoPerfil: '/img/gabriela.webp',
            telefone: '11 972870187',
            endereco: [
                {
                    logradouro: 'Rua Luiz Scott',
                    cidade: 'Barueri',
                    uf: 'SP'
                }
            ]
        },
        {
            id: 3,
            nome: 'Arthur Lopes',
            email: 'arthur@gmail.com',
            senha: 'gabriela',
            fotoPerfil: '/img/arthur.webp',
            telefone: '11 959449434',
            endereco: [
                {
                    logradouro: 'Rua Ipixuna',
                    cidade: 'Carapicuíba',
                    uf: 'SP'
                }
            ]
        },
        {
            id: 4,
            nome: 'Suzi Daniela',
            email: 'suzi@gmail.com',
            senha: 'matematica',
            fotoPerfil: '/img/suzi.webp',
            telefone: '11 975353670',
            endereco: [
                {
                    logradouro: 'COHAB 2',
                    cidade: 'Carapicuíba',
                    uf: 'SP'
                }
            ]
        }
    ]
}

var produtos = {
    pizzas: [
        {
            id: 1,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-1.webp',
            estrelas: 5,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 3,
                    usuario: {
                        nome: 'Arthur Lopes de Oliveira Barbosa',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '24/12/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
                

            ]
        },
        {
            id: 2,
            nome: 'Pizza de pepperoni com queijo',
            preco: '19,00',
            imagem: '/pizza-2.webp',
            estrelas: 4,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },

            ]
        },
        {
            id: 3,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-3.webp',
            estrelas: 2,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '08/08/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }

            ]
        },
        {
            id: 4,
            nome: 'Pizza de pepperoni com queijo',
            preco: '19,00',
            imagem: '/pizza-2.webp',
            estrelas: 4,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Arthur Lopes de Oliveira Barbosa',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '24/12/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },

            ]
        }, 
        {
            id: 5,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-3.webp',
            estrelas: 2,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Suzi Daniela',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '26/02/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }

            ]
        },
        {
            id: 6,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-1.webp',
            estrelas: 5,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 3,
                    usuario: {
                        nome: 'Arthur Lopes',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '24/12/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
                

            ]
        },
        {
            id: 7,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-3.webp',
            estrelas: 2,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Suzi Daniela',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '26/02/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }

            ]
        },
        {
            id: 8,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-1.webp',
            estrelas: 5,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 3,
                    usuario: {
                        nome: 'Suzi Daniela',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '26/02/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
                

            ]
        },
        {
            id: 9,
            nome: 'Pizza de pepperoni com queijo',
            preco: '19,00',
            imagem: '/pizza-2.webp',
            estrelas: 4,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },

            ]
        },
        {
            id: 10,
            nome: 'Pizza de calabreza com queijo',
            preco: '19,00',
            imagem: '/pizza-1.webp',
            estrelas: 5,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 3,
                    usuario: {
                        nome: 'Suzi Daniela',
                        id: 3,
                    },
                    estrelas: 1,
                    data: '26/02/2023',
                    titulo: 'Pizza chegou fria 😒',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
                

            ]
        },
        {
            id: 11,
            nome: 'Pizza de pepperoni com queijo',
            preco: '19,00',
            imagem: '/pizza-2.webp',
            estrelas: 4,
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [

                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },

            ]
        },
        {
            id: 12,
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: '19,65',
            imagem: '/pizza-4.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 13,
            nome: 'Pizza brotinho com queijo e tomate',
            preco: '24,99',
            imagem: '/pizza-5.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 14,
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: '19,65',
            imagem: '/pizza-4.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 15,
            nome: 'Pizza brotinho com queijo e tomate',
            preco: '24,99',
            imagem: '/pizza-5.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 16,
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: '19,65',
            imagem: '/pizza-4.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 17,
            nome: 'Pizza brotinho com queijo e tomate',
            preco: '24,99',
            imagem: '/pizza-5.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 18,
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: '19,65',
            imagem: '/pizza-4.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 19,
            nome: 'Pizza brotinho com queijo e tomate',
            preco: '24,99',
            imagem: '/pizza-5.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 20,
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: '19,65',
            imagem: '/pizza-4.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 21,
            nome: 'Pizza brotinho com queijo e tomate',
            preco: '24,99',
            imagem: '/pizza-5.webp',
            estrelas: 5,
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    id: 1,
                    usuario: {
                        nome: 'Ryan Alves de Carvalho',
                        id: 1,
                    },
                    estrelas: 5,
                    data: '04/08/2023',
                    titulo: 'Essa pizza é demais, recomendo!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    id: 2,
                    usuario: {
                        nome: 'Gabriela Fernandes Cavalcanti',
                        id: 2,
                    },
                    estrelas: 3,
                    data: '08/08/2023',
                    titulo: 'Pizza muito boa!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
    ],
    bebidas: [
        {
            id: 1,
            nome: 'Coca-Cola',
            preco: 15.99,
            imagem: '/coca.webp',
            caracteristicas: [
                'Refrigerante Garrafa 2l',
                'Embalagem Econômica'
            ]
        },
        {
            id: 2,
            nome: 'Cerveja Heineken',
            preco: 19.99,
            imagem: '/cerveja.webp',
            caracteristicas: [
                'Cerveja Heineken 500ml',
                'Embalagem Econômica'
            ]
        },
        {
            id: 3,
            nome: 'Coca-Cola',
            preco: 15.99,
            imagem: '/coca.webp',
            caracteristicas: [
                'Refrigerante Garrafa 2l',
                'Embalagem Econômica'
            ]
        },
        {
            id: 4,
            nome: 'Cerveja Heineken',
            preco: 19.99,
            imagem: '/cerveja.webp',
            caracteristicas: [
                'Cerveja Heineken 500ml',
                'Embalagem Econômica'
            ]
        },
        {
            id: 5,
            nome: 'Coca-Cola',
            preco: 15.99,
            imagem: '/coca.webp',
            caracteristicas: [
                'Refrigerante Garrafa 2l',
                'Embalagem Econômica'
            ]
        },
        {
            id: 6,
            nome: 'Cerveja Heineken',
            preco: 19.99,
            imagem: '/cerveja.webp',
            caracteristicas: [
                'Cerveja Heineken 500ml',
                'Embalagem Econômica'
            ]
        },
        {
            id: 7,
            nome: 'Coca-Cola',
            preco: 15.99,
            imagem: '/coca.webp',
            caracteristicas: [
                'Refrigerante Garrafa 2l',
                'Embalagem Econômica'
            ]
        },
        {
            id: 8,
            nome: 'Cerveja Heineken',
            preco: 19.99,
            imagem: '/cerveja.webp',
            caracteristicas: [
                'Cerveja Heineken 500ml',
                'Embalagem Econômica'
            ]
        }
    ]
}

var categorias = {
    categoria: [
        {
            id: 1,
            nome: 'Pizzas',
            imagem: '/icons/Logo.svg'
        },
        {
            id: 2,
            nome: 'Refrigerante',
            imagem: '/icons/Soda.svg'
        },
        {
            id: 3,
            nome: 'Frutas',
            imagem: '/icons/Watermelon.svg'
        },
        {
            id: 4,
            nome: 'Pizzas',
            imagem: '/icons/Pizza.svg'
        },
        {
            id: 5,
            nome: 'Sorvete',
            imagem: '/icons/Sundae.svg'
        },
        {
            id: 6,
            nome: 'Sobremesas',
            imagem: '/icons/Ice-Cream.svg'
        },
        {
            id: 7,
            nome: 'Pizzas',
            imagem: '/icons/Logo.svg'
        },
        {
            id: 8,
            nome: 'Refrigerante',
            imagem: '/icons/Soda.svg'
        },
        {
            id: 9,
            nome: 'Frutas',
            imagem: '/icons/Watermelon.svg'
        },
        {
            id: 10,
            nome: 'Pizzas',
            imagem: '/icons/Pizza.svg'
        },
        {
            id: 11,
            nome: 'Sorvete',
            imagem: '/icons/Sundae.svg'
        },
        {
            id: 12,
            nome: 'Sobremesas',
            imagem: '/icons/Ice-Cream.svg'
        },
        {
            id: 13,
            nome: 'Pizzas',
            imagem: '/icons/Logo.svg'
        },
        {
            id: 14,
            nome: 'Refrigerante',
            imagem: '/icons/Soda.svg'
        },
        {
            id: 15,
            nome: 'Frutas',
            imagem: '/icons/Watermelon.svg'
        },
        {
            id: 16,
            nome: 'Pizzas',
            imagem: '/icons/Pizza.svg'
        },
        {
            id: 17,
            nome: 'Sorvete',
            imagem: '/icons/Sundae.svg'
        },
        {
            id: 18,
            nome: 'Sobremesas',
            imagem: '/icons/Ice-Cream.svg'
        },
        {
            id: 19,
            nome: 'Pizzas',
            imagem: '/icons/Logo.svg'
        },
        {
            id: 20,
            nome: 'Refrigerante',
            imagem: '/icons/Soda.svg'
        },
        {
            id: 21,
            nome: 'Frutas',
            imagem: '/icons/Watermelon.svg'
        },
        {
            id: 22,
            nome: 'Pizzas',
            imagem: '/icons/Pizza.svg'
        },
        {
            id: 23,
            nome: 'Sorvete',
            imagem: '/icons/Sundae.svg'
        },
        {
            id: 24,
            nome: 'Sobremesas',
            imagem: '/icons/Ice-Cream.svg'
        },
        {
            id: 25,
            nome: 'Pizzas',
            imagem: '/icons/Logo.svg'
        },
        {
            id: 26,
            nome: 'Refrigerante',
            imagem: '/icons/Soda.svg'
        },
        {
            id: 27,
            nome: 'Frutas',
            imagem: '/icons/Watermelon.svg'
        },
        {
            id: 28,
            nome: 'Pizzas',
            imagem: '/icons/Pizza.svg'
        },
        {
            id: 29,
            nome: 'Sorvete',
            imagem: '/icons/Sundae.svg'
        },
        {
            id: 30,
            nome: 'Sobremesas',
            imagem: '/icons/Ice-Cream.svg'
        }
    ]
}

module.exports = {
    usuarios,
    produtos,
    categorias
}