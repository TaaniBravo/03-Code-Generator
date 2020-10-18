// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generator Functions - these are going to help us create the passwords by having these functions pull from a random number and associating it with the correct string on the Character Code. 

// The charCode that I am referencing can be found here https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

function randomLowerCase() {
  // Here I have the function returning us a random string from the CharCode from 97 up to 122. This will out put letters a-z in lower case.
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 97);
}

function randomUpperCase() {
  // Here I have the function returning us a random string from the CharCode from 65 up to 90. This will out put letters A-Z in upper case.
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random()) * 10 + 48);
}

function randomSymbol() {
  return String.fromCharCode(Math.floor(Math.random()) * 15 + 33)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

  function characterAmount() {
    prompt('Please choose from 8 to 128 characters.')

  function includeUpperCase() {
    confirm('Include Uppercase?')

  function includeNumbers() {
    confirm('Include Numbers?')

  function includeSymbols() {
    confirm('Include Symbols?')
  }
  }
}
}
}
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page