const instrucoes = document.querySelector('#instrucoes');
let aviso = document.querySelector('#aviso');
let progresso = document.querySelector('#progresso');
let pontos = 0;
let placar = 0;
let acertou = document.querySelector('#acertou');
let nQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')
let conteudo = document.querySelector('.conteudo')
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let situacao = document.querySelector("#situacao")
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')
let media = document.querySelector("#media")
let numero = document.querySelector('#numero')
let total = document.querySelector('#total')
let placa = document.querySelector(".placa")
let resultado = document.querySelector(".resultado")
let botao = document.querySelector("#reiniciar")
const url = "./data.json"
function pegarDados(i) {

    const api = fetch(url).then((response) => response.json()).then(data => {

        if (data.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }

        // passar o quantidade de questoes para a variavel
        let qtdQuestoes = (data.questoes.length) - 1
        // escrver a qtdQuestoes para total
        total.textContent = parseInt(qtdQuestoes)

        // passe o valor de i no parametro
        atribuirDados(data, i)
        console.log(data)

    })


} // fim pegarDados
function atribuirDados(data, index) {
    if (index >= data.questoes.length) {
        // 
        //console.log('Fim das questoes')
        index = 1
    }
    nQuestao.textContent = data.questoes[ index ].numQuestao
    pergunta.textContent = data.questoes[ index ].pergunta

    a.textContent = data.questoes[ index ].alternativaA
    b.textContent = data.questoes[ index ].alternativaB
    c.textContent = data.questoes[ index ].alternativaC
    d.textContent = data.questoes[ index ].alternativaD

    numero.textContent = data.questoes[ index ].numQuestao

    let certa = document.querySelector('#correct')
    certa.value = data.questoes[ index ].correta
   
}

// COMECAR O QUIZ
let questaoAtual = 1
pegarDados(1)

function proximaQuestao(numQuestao) {
    let proxima = parseInt(numQuestao)
    pegarDados(proxima)
    progresso.value = parseInt(progresso.value) + 1
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    //console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida)

    // usar o fetch para pegar os dados
    pegarDados(numeroDaQuestao)

    let respostaCorrect = correct.value
    console.log(respostaCorrect, "resposta")

    if (respostaEscolhida == respostaCorrect) {
        
        pontos += 10 // pontos = pontos + 10
    } else {
       
        console.log("Errou!")

    }
    setTimeout(() => {
        tirarPiscar()
    }, 50);

    quantidadeDeQuestoes = parseInt(total.textContent)
    //console.log("Total " + quantidadeDeQuestoes)

    proxima = parseInt(numero.textContent) + 1
    //console.log("Próxima " + proxima)

    setTimeout(function () {

        if (proxima > quantidadeDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 50)

    // atualizar o placar
    atualizarPlacar()

}

function atualizarPlacar() {
    placar.textContent = pontos
}

function fimDoJogo() {



    let s = 's'
    pontos == 0 ? s = '' : s = s
    const resmedia = (pontos / 12);
    media.value = parseFloat(resmedia).toFixed(2)
    if (resmedia >= 6) {

        situacao.value = "Aprovado"
        
    } else if (resmedia <= 4) {

        situacao.value = "Reprovado"
    } else {

        situacao.value = "Em-Recuperação"
    }

   
    conteudo.style.display = 'none';
    resultado.style.display = "flex"

    // OCULTAR O ARTICLE DA QUESTAO



}
botao.addEventListener("click", () => {
    
    pontos = 0 // zerar placar
    instrucoes.classList.remove('placar')
    conteudo.style.display = 'flex';
    resultado.style.display = "none"
    proximaQuestao(1)
    
})
function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}
