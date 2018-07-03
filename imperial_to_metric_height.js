// var myName = prompt("What is your name?");
//
// var heightInches = prompt("How tall are you in inches?");
//
// var weightPounds = prompt("How much do you weigh in pounds?");
//
// var heightCentimeters = heightInches * 2.54;
//
// var weightKilograms = weightPounds * 0.453592;
//
// console.log(myName + ' is ' + heightCentimeters + ' cm and ' + weightKilograms + ' kg.');

// var myName = prompt("What is your name?");
// var newLang = prompt("Do you know a language besides English?");
// var welcomeSaying = prompt("How do you greet others in that language?")
//
// function greeting(name, language, saying) {
// 	console.log(saying + " " + name + ", nice to speak with someone who knows " + language);
// }
//
// greeting(myName, newLang, welcomeSaying);


function convertInchesToCentimeters(number) {
    heightCentimeters = number * 2.54
    return heightCentimeters
}

var myName = prompt("What is your name?");

var heightInches = prompt("How tall are you in inches?");

var weightPounds = prompt("How much do you weigh in pounds?");

var heightCentimeters = heightInches * 2.54;

var weightKilograms = weightPounds * 0.453592;

console.log(myName + ' is ' + convertInchesToCentimeters(heightInches) + ' cm and ' + weightKilograms + ' kg.');
