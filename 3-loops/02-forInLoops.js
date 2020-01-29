/*
    - for in loops are great for counting key/value pairs in an object. Properties in an object are what is called enumerable
    - for in loops will iterate over an object's enumerable properties
*/

let student = {
    name: 'Kaylie', //Key: name, value: 'Kaylie'
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

console.log(student.awesome); //how to print a specific value from an object (dot notation)

for (let item in student) {
    console.log(item); //prints each key from the student object
    console.log(student[item]) //prints each value from the student object (object bracket notation, generally used to access properties in an array but can also be used in objects)
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmatian', 'pug'];
console.log(dogArray[1]); //how to return a specific value in an array

for (dog in dogArray) { //use let if you are going to have another variable with the same name
    console.log(dogArray[dog]); //returns the indices of each dog in the array
}

//challenge
let name = 'kaYLiE';
let capName;

for(let i in name) {
  if (i == 0) {
      capName = name[i].toUpperCase();
  } else {
      capName += name[i].toLowerCase();
  }
}

console.log(capName);
