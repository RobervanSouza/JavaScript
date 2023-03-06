
/*
console.log(
    //document.querySelectorAll(".times") // todos
   // document.getElementById("europeu").querySelectorAll(".times")// soementi times europeus
    document.getElementById("europeu").querySelectorAll(".times")[0] // somente oprimeiro
)
*/

//3 ########################## adiciona novo elemento

// console.log(
//     document.getElementById('p1').innerHTML
// )
// document.getElementById('p1').innerHTML = "novo" // novo conteudo
//3 cria imagem

// let pa = document.getElementById('p1');// acresc3enta
// pa.innerHTML = "novo p";
// pa.style.display = "flex"
// pa.style.color = "red"

// let imagem = document.getElementById("imagem");
// imagem.src="dia.png"// colocar imagem
// 3 creteElement

let imagem = document.createElement("img");
imagem.src = "dia.png"

let paragrafo = document.createElement("p")
paragrafo.innerHTML = "ola mundo"
console.log(imagem ,paragrafo)

//3 acresncetar filho no viv pai

let p = document.createElement("p")
p.innerHTML= "novo chieldren"

let imgem = document.createElement("img")
imgem.src= "dia.png"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(imagem)
document.getElementById("conteudo").removeChild(imagem)
