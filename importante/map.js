// soma de um array
function solution(inputArray) {

    const newarray =[]
    
    for (var i = 0; i < inputArray.length-1; i++){
        const x = inputArray[i]* inputArray[i+1]
       newarray.push(x)
        
    }
    console.log(newarray, 'vsfddfsdfs')
    //console.log(...newarray)
// mostra a multiplicação do reduce
/*
return newarray.reduce((a,b) => {
    return Math.max(a,b)
 // console.log(a, b, 'wwerwr')
 console.log( b, 'wwerwr')
  //return b
})*/
}
    

console.log(solution([1,2,3,4, 5]))
// resumo

function solution(inputArray) {
    const a = inputArray
    return Math.max(...a.slice(0,-1).map((value, index) => value*a[index+1]))
}
