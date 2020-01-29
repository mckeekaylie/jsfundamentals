/*
for loops take in 3 parameters:
1. initial expression
2. condition
3. increment expression

*/
//......(1)......(2)........(3).....
for (let i = 0; i < 10; i++) { //i++ = i + 1; i-- = i - 1
    console.log(1);
}

//challenge
for (let i = 0; i <= 20; i += 2) { //i = i + 2
    console.log(i);
}

//challenge 2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//challenge 3
for (let i = 0; i >= -24; i -= 2){
    console.log(i);
}

//challenge 4 
let name = 'Kaylie';

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//challenge 5
let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i; 
}

console.log(sum);