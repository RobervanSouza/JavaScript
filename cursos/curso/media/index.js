let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
}
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    if (mediaFinal >= 6) {
        situacaoFinal = "Aprovado"
    } else if (mediaFinal <= 4) {
     situacaoFinal = 'Reprovado'
    } else{
        situacaoFinal = "Em-Recuperação"
    }
    return situacaoFinal
}

function formatarSituacao (situacaoFinal){
    switch(situacaoFinal) {
        case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break

        case 'Reprovado':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break

        case 'Em-Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
            break

    }
}
// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset() // limpar form
        aviso.textContent = 'Digite uma nota entre 1 e 10'
        aviso.classList.add('alerta')
        setTimeout(function () {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

// CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('click', function (e) {
    
    // pegar o valor que esta dentro das caixas
    // usar metodo parseFloat p converter string p float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)
    
  

    if (isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media).toFixed(2)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', function () {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})
