/*
    - arrays are containers that hold a list of items
    - denoted by square brackets []
    - arrays can hold multiple data types
    - each item in an array is always separated by commas 
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    - when calling an array, we can append square brackets onto the end of our array with the index number we want to reference. 
    This is called square bracket notation.
    - JS starts counting at 0 when working with indices
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];

console.log(typeof students); //returns students type
console.log(students instanceof Array); //checks type of variable during runtime
console.log(students[2]);

//Challenge
let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];

console.log(`Hi, ${students[6][2]}`); //how to access an array within an array