function MissingDigit(str) {
    const [ num1, operator1, num2, operator2, num3 ] = str.split(' ');

    let missingDigit = null;

    // Encontrar o número desconhecido
    if (num1.includes('x')) {
        missingDigit = eval(`${num3} ${operator2} ${num2}`) - parseInt(num3);
    } else if (num2.includes('x')) {
        if (operator1 === '+') {
            missingDigit = parseInt(num3) - parseInt(num1);
        } else if (operator1 === '-') {
            missingDigit = parseInt(num1) - parseInt(num3);
        } else if (operator1 === '*') {
            missingDigit = parseInt(num3) / parseInt(num1);
        } else if (operator1 === '/') {
            missingDigit = parseInt(num1) / parseInt(num3);
        }
    } else if (num3.includes('x')) {
        missingDigit = eval(`${num1} ${operator1} ${num2}`) - parseInt(num1);
    }

    return missingDigit;
}



console.log(MissingDigit("3x + 12 = 46")); // Output: 4
console.log(MissingDigit("4 - 2 = x")); // Output: 2
console.log(MissingDigit("1x0 * 12 = 1200")); // Output: 0
console.log(MissingDigit("50 - x = 30")); // Output: 2
console.log(MissingDigit("8 * x = 72")); // Output: 9
console.log(MissingDigit("x * 9 = 45")); // Output: 5
console.log(MissingDigit("20 + 3x = 50")); // Output: 10
