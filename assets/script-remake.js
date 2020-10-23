// Assignment Code
var generateBtn = document.querySelector("#generate");

// List if lower case letters.
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// List of upper case letters
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//List of numbers.
let numbers = [0,1,2,3,4,5,6,7,8,9];
// List of symbols
let symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



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

  // CONFIRM if the password generator is using lower case letters
  let useLower = confirm('Include lowercase letters in your password?')
  //IF  using lowercase letters
  if (useLower == true) {
    //THEN push lowercase into the charactersToUse list
    charactersToUse.push(lowercase[[Math.floor(Math.random * lowercase.length)]])
    //AND APPEND on random number from the 'lowercase' list
    charactersToUse.append
  }
console.log(charactersToUse)
  // CONFIRM if its using upper case letters
  let useUpper = confirm('Include uppercase letters in your password?')

  // IF  using upper case letters
  if (useUpper == true) { 

    // THEN push upper case into the charactersToUse list

    // AND APPEND on random number from the 'uppercase' list

  }
  
  // CONFIRM if its using numbers
  let useNumbers = confirm('Include numbers in your password?')

  // IF using numbers
  if (useNumbers == true) {

  // THEN push numbers into the charactersToUse list

  // AND APPEND on random number from the 'numbers' list

  }

  // CONFIRM if its using symbols
  let useSymbols = confirm('Include symbols in your password?')
  // IF  using symbols
  if (useSymbols == true) {

  // THEN push symbols into the charactersToUse list

  // AND APPEND on random number from the 'symbols' list

  }

  if ( !useLower && !useUpper && !useNumbers && !useSymbols) {
    alert('You must pick at least one of the 4 criteria to fill your password. Try again.')
    return;
  }

  // IF NOT charactersToUse.length
  // THEN ALERT to the user that they need to provide a correct length
  // AND EXIT FUNCTION
  

  while( password.length < passwordLength ) {

    // SELECT a 'randomcharacter' a character fromm charactersToUse
    // APPEND 'randomcharacter' to 'password' string

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
generateBtn.addEventListener("click", writePassword); {
  console.log(charactersToUse[lowercase])
}
