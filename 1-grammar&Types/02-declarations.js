/*
- a variable is a named container for storing data
- we name variables so that we can refer to them again

*/

let a = 2;

    let  b   =   1;
/*  (1) (2) (3) (4)
1. javascript keyword
2. variable name
3. assignment operator
4. variable value

*/

console.log(a + b);

/*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but they can't come first
        - javascript is case sensitive = 'hello' and 'Hello' are two separate variables
        - no spaces allowed in variable names
        - camelCase is the best practice for naming variables with multiple words (this helps with readability)
*/

/*
    var, let, const:
        - var: is the "old" keyword for variables in javascript
        - let: 'new' keyword introduced in ES6 for variables in javascript
        - const: introduced in ES6; a variable that cannot be changed after declaration
*/

/*
    declaration vs initialization:
        - declarations are the LEFT SIDE of the assignment operator
            - let x = (a variable of x is declared)
        - initializations are the RIGHT SIDE of the assignment operator 
            - = 2 (set the value of the variable - initialization)
*/

let x;
console.log('Declaration:', x); // declaration: undefined

x = 10;
console.log('Initialization:', x); // initialization: 10

x = 100;
console.log('Reinitialization:', x);

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);

today = 'wonderful';
console.log(today);