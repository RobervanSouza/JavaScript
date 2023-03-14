let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')
 
 
 function carregou(){
     formulario.reset() // limpar form
     aviso.textContent = 'A pagina carregou'
     aviso.classList.add('alerta')
     setTimeout(function () {
         aviso.textContent = ''
         aviso.classList.remove('alerta')
     }, 3000);
 }
 
function focou() {
    formulario.reset() // limpar form
    aviso.textContent = 'O mouse esta no titulo'
    aviso.classList.add('alerta')
    setTimeout(function () {
        aviso.textContent = ''
        aviso.classList.remove('alerta')
    }, 3000);
}
function rolouPagina(){
    formulario.reset() // limpar form
    aviso.textContent = 'Scroll na Pagina'
    aviso.classList.add('alerta')
    setTimeout(function () {
        aviso.textContent = ''
        aviso.classList.remove('alerta')
    }, 3000);
}

function focoNoCampo(){
    formulario.reset() // limpar form
    aviso.textContent = 'Clicou no formulario'
    aviso.classList.add('alerta')
    setTimeout(function () {
        aviso.textContent = ''
        aviso.classList.remove('alerta')
    }, 3000);
}
function semFocoNoCampo() {
    formulario.reset() // limpar form
    aviso.textContent = 'Saiu do formulario'
    aviso.classList.add('alerta')
    setTimeout(function () {
        aviso.textContent = ''
        aviso.classList.remove('alerta')
    }, 3000);
}
let letras = document.querySelector('input[type=text]')
function avisarQueTeclou(){
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
    
    formulario.reset() // limpar form
    aviso.textContent = ('', + (letras.value.length + numLetras))
    aviso.classList.add('alerta')
    setTimeout(function () {
        aviso.textContent = ''
        aviso.classList.remove('alerta')
    }, 3000);
}