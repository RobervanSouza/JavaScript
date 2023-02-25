const data = require('./database');

//4 - Ordenar os personagens através de um parâmetro

const ordered = data.characters.sort((a, b) => a.gender.localeCompare(b.gender));
// o sort ordena cada elemento. //3 O localeCompara, compara os elemento e armazena na conta order
// tra primeiro o m e depois o f (e so um exemplo)
console.log(ordered);