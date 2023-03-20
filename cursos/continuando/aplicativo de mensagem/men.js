let citacao00 = document.querySelector('#citacao00')
let dataCitacao = citacao00.querySelector('h2')
let textoCitacao = citacao00.querySelector('blockquote')
let autoriaCitacao = citacao00.querySelector('span')

let aviso = document.querySelector("#aviso");

function criarCitacao(){
    let dataInput = document.querySelector('#data').value
    let citacao = document.querySelector('#citacao').value
    let autoria = document.querySelector('#autoria').value

    let data = new Date(dataInput)
    let dataEnviada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'}) ;
    if(dataInput == '' || citacao == '' || autoria == ''){
        abrirModal()
    } else {
        criarMensagem(dataEnviada, citacao, autoria)
        window.scroll(0, 670)
    }
}
function abrirModal(){
    location.href="#abrirModal"
}

function criarMensagem(data, citacao, autoria){
    dataCitacao.textContent = data
    textoCitacao.textContent = citacao
    autoriaCitacao.textContent = autoria

    download()
}

function download() {
    html2canvas(citacao00).then(canvas => {
        document.body.appendChild(canvas)
    })

    let aviso2 = document.querySelector('#aviso2')
    aviso2.textContent = "Clique com o botão direito e escolha Salvar imagem como..."
}
const btnLimpar = document.querySelector('#btnLimpar')

btnLimpar.addEventListener('click', () => {
    document.location.reload()
    window.scroll(0, 0)
})