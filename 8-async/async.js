/*
    Async Functions
    - can be thought of alternate ways of writing promise-based code
    - avoids chaining promises
    - async/await allows to program using asynchronous requests (e.g. request to an API), in a synchronous manner, while still allowing other code to run in the background
    - await can only be used within an async function
*/

// syntax
async function myFn() {
    // await
}

const myFn = async () => {
    // await
}

// All the same, but written 3 different ways

// 1
async function fn() {
    return 'hello'; // wrapped in a promise
}

// 2
fn().then(dataFromAsyncFunction => {
    console.log(dataFromAsyncFunction);
});

// 3
fn().then(console.log);

// No async, but using Promise.resolve
function fn() {
    return Promise.resolve('hello');
}
fn().then(console.log);
// Comment everything above out, and run index.html in browser
// Then look at the console

const request = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json();
    return json;
}
request().then(dogObj => {
    console.log(dogObj);
})

//repl challenge
/* Write a fat arrow async function that does the following:
1. Uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
2. Uses await to jsonify the response received from the fetch
3. console.log the results of the fetch before console.logging a message saying 'this should print last'
4. our console.log of 'this should print last' should be accessed using a promise resolver chained to the call of the function.
*/

const request = async () => {
    const response = await fetch('https://swapi.co/api/people/1');
    const json = await response.json();
    return json;
}
request().then(swapiObj => {
    console.log(swapiObj);
    console.log('this should print last');
});



