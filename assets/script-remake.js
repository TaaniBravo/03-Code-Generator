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

  //declare a new list of characters to use
  let charactersToUse = [];

  // declare a new password string
  let password = '';

  // Confirm if the password generator is using lower case letters

  //IF  using lowercase letters
  //THEN push lowercase into the charactersToUse list
  //AND APPEND  on random number from the numbers' list

  // CONFIRM if its using upper case letters

  // IF  using upper case letters
  // THEN push upper case into the charactersToUse list

  // CONFIRM if its using numbers

  // IF using numbers
  // THEN push numbers into the charactersToUse list

  // CONFIRM if its using symbols

  // IF  using symbols
  // THEN push symbols into the charactersToUse list

  // IF NOT charactersToUse.length
  // THEN ALERT to the user that they need to provide a correct length
  // AND EXIT FUNCTION
  

  while( password.length < passwordLength ) {

    // SELECT a randomcharacter a character form charactersToUse
    // APPEND randomcharacter to password string

  }

  //'RETURN password'
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
