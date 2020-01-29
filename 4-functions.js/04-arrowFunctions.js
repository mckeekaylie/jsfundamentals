//arrow functions have to be stored in a variable because they are expressions NOT declarations
//arrow functions are not hoisted

let hi = () => {
    console.log('hello');
}

// => is the fat arrow and it signifies a function
// fat arrows are shorthand for creating a function expression not declaration

/* two types of arrow functions:
    1. concise body
    2. block body
*/

//concise body (all on one line)
let hi = () => console.log('hello'); // return is implicit and happens by default
hi();

//block body (breaks out to multiple lines, return keyword is required)
let hi = () => {
    console.log('hello');
    //return keyword here
}
hi();

//concise vs block
let apples = num => console.log(`There are ${num} apples`);
apples(10);

let counting = num => {
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}
counting(2);

/*
    - if there are no parameters, parens are required in an arrow function
    - if there is a single parameter, parens aren't necessary in an arrow function
    - if there are multiple parameters, parens are required in an arrow function
*/