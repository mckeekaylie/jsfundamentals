let name = (name) => {
    return name; //the data is released to the global scope and needs catched by being stored in a variable
}

let myNameIs = name('Kaylie'); //myNameIs is set equal to the value returned by the name function

console.log(myNameIs);

//another example

let name = (name) => {
    let fullName = name + 'ary';
    return fullName;
}

let myFullName = name('Zach');
console.log(myFullName);

//challenge
let tip = subtotal => {
    let tipAmount = (subtotal * 0.2);
    let total = (tipAmount + subtotal);
    return total;
} 

let bill = tip(30);
console.log(bill);

//instructor solution
function tipCalculator(bill){
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalculator(19.84);
console.log(totalTip);

//instructor solution as an arrow function
let tipCalc = bill => bill * 0.2;

let totalTip = tipCalc(19.84);
console.log(totalTip);


