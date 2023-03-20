function MissingDigit(str) {
    let nums = str.split(/[\+\-\*\/\=]/); // obter os três números como um array de strings
    let operator = str.match(/[\+\-\*\/]/)[ 0 ]; // obter o operador
    let unknownIndex = nums.findIndex(num => num.includes('x')); // encontrar o índice do número desconhecido
    let knowns = nums.filter((_num, index) => index !== unknownIndex).map(Number); // obter os dois números conhecidos como array de números
    let unknown = Number(nums[ unknownIndex ].replace('x', '')); // obter o número desconhecido como um número

    switch (operator) { // verificar qual operação é necessária para encontrar o número desconhecido
        case '+':
            return unknown = knowns[ 1 ] - knowns[ 0 ];
        case '-':
            return unknown = knowns[ 1 ] + knowns[ 0 ];
        case '*':
            return unknown = knowns[ 1 ] / knowns[ 0 ];
        case '/':
            return unknown = knowns[ 1 ] * knowns[ 0 ];
        default:
            return null;
    }
}

console.log(MissingDigit("3x + 12 = 46")); // saída esperada: 2
console.log(MissingDigit("1x0 * 12 = 1200")); // saída esperada: 0
console.log(MissingDigit("8 + 2x = 18")); // saída esperada: 5
console.log(MissingDigit("15 * 2x = 60")); // saída esperada: 2
console.log(MissingDigit("5x - 12 = -7")); // saída esperada: 1
console.log(MissingDigit("3x / 2 = 9")); // saída esperada: 6