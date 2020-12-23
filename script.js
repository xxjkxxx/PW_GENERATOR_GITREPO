// Assignment Code
var generateBtn = document.querySelector("#generate");

//empty arrays
var pass = [];
var finalPassword = [];
var password = "";


// Array of special characters to be included in password
var specialCharacters = ['@','%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password variable value is: " + password);

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword() {
  //ask for length
   var length = prompt("Please enter a password length between 8 and 128"); 
   if (length >= 8 && length <=128) {
     localStorage.setItem("length", length)}
   else (null)

  if (length >= 8 && length <=128) {
    alert("You have chosen a password of " + length + " characters");
  }
else {
  alert("Characters need to be between 8 and 128")

}
  //ask if they want to use uppercase
  if (confirm ("Would you like to add Uppercase letters?")) {
    localStorage.setItem("Upper", "True")
  } else {
    localStorage.setItem("Upper", "False")
  }

  //ask if they want to use lowercase
  if (confirm ("Would you like to add Lowercase letters?")) {
    localStorage.setItem("Lower", "True")
  } else {
    localStorage.setItem("Lower", "False")
  }

    //ask if they want to use numbers
    if (confirm ("Would you like to add Numerics?")) {
      localStorage.setItem("Numbers", "True")
    } else {
      localStorage.setItem("Numbers", "False")
    }

      //ask if they want to use special characters
  if (confirm ("Would you like to add special characters")) {
    localStorage.setItem("special", "True")
  } else {
    localStorage.setItem("special", "False")
  }

}



