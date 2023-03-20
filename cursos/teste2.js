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
