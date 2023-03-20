function MissingDigit(str) {
    const [ left, right ] = str.split(" = ");
    const [ num1, operator, num2 ] = left.split(/([\+\-\*\/])/);

    let targetNum, missingDigit;
    if (num1.includes("x")) {
        targetNum = parseInt(num2);
        if (operator === "+") {
            missingDigit = targetNum - parseInt(num1.replace("x", ""));
        } else if (operator === "-") {
            missingDigit = parseInt(num1.replace("x", "")) - targetNum;
        } else if (operator === "*") {
            missingDigit = targetNum / parseInt(num1.replace("x", ""));
        } else if (operator === "/") {
            missingDigit = parseInt(num1.replace("x", "")) / targetNum;
        }
    } else if (num2.includes("x")) {
        targetNum = parseInt(num1);
        if (operator === "+") {
            missingDigit = targetNum - parseInt(num2.replace("x", ""));
        } else if (operator === "-") {
            missingDigit = targetNum - parseInt(num2.replace("x", ""));
        } else if (operator === "*") {
            missingDigit = targetNum / parseInt(num2.replace("x", ""));
        } else if (operator === "/") {
            missingDigit = targetNum * parseInt(num2.replace("x", ""));
        }
    } else {
        targetNum = eval(left);
        missingDigit = "";
    }

    return parseInt(missingDigit);
}

console.log(MissingDigit("3x + 12 = 46")); // saída esperada: 2
console.log(MissingDigit("1x0 * 12 = 1200")); // saída esperada: 0
console.log(MissingDigit("8 + 2x = 18")); // saída esperada: 5
console.log(MissingDigit("15 * 2x = 60")); // saída esperada: 2
console.log(MissingDigit("5x - 12 = -7")); // saída esperada: 1
console.log(MissingDigit("3x / 2 = 9")); // saída esperada: 6