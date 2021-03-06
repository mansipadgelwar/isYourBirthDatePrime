var readlineSync = require('readline-sync');
var chalk = require("chalk");

var regEx = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])$/;
var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var userName = readlineSync.question(chalk.green.bold('May I have your name? \n'))

checkUserName(userName);


function checkUserName(userName){
  if(userName === ""){
  console.log("Please enter your name. \n");
  userName = readlineSync.question(chalk.green.bold('May I have your name? \n'))
  checkUserName(userName);
}
else{
console.log("\n \nHi " + chalk.white.bgBlue.bold(userName) + " enter your birth date and \nI will tell you if your birth day is a prime number. \n ");
getDate();
}

}

function getDate()
{

  var userBirthDate = readlineSync.question('Enter your birth date in this format : DD/MM - \n');

  if(userBirthDate === ""){
    console.log("Please enter your birthdate");
    getDate();
  }

  if(validateDate(userBirthDate)){
    var birthDate = userBirthDate.split('/');
    var DD = Number(birthDate[0]);
    var MM = Number(birthDate[1]);
    if (DD <= numberOfDays[MM - 1]){
        checkPrime(DD);
    }
    else{
      console.log(" ERROR !! INVALID DATE FORMAT.\n\n ");
        getDate();
    }
    
  }
  else{
        console.log(" ERROR !! INVALID DATE FORMAT.\n\n ");
        getDate();
  }
  
}

function checkPrime(date) {
  let isPrime = true;
  if (date > 1) {
    for (let i = 2; i < date; i++) {
      if (date % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("\n \nHey, your birth date is a prime number. You can share it on your social media.");
    }
    else {
      console.log("\n \nHey, your birth date is not a prime number");
    }
  }
  else {
    console.log(" \n \nHey, your birth date is not a prime number");
  }
}

function validateDate(date){
  var flag = regEx.test(date);
  return flag;
}