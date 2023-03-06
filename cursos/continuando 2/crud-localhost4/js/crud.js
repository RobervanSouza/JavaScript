// criar a base de dados
let baseDeDados = []

/**
 * @typedef Usuario
 * @type {object}
 * @property {number} id    - ID.
 * @property {string} nome  - nome.
 * @property {number} idade - idade.
 * @property {string} email - email.
 */

/** @type {Usuario} */
let user1 = { id: 1, nome: 'Edson', idade: 41, email: 'edson@mail.com' }
let user2 = { id: 2, nome: 'Maria', idade: 67, email: 'maria@mail.com' }
let user3 = { id: 3, nome: 'José', idade: 70, email: 'jose@mail.com' }
let user4 = { id: 4, nome: 'Pedro', idade: 71, email: 'pedro@mail.com' }
let user5 = { id: 5, nome: 'Marta', idade: 65, email: 'marta@mail.com' }

// BFF -> backend from front-end

// CREATE
function criarChave(chave, objeto) {
    localStorage.setItem(chave, JSON.stringify(objeto))
}

// NOVA FUNCAO CREATE
function criarChaveNaBase(chave, objeto, baseDeDados) {
    baseDeDados.push(objeto) // fazer o push no array
    localStorage.setItem(chave, JSON.stringify(baseDeDados))
}

// READ
function lerChave(chave) {
    return JSON.parse(localStorage.getItem(chave))
}

// NOVA FUNCAO READ
function lerChavePorPosicao(chave, posicao) {
    return JSON.parse(localStorage.getItem(chave))[posicao]
}

// NOVA FUNCAO UPDATE
function atualizarChavePorPosicao(posicao, objeto) {
    let { nome, idade, email } = objeto
    baseDeDados[posicao] = { 'id': posicao+1, nome, idade, email}
    criarChave('usuarios', baseDeDados)
}

// DELETE
function apagarChave(chave) {
    localStorage.removeItem(chave)
}

// NOVA FUNCAO DELETE
function apagarChavePorPosicao(posicao) {
    baseDeDados.splice(posicao, 1)
    criarChave('usuarios', baseDeDados)
}

// funcao auxiliar
function ver(chave) {
    console.log(lerChave(chave))
}

criarChaveNaBase('usuarios', user1, baseDeDados) // edson
criarChaveNaBase('usuarios', user2, baseDeDados) // maria
criarChaveNaBase('usuarios', user3, baseDeDados) // jose

// console.log(lerChavePorPosicao('usuarios', 1))
atualizarChavePorPosicao(1, user4) // pedro

apagarChavePorPosicao(1)

ver('usuarios')
console.log(baseDeDados)
