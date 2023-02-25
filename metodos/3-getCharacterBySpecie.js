const data = require('./database');

//3 - Mostre o primeiro personagem de acordo com o id da espécie

function Specie(id) {
  return data.characters.find((specie) => specie.speciesId === id);
  // o find traz apenas o primeiro
}

console.log(Specie(2));
