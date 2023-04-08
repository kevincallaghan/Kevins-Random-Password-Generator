// Assignment Code
var generateBtn = document.querySelector("#generate");

// My variables:
// Array of all lowercase letters in the alphabet
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of all uppercase letters in the alphabet
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of numbers 0-9
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of special characters
var specialCharacters = ["!", "#", "$", "%", "&", "'", "\(", "\)", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\[", "\\", "\]", "^", "_", "`", "\{", "|", "\}", "~"];

var passwordLength = window.prompt("Please enter the desired length of your password.  Note: Password length must be between 8 and 128 characters!");

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = window.prompt("I'm sorry, but that is not a valid number! Please enter a new password length between 8 and 128 characters.");
}
console.log("Number of Characters Wanted: " + passwordLength);

// Do they want uppercase letters?

//! var uppercaseLettersWanted = window.prompt("Do you want to include uppercase Letters, Y or N?")  

// if Y I need to create function to randomly select an uppercase letter from the array uppercaseLetters

//! console.log(uppercaseLettersWanted); to show how man Uppercase Letters Wanted

// Do they want lowercase letters?

//! var lowercaseLettersWanted = window.prompt("Do you want to include lowercase Letters, Y or N?")  

// if Y I need to create function to randomly select an lowercase letter from the array lowercaseLetters

//! console.log(lowercaseLettersWanted); to show how many Lowercase Letters Wanted

// Do they want numbers?

//! var numbersWanted = window.prompt("Do you want to include numbers, Y or N?")  

// if Y I need to create function to randomly select a number from the array numbers

//!console.log(numbersWanted); to show how many Numbers Wanted

// Do they want special characters?

//! var specialCharactersWanted = window.prompt("Do you want to include Special Characters, Y or N?")  

// if Y I need to create function to randomly select a special character from the array specialCharacters

//! console.log(specialCharactersWanted); to show how many Special Characters Wanted

//! Did they pick at least one?  If not, they must select values again (use while if statement)

var uppercaseLettersWanted = '';
var lowercaseLettersWanted = '';
var numbersWanted = '';
var specialCharactersWanted = '';

while (uppercaseLettersWanted !== 'Y' && lowercaseLettersWanted !== 'Y' && numbersWanted !== 'Y' && specialCharactersWanted !== 'Y') {
  
  uppercaseLettersWanted = window.prompt('Do you want to include uppercase letters, Y or N?').toUpperCase();
  lowercaseLettersWanted = window.prompt("Do you want to include lowercase letters, Y or N?").toUpperCase();
  numbersWanted = window.prompt("Do you want to include numbers, Y or N?").toUpperCase();
  specialCharactersWanted = window.prompt("Do you want to include special characters, Y or N?").toUpperCase();

  if (uppercaseLettersWanted !== 'Y' && lowercaseLettersWanted !== 'Y' && numbersWanted !== 'Y' && specialCharactersWanted !== 'Y') {
    alert('OOPS!  You did not select at least one character-set for your password.  Please try again!');
  }
}

while (uppercaseLettersWanted !== 'Y' && uppercaseLettersWanted !== 'N') {
  uppercaseLettersWanted = window.prompt('Oops, you entered something other than Y or N.  Please answer again!  Do you want to include uppercase letters, Y or N?').toUpperCase();
}

console.log("Uppercase Letters Wanted: " + uppercaseLettersWanted);
console.log("Lowercase Letters Wanted: " + lowercaseLettersWanted);
console.log("Numbers Wanted: " + numbersWanted);
console.log("Special Characters Wanted: " + specialCharactersWanted);




var passwordInProgress = '';


function generatePassword() {

  //Need the following variables:
  //selected length of the password - done
  //array of lowercase letters - done
  //array of uppercase letters - done
  //array of numbers letters - done
  //array of special characters letters - done
  //use .split('') to create arrays   - remove from pseudo-code*****
  //variable to hold the password we are building  - done?
  //possibly need var to hold mega array

  //prompt for password length --> stored in a variable - done
  //Validate the user input --> if user chooses <8 or >123 alert that they need to choose a valid password length they they need to restart process or call function again  - done
  //prompt --> Do they want uppercase letters?  var upperCaseLettersWanted = window.prompt("Do you want to include uppercase Letters, Y or N?") --> if Y I need to add a letter
  //prompt --> Do they want lowercase letters?
  //prompt --> Do they want numbers?
  //prompt --> Do they want special characters?
  //validate that the user has chosen at least one character set -->  if not, either have them start over OR recursively call the function that prompts for the character sets
  //with each of those prompts, you need an array of those character types
  //There needs to be at least one of each selected character type included in the password
  //Randomly generate a character from each character set as it's chosen and add it to the end of the password that you are building  (set up PW as array and use .push at end, or store it as a string and use .concat() to add)
  //for loop: 
  //for (var i = password.length - 1; i < passwordLength; i++)   - remove from pseudo-code*****
  // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
  // IF keeping the character sets separate, randomly generate number to tell which array you're pulling from, then randomly generate number to pull the character from the array (character will by array[number])
  // *IF pushing to a mega-array randomly generate a number to pull a character from the array
  // *IF pushing to mega-array, remember to set the array back to an empty array at the start of the process!
  //return the generated password and code below will print it to the page - use different name to hold password while it's being generated
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //function above is saying find thing in html with id of password and store that HTML element in the passwordText variable - then set that value in the password variable

}

// *****Create  - function generatePassword() { - that will end up with  return userPassword*****

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




