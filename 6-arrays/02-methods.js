let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hot dog'];
console.log('original array:', food);

//the push method appends the input to the END of the array
food.push('pizza'); 
console.log('push: ', food);

//the splice method removes a value from an array and replaces it with something else if desired
food.splice(1, 1, 'bananas'); //position, how many to delete, what to add in its place
console.log('splice: ', food);

food.splice(2, 0, 'sweet potato pie'); //position, no removal, adding value to index 2
console.log('splice no removal: ', food);

//the pop method removes the last element from an array
food.pop();
console.log(food);

//the shift method removes the first element in an array
food.shift();
console.log(food);

//the unshift method 1 or more elements to the beginning of the array without deleting any present elements
food.unshift('popcorn', 'steak');
console.log(food);