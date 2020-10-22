// Assignment Code
var generateBtn = document.querySelector("#generate");

// List if lower case letters.
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// List of upper case letters
let uppercase = lowercase.toUpperCase();
//List of numbers.
let numbers = [0,1,2,3,4,5,6,7,8,9];
// List of symbols
let symbols = [];



function generatePassword() {

  //Prompt the user for a password length
  const passwordLength = parseInt(prompt('Provide a length for the password between 8 and 128 characters.'))
  // if statement if the the password length is 0.
  if (passwordLength === 0) {
    alert('Please provide a number between 8 and 128 characters.')
  }
  // if the user provides a number outside of the length range.
  else if (passwordLength < 8 || passwordLength > 128){
    alert('Please provide a number between 8 and 128 characters.')
    // then exit function.
    return;
  }

  // Confirm if the password generator is using letters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
