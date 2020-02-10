//6c0764577fe7647dad94f81ba21d45cd public api key

const baseURL = 'https://gateway.marvel.com/v1/public/characters';
const key = '6c0764577fe7647dad94f81ba21d45cd';
const hash = 'e02a1657669b6b541eb4d0539f171815';
let url; 

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

let entry = document.getElementById('search');

searchForm.addEventListener('submit', fetchResults); 

function fetchResults(e) {
    e.preventDefault();

    url = baseURL + '?ts=1&limit=1493&apikey=' + key + '&hash=' + hash;

    fetch(url).then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}

function displayResults(json) {
   /*for (i=0; i < json.data.results.length; i++){
        if (json.data.results[i].name === entry.value){
            console.log(json.data.results[i].name);
        } else {
            console.log(json);
        }
    }*/
    console.log(json);
    //console.log(json.data.results[1].name);
    console.log(entry.value);
}

