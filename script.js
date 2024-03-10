const palChecker = function (word) {
    const wordReverse = word.split("").reverse().join("");
    return word === wordReverse;
}

const enterWord = prompt("Enter your word: ")
console.log(palChecker(enterWord));
