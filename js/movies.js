import {getFilme} from './filmes.js'

document.addEventListener('DOMContentLoaded', () =>{

    const main = document.getElementById('main')
    todosFilmes(main)
})

const todosFilmes = async function(main){

    const filmes = await getFilme()

    filmes.filmes.forEach(filmes =>{

        let cardsFilmes = document.createElement('img')
        cardsFilmes.classList.add('movie-cards')
        cardsFilmes.src`${filmes.foto_capa}`
        cardsFilmes.alt`${filmes.nome}`
        let idFilme = filmes.idFilme

        main.appendChild(cardsFilmes)
    })
}