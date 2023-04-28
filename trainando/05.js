function aVeryBigSum(ar) {
    // Write your code here
    let soma = 0;
    for (let i = 0; i < ar.length; i++) {
        soma += ar[i]
    } 
    return soma;
}
console.log(aVeryBigSum([ 10, 22, 30, 40, 60 ]))