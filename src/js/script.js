let name = prompt('What is your name', "");
let resultName = alert(`Your name is ${name}!`);

const year = 2022;
let birthYear = prompt('What is your birth year?', "1999");
let yourAge = alert(`Your age is ${year-birthYear}`);

let squareSide = prompt('Type one side of square: ');
let sumSquare = alert(`Perimether of square is ${4*squareSide}`)

let radius = prompt('Insert radius of circle:', "");
let circleArea = 3.14*Math.pow(radius, 2);
alert(circleArea);

let distance = prompt('Insert distance beetween two distinations: ', '');
alert(typeof(distance));
distance *=1000;
let tripTime = prompt('How fast do you want to get there?(plz type time in minutes)', '');
let yourSpeed = (distance/tripTime);
alert(`Your speed is ${yourSpeed}`);

const dollar = prompt('type your cash to exchange: ', '');
const euro = 0.94;
let exchange = (dollar/euro);
alert(`Your cash is ${exchange}`);