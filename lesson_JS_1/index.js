//? First task
let userName = prompt('What is your name?');
alert('Hi, ' + userName);

//? Second task
let userYearOfBirth = Number(prompt('What is your year of birth?'));
let year = 2022;
if (!isNaN(userYearOfBirth))
    alert(`You are ${year - userYearOfBirth} years old!`);
else
    alert(`Are you sure that is right year?`);

//? Third task
let sideLength = Number(prompt('Enter the length of the square side and we will find the perimeter:')),
    perimetr = sideLength * 4;

if (!isNaN(sideLength))
    alert('Perimert of your square is ' + perimetr + '.');
else
    alert('Please, put the number!');

//? Fourth task

let circleRadius = prompt('Please, enter the radius of circle:'),
    circleSquare = Math.PI * Math.pow(circleRadius, 2);

alert('The square of your circle is ' + Math.round(circleSquare));


//? Fifth task

let dollar = Number(prompt('Enter, how many dollars do u want to change:')),
    cursHryvni = 29.5;

if (!isNaN(dollar))

    alert(`Get your money: ${dollar * cursHryvni}`);
else
    alert('You have no money! Good-bye!');
