// console methods
console.log("separate file");
console.error("this is an error");

//*************** variables ***************
let firstName = 'jai';
const age = 27;

console.log(`My name is ${firstName}`);


//*************** arrays ***************

const arr = new Array(1, 34, 56);
const fruitsArr = ["apple", "pear", 78];
fruitsArr[3] = "mango";
fruitsArr.push("oranges");
fruitsArr.unshift("strawberries");
fruitsArr.pop();
console.log(arr);
console.log(fruitsArr);

//*************** object literals ***************

const person = {
    name : "Jai",
    lastName : "Chhatre",
    hobbies : ["singing", "reading"],
    address : {
        street : "1800 stokes",
        apartment : 28,
        zipcode : 95126
    }
}

console.log(person);
console.log(person.name);
console.log(person.address);
console.log(person.hobbies[0]);

//destructuring objects

let {name, lastName, address : {street, zipcode}} = person;

console.log(name);

//add new properties

person.email = "jai.chhatre@gmail.com";
console.log(person);

//*************** arrays of objects ***************

const todos = [
    {
        id : 1,
        title : "Prepare Resume",
        isCompleted : true
    },
    {
        id : 2,
        title : "Meet Ajji",
        isCompleted : true
    },
    {
        id : 3,
        title : "Dentist appt",
        isCompleted : false
    }
];

console.log(todos[1].title);

//*************** convert to JSON string ***************

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

const personJSON = JSON.stringify(person);
console.log(personJSON);

//*************** For loop ***************

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].title);
}

//*************** While loop ***************

let i = 0;

while (i < fruitsArr.length){
    console.log(fruitsArr[i]);
    i++;
}

//*************** Higher order array methods ***************

//forEach

todos.forEach(function(todo){
    console.log("Title is: " + todo.title);
});

// map: returns another array

const todosTitles = todos.map(function(todo){
    return todo.title;
});

console.log(todosTitles);

//filter

const todosCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todosCompleted);

//chaining methods

const todosCompletedTitles = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.title;
})

console.log(todosCompletedTitles);


//*************** conditionals ***************

//== : does not check data type, === : checks data type as well

let val = 10;

if(val == 10){
    console.log("val is equal to 10");
}

if(val === 10){
    console.log("val is equal to 10");
}
else{
    console.log("val is NOT equal to 10");
}

//ternary operator

val === 10 ? console.log("value is 10") : console.log("value is not 10");

//switch case

switch(val){
    case 10: console.log("case 10");
    break;
    case 12: console.log("case 12");
    break;
    default: console.log("case default");
    break;
}
////*************** functions (with default values) //***************

function addNums(num1 = 3, num2 = 4){
    return num1 + num2;
}

console.log(addNums(2,4));
console.log(addNums());

////*************** arrow function //***************

let func = (num) => num + 3;

console.log(func(9));

numArr = [12,34,23];

numArr.forEach(
    num => console.log(num + 1)
);






