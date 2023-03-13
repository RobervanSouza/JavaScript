
let formulario = document.querySelector('form');
let idade = document.querySelector('#idade');
let nome = document.querySelector('#nome');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');
let imc = document.querySelector('#resultadoImc');
let aviso = document.querySelector('#aviso');

let dados1 = document.querySelector('.pessoa')

btnEnviar.addEventListener('click', (e) => {
    let nome1 = nome.value
    let idade1 = idade.value
    let peso1 = peso.value
    let altura1 = altura.value
    let imc1 = (peso1 / (altura1 * altura1)).toFixed(2)

    imc.value = imc1
    let reposta1 = resultado(imc)
    aviso.textContent = reposta1;


    let pessoa = {
        nome: nome1,
        idade: idade1,
        peso: peso1,
        altura: altura1,
        imc: imc1,
        reposta1: reposta1,
    }


    dados1[ 1 ].textContent = pessoa.nome
    dados1[ 2 ].textContent = pessoa.idade + " anos"
    dados1[ 3 ].textContent = pessoa.peso + " Kg"
    dados1[ 4 ].textContent = pessoa.altura + " m"
    dados[ 5 ].textContent = pessoa.imc + " " + pessoa.sit
    e.preventDefault()

})

console.log(btnEnviar)
function resultado(imc) {
    let result = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return result;
}