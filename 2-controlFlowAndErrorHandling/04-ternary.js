/*
    - a ternary is shorthand for writing an if/else statement
    - a basic if statement cannot be written in ternary because an else is required
    - requires the default or catch all (else)
*/

let num = 6;

//Ternary
(num > 0) ? console.log('yes') : console.log('no');

//If else
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

let num = 6;

//Ternary else if
(num == 0) ? console.log('working') : (num < 0) ? console.log('not working') : console.log('still not working')

(num == 0) ? console.log('hello')
    : (num < 0) ? console.log('not working')
    : console.log('still not working')

//else if
if (num == 0) {
    console.log('working');
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working');
}

//challenge
let age = 23;

(age >= 25) ? console.log('You can rent a car!')
    : (age >= 21) ? console.log('Yay! You can drink!')
    : (age >= 18) ? console.log('You can vote!')
    : console.log('Sorry, you are too young to do anything fun.')