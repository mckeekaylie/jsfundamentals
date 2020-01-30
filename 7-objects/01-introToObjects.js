/*
    - a container that stores multiple sets of data
        - stores data as key/value pairs
    - objects are denoted by ()
*/

let netflix = {
    id: 1,
    showName: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, {
                episode: 2,
                episodeName: 'Diversity Day'
            }, {
                episode: 3,
                episodeName: 'Health Care'
            }, {
                episode: 4,
                episodeName: 'The Alliance'
            }, {
                episode: 5,
                episodeName: 'Basketball'
            }, {
                episode: 6,
                episodeName: 'Hot Girl'
            }]
        }
    },
    season2: {},
    season3: {},
    season4: {}
}

//to access data inside of an object, or to dive into an object, we use dot notation

console.log('all data: ', netflix);
console.log('season info:', netflix.season1.seasonInfo);
console.log('specific episode name: ', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

//challenge
console.log('episode: ', netflix.season1.seasonInfo.episodeInfo[3].episode, netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//challenge, instructor solution
console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[4].episode} - episode name: ${netflix.season1.seasonInfo.episodeInfo[4].episodeName}`);

/*
    -JSON stands for JavaScript Object Notation
    - JSON syntax is derived from JavaScript Object syntax, but JSON data is in a text-only format
    - JSON exists as a string, and needs to be converted to a native JavaScript object if we want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));

console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.nbaPlayers));

/*
    -object bracket notation
        - like dot notation, allows us to find a value to an object
        - also allows us to set keys of an object
        - also handy if we want to store keys of an object as a variable
        - it works because all keys inside an object are strings even though they're not wrapped in single or double quotes
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

let zucchini = garden['vegetable'];
console.log(zucchini);

let baking = {};
baking['zucchini'] = 'better make some bread'; //sets a key of zucchini and a corresponding value of 'better make some bread'
console.log(baking);

console.log(baking[garden['vegetable']]); //grabs the value of garden['vegetable'] FIRST then evaluates baking['zucchini'] to print 'better make some bread'

let testObj = {
    'Spaces here': true, 
    noSpaces: true
}

console.log(testObj.noSpaces);

