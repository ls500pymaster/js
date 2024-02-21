function processNumber(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
        return num1* num2;
    }
    else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return num1 + num2;
    }
    else {
        return num1 % 2 !== 0 ? num1 : num2;
    }
}

console.log(processNumber(6, 8));
console.log(processNumber(3, 5));
console.log(processNumber(10, 7));