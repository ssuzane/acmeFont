'use strict'

//importanto as infos

export  async function getFilme () {

    const url = 'https://filmesback-end.onrender.com/v2/AcmeFilmes/listarFilmes';
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes

}

export async function postFilme(filme) {

const url = 'http://localhost:8080/v2/acmeFilmes/filme';
const options = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },

    body: JSON.stringify(filme)
}

const response = await fetch(url,options)
return response.ok

}


const filme = {

}


export async function deleteFilme(id) {

    const url = ""
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url,options)
    return response.ok
}