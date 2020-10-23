// Assignment Code
var generateBtn = document.querySelector("#generate");

// List if lower case letters.
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// List of upper case letters
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//List of numbers.
let numbers = [0,1,2,3,4,5,6,7,8,9];
// List of symbols
let symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// let randomLower = lowercase[Math.floor(Math.random() * lowercase.length)];
// let randomUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
// let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
// let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

// console.log (randomLower, randomUpper, randomNumber, randomSymbol)


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

  //DECLARE a new list of characters to use
  let charactersToUse = [];

  // DECLARE a new password string
  let password = '';

  // CONFIRM if the password generator is using lower case letters
  let useLower = confirm('Include lowercase letters in your password?')
  //IF  using lowercase letters
  if (useLower == true) {
    //THEN push lowercase into the charactersToUse list
    charactersToUse.push(lowercase)
    // AND APPEND on random number from the 'lowercase' list
    charactersToUse[Math.floor(Math.random() * lowercase.length)];
  }

  // CONFIRM if its using upper case letters
  let useUpper = confirm('Include uppercase letters in your password?')

  // IF  using upper case letters
  if (useUpper == true) { 

    // THEN push upper case into the charactersToUse list
    charactersToUse.push(uppercase)
    // AND APPEND on random number from the 'uppercase' list
    charactersToUse[Math.floor(Math.random() * uppercase.length)];
  }
  
  // CONFIRM if its using numbers
  let useNumbers = confirm('Include numbers in your password?')

  // IF using numbers
  if (useNumbers == true) {

    // THEN push numbers into the charactersToUse list
    charactersToUse.push(numbers)
    // AND APPEND on random number from the 'numbers' list
    charactersToUse[Math.floor(Math.random() * numbers.length)];
  }

  // CONFIRM if its using symbols
  let useSymbols = confirm('Include symbols in your password?')
  // IF  using symbols
  if (useSymbols == true) {

    // THEN push symbols into the charactersToUse list
    charactersToUse.push(symbols)
    // AND APPEND on random number from the 'symbols' list
    charactersToUse[Math.floor(Math.random() * symbols.length)];
  }

  // If no character type variables are chosen
  if ( !useLower && !useUpper && !useNumbers && !useSymbols) {
    // THEN ALERT the user that they need to pick at least one.
    alert('You must pick at least 1 of the 4 criteria to fill your password. Try again.')
    // RETURN the user so they can start over.
    return;
  }  

  while( password.length < passwordLength ) {

    // SELECT a 'randomcharacter' a character from charactersToUse
    let randomcharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    // APPEND 'randomcharacter' to 'password' string
    password.concat(randomcharacter);
    
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
}
