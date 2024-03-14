'use strict'

import { getFilme, postFilme, deleteFilme } from "./filmes.js"

console.table(await getFilme())
console.table(await postFilme())
console.table(await deleteFilme())
