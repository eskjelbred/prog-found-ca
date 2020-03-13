//question 1
var car = "Audi";

//question 2
var person = {
    name: "Egil",
    age: "31",
};

// question 3
var outOfStock = true

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

//question 4
var numbers = [1, 2, 3, 4, 5]

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//question 5
for(var count = 15; count <= 25; count++) {
    console.log(count);
}

// question 6
for(var count = 15; count <= 25; count++) {
if (count === 20) {    
    console.log(count);
}
}

// question 7
var human = [
    {
        name: "Egil",
        age: 31,
        male: true
    },
    {
        name: "Camilla",
        age: 29,
        male: false
    }
    ];

    for (var i = 0; i < human.length; i++) {
        console.log(human[i].age);
        console.log(human[i].male);
    }

//question 8
function whatIDontLike(thisThing) {
    console.log("I don't like" + " " + thisThing);
}

whatIDontLike("viruses");

// question 9
function subtract(minuend, subtrahend) {
    console.log(minuend - subtrahend);
}

subtract(13, 3);

// question 10
var listOfPartisipants = [];

function newName(name) {
    listOfPartisipants.push(name);
}

newName("Egil");