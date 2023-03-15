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

let letras = document.querySelector('')
function avisaQueTeclou(){
    aviso.textContent = ('esta digitando')
    aviso.classList.add('alerta')
    setTimeout(function () {
        formulario.reset()
        aviso.textContent = ''
        aviso.classList.remove('alerta')
    }, 3000);
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#titulo');

botaoEnviar.addEventListener("mouseover", function (){
  this.style.backgroundColor = "red";
}
)