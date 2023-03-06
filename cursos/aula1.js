//window.alert("teste")

//3 brouser object model(bom) e para navegador
// 1 document object model(dom) elemento HTML


window.console.log(
    //window.document.getElementById("div1").innerHTML pega a div
    window.document.getElementById("div1").innerHTML// pega o conteuda 

)
//3 brouser object model(bom) e para navegador

console.log(
    screen // VER QUAIS METODOS TEM DENTRO
    
)



 // 3  location.href = "https://www.globo.com/" // redireciona par a pagina

 function voltar(){
    history.back();
 }
 function proxima(){
    history.forward();
 }
 //3 ###################################################################

 //console.log(screen.width)
 //alert(screen.width)
 document.getElementById("scren").innerHTML= screen.width // iner atribui o valor adiciona na div screen

 //3###################################################################

 console.log(

   // document.getElementById("fruta")// pega a div no console
   document.getElementById("fruta").innerHTML// pega o conteudo da div no console
 )

 console.log(

  // document.getElementsByClassName("carro")[0] // no console
   document.getElementsByClassName("carro")[0].innerHTML // mostra o conteudo console
 )
 //3###################################################################

 console.log(
    document.getElementsByTagName("div")[0] // pega a div no console sem id ou class
 )

 console.log(
    //document.querySelector("div") // pega a primeira elemento = div1
    document.querySelector(".div2") // pega a div2
 )