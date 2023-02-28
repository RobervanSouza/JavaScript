const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];
//3   1 Reverse

const reverse = data.reverse();
//console.log(reverse , 'reverte')// 3 inverte a sequencia
//3 2 Find
const salario = 3000

const maiorSalario = data.find((user) => user.sallary> salario);
//console.log(maiorSalario) 

// 3 Findeindex
 const menorSalario = data.findIndex((user) => user.sallary > 0 && user.sallary <2000)
 //console.log(menorSalario)
 data[menorSalario].sallary += 2000
 //console.log(data)

 //3 4 includes
 const numeros = [1,2,3,4,5,6,7,8,9,10]
 const pesquisa = numeros.includes(4) // ver se existi 4 na lista
 //console.log(pesquisa)
 
 
 //3 map

 //data.map((user) => (user.driverLicense = false) )
 //console.log(data)

 //3 filter

 const filtrar= data.filter((user) => user.driverLicense) // busca os que são true
// console.log(filtrar)


//3 Reduce

const  reduceTeste =  data.reduce((total, user) => (total += user.sallary),0) // soma todos os salarios
// console.log(reduceTeste)

// 3 ForEach

const nomes = (users) => { 
    users.forEach((user) => {
       // console.log(`ole ${user.name}`)
    })
}
nomes(data)

// 3 some 

let someteste = data.some((user) => user.driverLicense) // pesquisa para ver se tem true no array
//console.log(someteste)


//3 every

const everynome = data.every((user) => user.name)
console.log(everynome)