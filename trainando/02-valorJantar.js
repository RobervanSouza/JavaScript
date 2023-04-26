// EXERCÍCIO 2 - Página 41 do livro Lógica de Programação e Algoritmos com JavaScript de Edécio Iepsen

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let valorJantar = 100;
let valorGarson = valorJantar * (10/100)
let conta = valorJantar  + valorGarson;

console.log(`O valor do jantar e ${valorJantar}R$`)
console.log(`O valor da taxa do garson e ${valorGarson}R$`)
console.log(`O valor a pagar e ${conta}R$`)
