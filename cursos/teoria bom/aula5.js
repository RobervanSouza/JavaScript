//3 adicionar novo elemento
let lista = document.getElementsByTagName("ul")[0];
let itens = lista.children;

let novo = document.createElement("li");
novo.textContent="novo item";
console.log(novo);
lista.insertBefore(novo, itens[3])// tem a opção de colocar onde quiser

// editar elemento
let lista2 = document.getElementsByTagName("ul")[1];
let itens2 = lista2.children;
let novo2 = document.createElement("li");
novo2.textContent = "novo editado";
lista2.replaceChild( novo2, itens2[1] );
