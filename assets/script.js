// Assignment Codes
var generateBtn = document.querySelector("#generate");

// Random Generator Functions 
let useLower = function randomLowerCase() {
  // This will out put letters a-z in lower case fromCharCode.
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(useLower())

let useUpper = function randomUpperCase() {
  // This will out put letters A-Z in upper case fromCharCode.
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(useUpper())

let useNumbers = function randomNumber() {
  // This will out put numbers fromCharCode.
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(useNumbers())

let useSymbols = function randomSymbol() {
  // Using concatenation we have this function pull from the 4 ranges in the character code and then it randomly picks from those 4.
  const randomSym = String.fromCharCode(Math.floor(Math.random() * 15) + 32).concat(
    String.fromCharCode(Math.floor(Math.random() * 7) + 58)
  ).concat(
    String.fromCharCode(Math.floor(Math.random() * 6) + 91)
  ).concat(
    String.fromCharCode(Math.floor(Math.random() * 4) + 123)
  )

  let randomIndex = (Math.floor(Math.random() * randomSym.length))
  return randomSym[randomIndex]
}
console.log(useSymbols())

// The charCode that I am referencing can be found here https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

function generatePassword() {
  // Password Length
  function characterAmount() {
    var pwLength = parseInt(prompt('Please choose from 8 to 128 characters.'))
    
    // We will use a if and else if statement to make sure they follow the parameters we give them.
    if (pwLength === "") {
      alert('This box cannot be empty.')
    }
    else if (pwLength < 8 || pwLength > 128) {
      alert('This prompt needs a value between 8 and 128.')
    }

    console.log(pwLength)
  }

  // To include lower case or not.
  function includeLowerCase() {
    useUpper = confirm('Include lower case letters?')
    if (useLower = true) {

    }
    else {}
  }

  // To include upper case letters or not.
  function includeUpperCase() {
    confirm('Include upper case letters?')
  }

  // To include numbers or not.
  function includeNumbers() {
    confirm('Include numbers?')
  }

  // To include symbols or not.
  function includeSymbols() {
    confirm('Include symbols?')
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordEL = document.getElementById('password');

  passwordText.value = password;
  password = '';
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password


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