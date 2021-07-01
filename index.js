var readlineSync = require('readline-sync');
var chalk = require("chalk");


var userName = readlineSync.question('May I have your name?');

console.log("\n \nHi " + userName + " enter your birth date and \nI will tell you if your birth date is prime or not. \n ");

var userBirthDate = readlineSync.question('Enter your birth date in this format : DD/MM ');

var birthDate = split.userBirthDate('/');
var DD = birthDate[0];
var MM = birthDate[1];

