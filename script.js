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

//Change passwordLength to a number
passwordLength = Number(passwordLength);
// console.log(typeof passwordLength);
console.log("Number of Characters Wanted: " + passwordLength);


var uppercaseLettersWanted = '';
var lowercaseLettersWanted = '';
var numbersWanted = '';
var specialCharactersWanted = '';

//See Credits #1 in README to find link to article where I found examples of WHILE to help me create my WHILE loops 

while (uppercaseLettersWanted !== 'Y' && lowercaseLettersWanted !== 'Y' && numbersWanted !== 'Y' && specialCharactersWanted !== 'Y') {
  
  uppercaseLettersWanted = window.prompt('Do you want to include uppercase letters, Y or N?').toUpperCase();
  while (uppercaseLettersWanted !== 'Y' && uppercaseLettersWanted !== 'N') {
    uppercaseLettersWanted = window.prompt('Oops, you entered something other than Y or N.  Please answer again!  Do you want to include uppercase letters, Y or N?').toUpperCase();
  }

  lowercaseLettersWanted = window.prompt("Do you want to include lowercase letters, Y or N?").toUpperCase();
  while (lowercaseLettersWanted !== 'Y' && lowercaseLettersWanted !== 'N') {
    lowercaseLettersWanted = window.prompt('Oops, you entered something other than Y or N.  Please answer again!  Do you want to include lowercase letters, Y or N?').toUpperCase();
  }

  numbersWanted = window.prompt("Do you want to include numbers, Y or N?").toUpperCase();
  while (numbersWanted !== 'Y' && numbersWanted !== 'N') {
    numbersWanted = window.prompt('Oops, you entered something other than Y or N.  Please answer again!  Do you want to include numbers, Y or N?').toUpperCase();
  }

  specialCharactersWanted = window.prompt("Do you want to include special characters, Y or N?").toUpperCase();
    while (specialCharactersWanted !== 'Y' && specialCharactersWanted !== 'N') {
      specialCharactersWanted = window.prompt('Oops, you entered something other than Y or N.  Please answer again!  Do you want to include special characters, Y or N?').toUpperCase();
  }

  if (uppercaseLettersWanted !== 'Y' && lowercaseLettersWanted !== 'Y' && numbersWanted !== 'Y' && specialCharactersWanted !== 'Y') {
    alert('OOPS!  You did not select at least one character-set for your password.  Please try again!');
  }
}

console.log("Uppercase Letters Wanted: " + uppercaseLettersWanted);
console.log("Lowercase Letters Wanted: " + lowercaseLettersWanted);
console.log("Numbers Wanted: " + numbersWanted);
console.log("Special Characters Wanted: " + specialCharactersWanted);


//See Credits #2 in README for link to article where I found math code, see Credits #3 for push();


var passwordInProgress = [];

if (uppercaseLettersWanted === 'Y') {
  passwordInProgress.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
}

if (lowercaseLettersWanted === 'Y') {
  passwordInProgress.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
}

if (numbersWanted === 'Y') {
  passwordInProgress.push(numbers[Math.floor(Math.random() * numbers.length)]);
}

if (specialCharactersWanted === 'Y') {
  passwordInProgress.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
}

console.log(passwordInProgress);


//See Credits #4 in README to see article explaining how to merge two arrays with .push()

var charactersSelectedForPassword = [];

if (uppercaseLettersWanted === 'Y') {
  charactersSelectedForPassword.push(...uppercaseLetters);
}

if (lowercaseLettersWanted === 'Y') {
  charactersSelectedForPassword.push(...lowercaseLetters);
}

if (numbersWanted === 'Y') {
  charactersSelectedForPassword.push(...numbers);
}

if (specialCharactersWanted === 'Y') {
  charactersSelectedForPassword.push(...specialCharacters);
}

console.log(charactersSelectedForPassword);


//TODO Randomly generate the rest of my passwordInProgress to equal the passwordLength input selected by the user
var passwordInProgressCount = passwordInProgress.length;
console.log('pw count ' + passwordInProgressCount)
console.log(typeof passwordInProgressCount)
for (var i = passwordInProgressCount; i < passwordLength; i++) {
  passwordInProgress.push(charactersSelectedForPassword[Math.floor(Math.random() * charactersSelectedForPassword.length)]);
}

console.log('password in progress is ' + passwordInProgress);

function generatePassword() {
}

//TODO Turn the passwordInProgress array into a single string item and display it in the html

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordInProgress.join('');
}

//Alert to click red Generate button
window.alert('Thank you for your input.  Please click the "Generate Password" button for your new password!')

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Adding a refresh button so they can refresh the program and start again
var generateRefreshBtn = document.querySelector("#refresh");

generateRefreshBtn.addEventListener("click", function() {
  location.reload();
});