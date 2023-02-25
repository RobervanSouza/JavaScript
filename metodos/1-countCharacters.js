const array = require('./database'); // pegas os itens de um array

//1 - Crie uma função que mostre a quantidade de personagens

function countCharacters() {
  return array.characters.length; ///conta os itens de um array
}

console.log(countCharacters());