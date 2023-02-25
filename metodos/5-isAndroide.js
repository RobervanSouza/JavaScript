const data = require('./database');

//6 - Imprimir se existe algum personagem de uma determinada espécie. True ou False. Caso o retorno seja True, traga os nomes de todos os personagens desta espécie.

function isAndroide(specie) {
  let names = [];//
  if(data.species.some((specieSome) => specieSome.name === specie) === true){// procura pelo nome em cada elemento se tiver traz true, se tiver a especie encontrada
    let findId = data.species.find((findId) => findId.name === specie);// faz uma busca para encontrar o id da specie
    for(let index = 0; index < data.characters.length; index += 1){// faz a busca no array character e traz o id 
      if(findId.id === data.characters[index].speciesId){ // faz uma busca e encontra o personagem
        names.push(data.characters[index].name);// se encontrar faz um push e manda para a variavel name
      }
    }
  } else {
    console.log('Espécie não encontrada');
  }
  return names;
}

console.log(isAndroide("Saiyans",),'personagens encontrados');
