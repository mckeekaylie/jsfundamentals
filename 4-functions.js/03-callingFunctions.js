function hi () {
    console.log('hello');
}

hi; // prints nothing
hi(); // invokes the function and 'hello' is printed
console.log(hi); // displays function/name but function is not run
console.log(hi()); // prints hello and undefined. The function runs immediately during the first pass. Undefined is printing because during the second pass, the function has already fired.

//challenge 1
function oneToTen() {
    for (i = 1; i <= 10; i++){
        console.log(i);
    }
}

oneToTen();

//challenge 2
let arr = ['This', 'is', 'really', 'cool'];

function valueList() {
    for (let word of arr) {
        console.log(word);
    }
}

valueList();