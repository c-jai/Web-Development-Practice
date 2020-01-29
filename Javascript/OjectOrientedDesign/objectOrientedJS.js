//*************** constructive functions (ES 5)***************

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getAge = () => this.age;
}

// instantiate object
const person = new Person("Jai", "Chhatre", 27);
console.log(person);
console.log(person.getAge());

//*************** class ***************

class PersonClass{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getAge(){
        return this.age;
    }
}

const person2 = new PersonClass("J", "C", 28); 
console.log(person2);
