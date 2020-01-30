let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let arr = ['blue', 25, true, ['string'], {key: 'value'}];
console.log(arr.length);
console.log(arr.toString());

//challenge
let arr = [1,2,3,4,5];

if(arr instanceof Array === true) {
    let arrReverse = arr.reverse();
    arrReverse.forEach(num => console.log(num));
}