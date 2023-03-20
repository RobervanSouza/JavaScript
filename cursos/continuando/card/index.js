const imagem = document.querySelector("#image")
const nome = document.querySelector('#nome');
const nacionalidade = document.querySelector('#nacionalidade');
const idade = document.querySelector('#idade');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

const url = "./cards.json"

function dadosApi(index){
    const Api = fetch(url).then(response => response.json()).then(data => {
       

        if(data.erro){
            console.log("erro", data)
            return
        }
        console.log("dados", data)
        let qtdlutadores = (data.lutadores.lenght)
           console.log("lutadores", qtdlutadores)
           atribuirNasClass(data, index)
    })

}
function mandaDados(dados, index){
    imagem.setAttribute("src", "./img/"+dados.lutadores[index].foto)
    nome.textContent = dados.lutadores[index].nome
    nacionalidade.textContent = dados.lutadores[index].nacionalidade
    idade.textContent = dados.lutadores[index].idade + "Anos"
    peso.textContent = (dados.lutadores[index].peso).toString(2)+ " kg"
    altura.textContent = (dados.lutadores[index].altura).toString(2)+ " m"

}

let imgClass = document.getElementsByClassName("foto")
let nomeClass = document.getElementsByClassName("nome")
let nacionalidadeClassName = document.getElementsByClassName("nacionalidade")
let idadeClassName = document.getElementsByClassName("idade")
let pesoClass = document.getElementsByClassName("peso")
let alruraClass = document.getElementsByClassName("altura")
let conteudosCards = document.querySelector(".container")

function atribuirNasClass (dados, index){
    imgClass[ index ].setAttribute('src', "img/" + dados.lutadores[ index ].foto)
    nomeClass[index].textContent = dados.lutadores[ index ].nome
    nacionalidadeClassName[index].textContent = dados.lutadores[index].nacionalidade
    idadeClassName[index].textContent = dados.lutadores[index].idade + " anos"
    pesoClass[index].textContent = dados.lutadores[index].peso + " Kg"
    alruraClass[index].textContent = dados.lutadores[index].altura + " m"
}

function enviarParaCard(index) {
    let card = document.createElement("div")
    card.setAttribute("class", 'form')
    conteudosCards.appendChild(card)

    const imagem = document.createElement("img")
    card.appendChild(imagem)
    imagem.setAttribute("class", "foto")
    imagem.setAttribute('src',"img/")

    const nome = document.createElement("h2")
    nome.setAttribute("class", "nome")
    card.appendChild(nome)
    nome.textContent = "nome"

    const nacionalidade = document.createElement("label")
    nacionalidade.setAttribute("class", "nacionalidade")
    card.appendChild(nacionalidade)
    nacionalidade.textContent = "Nacionalidade"

    let idadeLutador = document.createElement("span")
    idadeLutador.setAttribute('class', 'idade')
    card.appendChild(idadeLutador)
    idadeLutador.textContent = "idade anos"

    let pesoLutador = document.createElement("span")
    pesoLutador.setAttribute('class', 'peso')
    card.appendChild(pesoLutador)
    pesoLutador.textContent = "peso Kg"

    let alturaLutador = document.createElement("span")
    alturaLutador.setAttribute('class', 'altura')
    card.appendChild(alturaLutador)
    alturaLutador.textContent = "altura m"
    dadosApi(index)
}
dadosApi(0)
enviarParaCard(1)
enviarParaCard(2)
enviarParaCard(3)
enviarParaCard(4)
enviarParaCard(5)
enviarParaCard(6)
enviarParaCard(7)
enviarParaCard(8)
enviarParaCard(9)