var readlineSync = require('readline-sync');
var chalk = require("chalk");


var userName = readlineSync.question('May I have your name? ');

console.log("\n \nHi " + userName + " enter your birth date and \nI will tell you if your birth date is prime or not. \n ");

var userBirthDate = readlineSync.question('Enter your birth date in this format : DD/MM - \n');

var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var birthDate = userBirthDate.split('/');
var DD = birthDate[0];
var MM = birthDate[1];

if( DD < 31 || MM < 12 || DD > 0 || MM > 0 || (!isNaN(DD)) || (!isNaN(MM))){
  if( DD < numberOfDays[MM-1] ){
    checkPrime(DD);
  }
  else{
    console.log(" ERROR !! INVALID DATE. ");
  }
   
}
else{
  console.log(" ERROR !! INVALID DATE. ");
}

function checkPrime(date){
   let isPrime = true;
   if( date > 1)
   {
     for( let i = 2; i < date ; i++)
     {
       if(date % i == 0)
       {
         isPrime = false;
         break;
       }
      }

      if(isPrime)
      {
         console.log("\n \nHey, your birth date is a prime number");
      }
      else
      {
         console.log("\n \nHey, your birth date is not a prime number");
      }
     }
     else
     {
       console.log(" \n \nHey, your birth date is not a prime number");
     } 
}