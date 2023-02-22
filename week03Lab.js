// Define ages array
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastNumber = ages.length - 1;
let difference = ages[lastNumber] - ages[0];
console.log(difference);

// add new age to array
ages.push(101);

for(let i = 0; i < ages.length; i++){
    console.log(ages[i]);
}

let sum = 0;
for(let i = 0; i < ages.length; i++){
    sum += ages[i];
}

let average = sum / ages.length;
console.log(average);

// Define names array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;

// This loop is used to calculate average number of letters per name.
for(let i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log('Average number of letters per name: ' + averageLetters);

// This loop concatenates all the names together, separated by spaces.
let concatenatedNames = '';
for(let i = 0; i < names.length; i++){
    concatenatedNames += names[i] + ' '; 
}
console.log('Concatenated names: ' + concatenatedNames);

//Accessing the last element of an array.
let myArray = [1, 2, 3, 4];
let lastElement = myArray[myArray.length - 1];
console.log(lastElement);

//Accessing the first element of an array.
let firstElement = myArray[0];
console.log(firstElement);

//used namesTwo for the array since "names" was used earlier in the code.
let namesTwo = ['Kelly', 'Sam', 'Kate'];
let nameLengths = [];
//creates a loop that gives the number of letters in each name.
for(let i = 0; i < namesTwo.length; i++){
    nameLengths.push(namesTwo[i].length);
}
console.log(nameLengths);

//let total = 0

//for(let i = 0, i < nameLengths.length; i++){
    //total += nameLengths[i];
//}
//console.log(total);

function repeatWord(word, n){
    let repeatWord = '';
    for(let i = 0; i < n; i++){
        repeatWord += word;
    }
    return repeatWord;
}
console.log(repeatWord('Hello', 3));

// receiving an error that 'firstName' and 'lastName' have already been declared,
// but I'm not seeing it in my code....

//function fullName(firstName, lastName){
    //let firstName = "Kaitlin";
    //let lastName = "Lobb";
    //let fullName = firstName + ' ' + lastName;
    //return fullName;
//}
//console.log(fullName);

function sumGreaterThan100(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}
let numbers = [22, 54, 11, 7]
console.log(sumGreaterThan100);

//not sure why my average is coming out incorrect. It should be 23.5.
// console reading 82.75.
function averageOfNumbers(numbers){
    return sum / numbers.length;
}
console.log(averageOfNumbers(numbers));





//This function takes these 2 parameters and requires both to be true in
// order for the console to read true. Example is below.
function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 11.50));
console.log(ages);