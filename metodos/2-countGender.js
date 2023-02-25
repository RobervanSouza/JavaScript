const array = require('./database');

//2 - Contar a quantidade de personagens através do sexo

function countGender(genero) {
  if(genero === 'M' || genero === 'F'){ // no json tem o parametro gender 
    return array.characters.filter((character) => character.gender === genero).length;
    // sem o length tras todos os personagens encontrados. com length tra so a quantidade
    // traz todos os que dera certos. o GENDER esta no json onde enconta o personagem 
  } else {
    return 'Valor inválido';// se colocar um valor que não seja M ou F, 
  }
}

console.log(countGender('M'));
console.log(countGender('F'));