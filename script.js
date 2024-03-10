function ConstructPerson(pName, pAge, pGender) {
    this.name = pName;
    this.age = pAge;
    this.gender = pGender;
    this.print = function (){
        console.log("Name: ", pName);
        console.log("Age: ", pAge);
        console.log("Gender: ", pGender);
    }
}

const person = new ConstructPerson("Bill", 23, "Male");
person.print();