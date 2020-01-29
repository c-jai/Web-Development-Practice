/*
 * Practice of filter, map, sort, reduce functions
 */

const companies = [{name: "SAP", location: "Palo Alto", start: 1983}, 
                    {name: "Atheer", location: "San Jose", start: 1985},
                    {name: "Amazon", location: "Seattle", start: 1998},
                    {name: "Cybage", location: "India", start: 1983}, 
                    {name: "Databricks", location: "San Francisco", start: 1987},
                    {name: "Nexus", location: "Japan", start: 1997},
                    {name: "Box", location: "San Mateo", start: 1993}, 
                    {name: "Splunk", location: "San Jose", start: 1992},
                    {name: "Target", location: "Sunnyvale", start: 2000}];

const ages = [12, 34, 13, 23, 54, 33, 90, 82];

// ******* Display company objects
//for loop
console.log(" For loop result ");
for (let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

//forEach: takes a sync call back function(iterator, index, arr) 
console.log(" ForEach result ");
companies.forEach((company) => {
    console.log(company)
});

// ******* Filter all ages above 21, filter all companies with location San Jose
//for loop 
let arr1 = []
for (let i = 0; i < ages.length; i++){
    if (ages[i] > 21)
    arr1.push(ages[i]);
}
console.log(" For loop result ");
console.log(arr1);

//filter
arr2 = ages.filter((age) => age > 21 )//if this "age" is to be included in the result array or not
console.log(" Filter result ");
console.log(arr2);

//filter all companies with location San Jose
let sjCompanies = companies.filter((company) => company.location === "San Jose");
console.log(sjCompanies);

// ******* create a new array of company names
//for loop
let names1 = []
for(let i = 0; i < companies.length; i++){
    names1.push(companies[i].name);
} 
console.log(" For loop result ");
console.log(names1);

//map function: returns a new array populated with results of calling provided function on EVERY element 
//of the calling array. The new array is of the same size as the calling array

let names2 = companies.map((company) => company.name);
console.log(" Map result ");
console.log(names2);

let ageMap = ages.map((age) => Math.sqrt(age))
                 .map((age) => age*2)
console.log(ageMap);

// ******* sort ages 

let sortedCompanies = ages.sort((a1, a2) => (a1 - a2)); //ascending order
console.log(sortedCompanies);

// get sum of all ages
//for loop

let sum1 = 0;
for (let i = 0; i < ages.length; i++){
    sum1 += ages[i];
}
console.log(sum1);

//reduce function: executes the provided reducer function 
//on each element of the array, resulting in a single output value.
let sum2 = ages.reduce((sum, age) => sum + age);
console.log(sum2);
