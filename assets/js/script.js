// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = [  "@",  "%",  "+",  "!",  "#",  "$",  "^",  "?",  ":",  ",",  ")",  "(",  "}",  "{",  "]",  "[",  "~",  "-",  "_",  ".",];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLetters = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",];
var lowerCaseLetters = [  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",];

var emptyArr = []

function generatePassword() {
  var passwordLength = parseInt(prompt('Please chose a number between 8 and 128, this will be the length of you new password!'));
    if (passwordLength < 8 || passwordLength >128) {
      window.alert("Something's not quite right.. Please enter a number between 8-128."); 
      return 'Try again.';
    }

  // TODO: condiitonal between 8-128 and check if it's a number.
  var numberVerification = confirm("click 'OK' if you'd like to add numbers.")
  var specialCharVerification = confirm("click 'OK' if you'd like to add special. (ex. !, @, #..).")
  var upperCaseVerification = confirm("click 'OK' if you'd like to add capital letters.")
  var lowerCaseVerification = confirm("click 'OK' if you'd like to add lower case letters.")
  if (numberVerification === false && specialCharVerification === false && lowerCaseVerification === false && upperCaseVerification === false) {
    window.alert('Please select at least one character set.')
    return 'Try again.';
  }
  if (numberVerification) {
    for (let i = 0; i < numericCharacters.length; i++) {
      emptyArr[emptyArr.length] = numericCharacters[i]
      
    }
}
  if (specialCharVerification) {
    for (let i = 0; i < specialCharacters.length; i++) {
      emptyArr[emptyArr.length] = specialCharacters[i]
      
    }
}
  if (upperCaseVerification) {
    for (let i = 0; i < upperCaseLetters.length; i++) {
      emptyArr[emptyArr.length] = upperCaseLetters[i]
      
    }
}
  if (lowerCaseVerification) {
    for (let i = 0; i < lowerCaseLetters.length; i++) {
      emptyArr[emptyArr.length] = lowerCaseLetters[i]
      
    }
}
// console.log(emptyArr);

var newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
  newPassword += emptyArr[Math.floor(Math.random() * emptyArr.length)];
  console.log('inside', newPassword);
  }
  console.log('outside', newPassword);
  return newPassword;
}
