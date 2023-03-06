// CRUD

/*
    C = CREATE -> CRIAR
    R = READ   -> LER
    U = UPDATE -> ATUALIZAR
    D = DELETE -> APAGAR
*/

/*  localStorage 5MB
    Storage = armazenamento
    local = local (no caso, no Browser)
*/

// localStorage.setItem('nome', 'Edson')
// localStorage.setItem('nome', 'Edson Maia')
// localStorage.setItem('idade', 41)
// console.log(localStorage.getItem('nome'))
// localStorage.removeItem('nome')
// console.log(localStorage.getItem('idade'))

// localStorage.clear()
// console.log(localStorage.getItem('nome'))
// console.log(localStorage.getItem('idade'))

// LOCALHOST USANDO ARRAYS E OBJETOS
// localStorage.setItem('lista', ['azul', 'verde', 'vermelho'])
// console.log(localStorage.getItem('lista'))

// QUANDO FOR FAZER INSERÇÕES DE OBJETOS USE O MÉTODO JSON.stringify({objeto})
// localStorage.setItem('usuario', JSON.stringify({'nome': 'Edson', 'idade': 41}))

// QUANDO FOR FAZER A LEITURA DE DADOS DE OBJETOS USE O MÉTODO JSON.parse(objeto)
// console.log(JSON.parse(localStorage.getItem('usuario')))
