// Assignment Code
var generateBtn = document.querySelector("#generate");

// My variables:

var passwordLength = ();
// Array of lowercase letters
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase letters
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of special characters used in passwords
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '='];

function generatePassword() {

  //Need the following variables:
    //selected length of the password
    //array of lowercase letters
    //array of uppercase letters
    //array of numbers letters
    //array of special characters letters
    //use .split('') to create arrays   - remove from pseudo-code*****
    //variable to hold the password we are building
    //possibly need var to hold mega array

    //prompt for password length --> stored in a variable
    //Validate the user input --> if user chooses <8 or >123 alert that they need to choose a valid password length they they need to restart process or call function again
    //prompt --> Do they want uppercase letters?
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




