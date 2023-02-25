//3 - Verificar se o personagem possui poderes ou não. Adicionar a propriedade isFighter com o valor true (para quando tiver poderes) ou false (quando não tiver poderes). Faça isso para todos os personagens.

const data = require('./database');

function isFighter() {
  data.characters.forEach((character) => { // O FOREACH  pega o array e modifica ele passando novos valores ou propriedades
    if(character.powers.length === 0){// ve quantos funcionarios tem poder
      character.isFighter = false;
    } else {
      character.isFighter = true;
    }
  })
  return data.characters;
}

console.log(isFighter());
