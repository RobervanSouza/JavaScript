function MissingDigit(str) {
    // Obter os três números como um array de strings
    let nums = str.split(/[\+\-\*\/\=]/);

    // Obter o operador
    let operator = str.match(/[\+\-\*\/]/)[ 0 ];

    // Encontrar o índice do número desconhecido
    let unknownIndex = nums.findIndex(num => num.includes('x'));

    // Obter os dois números conhecidos como array de números
    let knowns = nums.filter((_num, index) => index !== unknownIndex).map(Number);

    // Obter o número desconhecido como um número
    let unknown = Number(nums[ unknownIndex ].replace('x', ''));

    // Verificar qual operação é necessária para encontrar o número desconhecido
    switch (operator) {
        case '+':
            return unknown = knowns[ 1 ] - knowns[ 0 ];
        case '-':
            return unknown = knowns[ 1 ] + knowns[ 0 ];
        case '*':
            if (unknownIndex === 0) {
                return unknown = knowns[ 1 ] / knowns[ 2 ];
            } else if (unknownIndex === 1) {
                return unknown = knowns[ 2 ] / knowns[ 0 ];
            } else {
                return unknown = knowns[ 0 ] * knowns[ 1 ];
            }
        case '/':
            if (unknownIndex === 0) {
                return unknown = knowns[ 1 ] * knowns[ 2 ];
            } else if (unknownIndex === 1) {
                return unknown = knowns[ 0 ] / knowns[ 2 ];
            } else {
                return unknown = knowns[ 0 ] / knowns[ 1 ];
            }
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