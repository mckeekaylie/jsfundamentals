/*
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for loop or for of loop - both iterate over properties in an array
*/

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hot dog'];

for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}

//concise body
food.forEach(foodItem => console.log(foodItem));
//grab the food array, for each param(foodItem) in the array, print each param(foodItem)

//block body
food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
})

//regular function
food.forEach(function(foodItem){
    console.log(foodItem);
})

//challenge
let movies = ['Star Wars', 'Joker', 'Avengers', 'Lord of the Rings'];

movies.forEach(movie => console.log(movie));

movies.push('Doctor Strange');
movies.splice(2, 1, 'Avengers: Endgame');
movies.forEach(movie => console.log(movie));