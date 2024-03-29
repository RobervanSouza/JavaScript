
let relogio = document.querySelector('#relogio')
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')

let data = document.querySelector('#data')
let semana = document.querySelector('#semana')


let dataAtual = new Date();

function Relogio(){
    let momentoAtual = new Date();

    let hora = momentoAtual.getHours();
    let minutos = momentoAtual.getMinutes();
    let segundos = momentoAtual.getSeconds();
    let stringHora = new String(hora)
    let stringMinutos = new String(minutos)
    let stringSegundos = new String(segundos)
    if(stringSegundos.length == 1) segundos = "0" + segundos
    if(stringHora.length == 1) hora =  "0"+ hora
    if(stringMinutos.length == 1) minutos = "0"  + minutos
    hSmart.textContent = hora
    mSmart.textContent = minutos
    sSmart.textContent = segundos
    hSmart.textContent = hora
    mSmart.textContent = minutos
    sSmart.textContent = segundos
    
    setTimeout("Relogio()", 1000)

}
function pegaData() {
    let diaDaSemana = dataAtual.getDay()
    let dia = dataAtual.getDate()
    let mes = dataAtual.getMonth() + 1 
    let ano = dataAtual.getFullYear()

    let strigDia = new String(dia)
    let strigMes = new String(mes)

    if(strigDia.length == 1 ) mes = "0" + dia;
    if (strigMes.length == 1 ) mes = "0" + mes;

    switch (diaDaSemana){
        case 0 : 
        diaDaSemana = "Dom"
        break;
        
        case 1 : 
        diaDaSemana = "Seg"
        break;

        case 2 : 
        diaDaSemana = "Ter"
        break;

        case 3 : 
        diaDaSemana = "Qua"
        break;

        case 4 : 
        diaDaSemana = "Qui"
        break;
         
        case 5 : 
        diaDaSemana = "Sex"
        break;

        case 6 : 
        diaDaSemana = "Sab"
        break;
    }

    let dataAtual1 = dia + "/" + mes + "/" + ano
    semana.textContent = diaDaSemana
    data.textContent = dataAtual1
}

pegaData()





    /* ###################################################*/

const cidade = "https://www.countryflagicons.com/FLAT/64/DE.png";
const key = "557818a8d7e058d695aa1fdee7c6c6b0";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cidadeElement = document.querySelector("#city");
const temperaturalement = document.querySelector("#temperatura span");
const tempoElement = document.querySelector("#tempo");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const weatherElement = document.querySelector("#weather-icon");
const conutryElement = document.querySelector("#country");
const weather = document.querySelector("#wather-data")
// pega os dados da api


searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

  //  console.log("estou clicando no botão")
  const city = cityInput.value// pegao valor da input
  apiCidade(city)
 // console.log(city, "pega o que foi digitado na input")
})

const getApi = async (city) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`
    const res = await fetch(apiURL);
    const data = await res.json();
    //console.log(data , "bucando dados da api");
    return data
}

const apiCidade = async (city) => {
    const data = await getApi(city)
    console.log(data , "pega os dados que foram digitados na input mostra a cidade")
    cidadeElement.innerHTML = data.name;
    temperaturalement.innerHTML = parseInt(data.main.temp);
    tempoElement.innerHTML = data.weather[0].description;
    weatherElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[ 0 ].icon}.png`);
    conutryElement.setAttribute("src", `https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png` );
    umidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed}Km/h`;
    weather.classList.remove("hide")

}
