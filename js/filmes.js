'use strict'

export  async function getFilme () {

    const url = 'http://10.107.134.63:8080/v2/acmeFilmes/filmes';
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes

}
