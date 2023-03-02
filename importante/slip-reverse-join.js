
// compara letras 
function solution(inputString) {
   const x = inputString.split('');
   console.log(x)
   const y = x.reverse();
   console.log(y)
   const z = y.join(' ');
   
   console.log(z)
   console.log(inputString)
   return z === inputString

}

console.log(solution("abac"));
//3 ################################################################################
// resumo 
function solution(inputString){
    return inputString.split('').reverse().join('') === inputString
}