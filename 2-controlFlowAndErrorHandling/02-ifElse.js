let weather = 30;

if (weather < 50) {
    console.log("Wear a jacket.");
} else {
    console.log('No jacket necessary.');
}

//challenge
let name = 'Lynn';
if (name == 'Kaylie') {
    console.log(`Hello, my name is ${name},`); //concatenation 
} else {
    console.log(`Hello, is your name ${name}.`); //interpolation, not compatible with browsers that don't support ES6
}

//challenge2
let name = 'zAchARy';
let firstLetter = name.charAt(0);
let firstLetterUpper = firstLetter.toUpperCase(); 
let remainingString = name.slice(1, name.length).toLowerCase();

console.log(firstLetter, firstLetterUpper);

if (firstLetter === firstLetterUpper) {
    console.log(`${firstLetter}${remainingString}.`);
} else {
    console.log(`${firstLetterUpper}${remainingString}.`);
}

//challenge2 instructor version, bronze
let name = 'zAchARy';
let firstLetter = name[0];

if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log('hey this isn\'t written correctly');
}

//challenge 2 instructor version, silver
let name = 'zAchARy';
if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase()); //properties/methods open start at 1 not 0
}

//challenge 2 instructor version, gold
let name = 'zAchARy';
if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase;
    console.log(isUppercase);
} else {
    let isNotUppercase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(isNotUppercase);
}

//challenge 3
let age = 23;
if (age >= 25) {
    console.log('You can rent a car!');
} else if (age >= 21) {
    console.log('You can drink!');
} else if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('Sorry, you\'re too young to do anything.');
}