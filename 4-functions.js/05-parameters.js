function hi (name) { //the word name is simply a placeholder for what is passed into the function when it is called
    console.log(`hello, ${name}`);
}

hi('kaylie');

function kaylie(ticket) { //the ticket is a placeholder while I wait for my sandwich to be ready
    console.log(`I exchanged my ticket for a ${ticket}`); 
}

kaylie('sandwich');

function counter(number, string) {
    console.log(string);

    for(number; number <= 10; number++){
        console.log(number);
    }
}

counter(0, 'hi');

//challenge
function fullName(firstName, lastName){
    console.log(`Hello my name is ${firstName} ${lastName}`);
}

fullName('Kaylie', 'McKee');

//challenge, instructor version
function myName(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello my name is ${fullName}`);
}

myName('Kaylie', 'McKee');