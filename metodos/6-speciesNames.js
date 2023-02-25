const data = require('./database');

//6 - Imprima todos os nomes das espécies

function speciesNames() {
  return data.species.reduce((prev, curr) => { // o primeiro retorno e da função speciesNames, o segundo e do reduce. O PREV, pega os valores atuais. O CURR trata os valores que pegou. FAZ UMA BUSCA EM TODOS OS OBJETOS
    return [...prev, curr.name]; // ...spred operation (espalha e coloca ele em [])=> o prev pega os valores que esta no array e corr transforma eles em um novo array
  }, []);// O QUE COLOCAR AQUI E O PRIMEIRO ELEMENTO DE UM ARRAY
}


console.log(speciesNames());