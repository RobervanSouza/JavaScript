let instrucoes = document.querySelector('#instrucoes');
let aviso = document.querySelector('#aviso');
let progresso = document.querySelector('#progresso');
let pontos = 0;
let placar = 0;

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')
const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    alternativaD: "Alternativa D",
    correta: "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "Boreal é o mesmo que...",
    alternativaA: "Sul",
    alternativaB: "Leste",
    alternativaC: "Norte",
    alternativaD: "Oeste",
    correta: "Norte",
}
const q2 = {
    numQuestao: 2,
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    alternativaC: "Salvador",
    alternativaD: "Lisboa",
    correta: "Brasília",
}
const q3 = {
    numQuestao: 3,
    pergunta: "Austral é o mesmo que...",
    alternativaA: "Oeste",
    alternativaB: "Leste",
    alternativaC: "Norte",
    alternativaD: "Sul",
    correta: "Sul",
}
const q4 = {
    numQuestao: 4,
    pergunta: "A linha do Equador divide a Terra em...",
    alternativaA: "Leste e Oeste",
    alternativaB: "Norte e Sul",
    alternativaC: "Verão e Inverno",
    alternativaD: "Solstícios e Eclipses",
    correta: "Norte e Sul",
}
const q5 = {
    numQuestao: 5,
    pergunta: "Nascente é o mesmo que...",
    alternativaA: "Lado que o sol nasce",
    alternativaB: "Abaixo do Equador",
    alternativaC: "Lado que o sol se põe",
    alternativaD: "Acima do Equador",
    correta: "Lado que o sol nasce",
}
const q6 = {
    numQuestao: 6,
    pergunta: "Qual é o clima predominante do Brasil?",
    alternativaA: "Polar",
    alternativaB: "Tropical",
    alternativaC: "Desértico",
    alternativaD: "Temperado do Norte",
    correta: "Tropical",
}
const q7 = {
    numQuestao: 7,
    pergunta: "Poente é o mesmo que...",
    alternativaA: "Lado onde o sol se põe",
    alternativaB: "Lado onde o sol nasce",
    alternativaC: "Abaixo do Equador",
    alternativaD: "Acima do Equador",
    correta: "Lado onde o sol se põe",
}
const q8 = {
    numQuestao: 8,
    pergunta: "O Brasil se localiza em qual continente?",
    alternativaA: "África",
    alternativaB: "Europa",
    alternativaC: "Oceania",
    alternativaD: "América",
    correta: "América",
}
const q9 = {
    numQuestao: 9,
    pergunta: "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA: "Belém",
    alternativaB: "São Luís",
    alternativaC: "Macapá",
    alternativaD: "Boa Vista",
    correta: "Macapá",
}
const q10 = {
    numQuestao: 10,
    pergunta: "Considerando a extensão territorial o Brasil é o ...",
    alternativaA: "3º maior",
    alternativaB: "2º maior",
    alternativaC: "4º maior",
    alternativaD: "5º maior",
    correta: "5º maior",
}


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
let numero = document.querySelector('#numero')
let total = document.querySelector('#total')
numero.textContent = (q1.numQuestao)
let totalDeQuestoes = (questoes.length) - 1
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD



a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')


function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[ nQuestao ].numQuestao
    pergunta.textContent = questoes[ nQuestao ].pergunta
    a.textContent = questoes[ nQuestao ].alternativaA
    b.textContent = questoes[ nQuestao ].alternativaB
    c.textContent = questoes[ nQuestao ].alternativaC
    d.textContent = questoes[ nQuestao ].alternativaD
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    d.setAttribute('value', nQuestao + 'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if (numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})
function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}
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

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[ numeroDaQuestao ].correta
    //console.log("RespC " + certa)

    if (respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
       
        pontos += 10 // pontos = pontos + 10
        if (nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
    
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function () {

        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}
function fimDoJogo() {

    

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto" + s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function () {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia  e responda as questões abaixo'
    }, 4000)

}