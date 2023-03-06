
document.getElementById("btn-set").addEventListener("click", function (){
    document.getElementById("title1").setAttribute("class", "red")
})
document.getElementById("remove").addEventListener("click", function (){
    document.getElementById("title1").removeAttribute("class", "red")
})
document.getElementById("get").addEventListener("click", function (){
    var value = document.getElementById("title1").getAttribute("class")
    document.getElementById("class").innerHTML = value
})
var titulo = document.querySelector("h2")
var titulo2 = document.createTextNode("adiciona novo testo")
titulo.appendChild(titulo2)
titulo.textContent= "tambem adiciona"