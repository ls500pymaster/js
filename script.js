const firstName = prompt("What is your name?");
const age = parseInt(prompt("What is your age?"));
const email = prompt("What is your email?");


const newUser = {
    firstName: firstName,
    age: age,
    email: email,
}

for (const property in newUser) {
    console.log(`${property}: ${newUser[property]}`);
}



