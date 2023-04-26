// EXERCÍCIO 3 - Página 45 do livro Lógica de Programação e Algoritmos com JavaScript de Edécio Iepsen

// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

let preco = 60;
let avista = preco * (10/100);
let parcelado = preco / 3;
console.log(`preço total da compra ${preco}`)
console.log(`preço á vista ${Math.abs(avista - preco)}`) // tira os traços
console.log(`preço parcelado ${parcelado}`)