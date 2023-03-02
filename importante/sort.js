function sort(a ){
    const b = a.filter(c => c != -1)
    console.log(b, 'bbbb')
    //const d = a.sort((e,f)=> e-f)
    const d = b.sort((e,f)=> e-f)
    console.log(d)//ordena

    // verifica se e -1 
    let i =-1;
    return a.map(value => {
        if(value === -1) return -1;
        i++;
        return a = d[i]
    })
    
}
console.log(sort([91,1,1,3,2, -1,-9,-5,-5]))
 // resumo 
function solution(inputArray) {
    const a = inputArray.filter(ele => ele !=1 ).sort((a1, a2) => a1-a2)
    return inputArray.map(te => (te ===-1) ? -1 : a.shift())
} 

console.log(solution([1,2,3,4,-1,-5,-4,-6,9,8,5,3,2,1]), 'aqui')