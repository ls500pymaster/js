let input = prompt("Enter your number");
let num = parseInt(input);

if (!isNaN(num) && num >= 1 && num <= 50) {
    let factorialResult = 1;
    for (let i = 1; i <= num; i++ ) {
        factorialResult *= i;
    }
    console.log(factorialResult);
}
else {
    console.log("Input must be a number between 1 and 50.");
}


