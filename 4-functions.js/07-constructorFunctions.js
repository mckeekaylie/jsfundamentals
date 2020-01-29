//constructor functions are an alternative to fully writing out multiple objects
// (1)     (2)         (3)
function Person(name, age, canVote){
//   (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//constructors construct new objects based on what you give them
//            (7)  (8)
let person4 = new Person('Kaylie', 23, true);

console.log(person4);

/*
    1. function keyword
    2. function name; for constructor functions it should be caps
    3. parameters, the values for the keys in our object once a new Person is created
    4. this refers back to whatever called it, in this case this refers to the function of Person
    5. the keys of the new object we're creating
    6. the arguments we pass through our function call
    7./8. js keyword that creates a new instance of our Person function with the values we pass into that function when invoking it
*/

