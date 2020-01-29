/*
    -for of loops look at the iterable properties as an array
    - can't use for of loops on objects because objects are enumerable, not iterable
*/

//will return an error because objects are not iterable
let student = {
    name: 'Kaylie',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for(let item of student) {
    console.log(item);
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmatian', 'pug'];

for(let dog of dogArray) {
    console.log(dog, 'goes bark');
}

