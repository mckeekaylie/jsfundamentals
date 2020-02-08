//6c0764577fe7647dad94f81ba21d45cd public api key

const baseURL = 'https://gateway.marvel.com/v1/public/characters';
const key = '6c0764577fe7647dad94f81ba21d45cd';
const hash = 'e02a1657669b6b541eb4d0539f171815';
let url; 

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', fetchResults); 



function fetchResults(e) {
    e.preventDefault();

    url = baseURL + '?ts=1&apikey=' + key + '&hash=' + hash;

    fetch(url).then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}

function displayResults(json) {
    console.log(json);
}

