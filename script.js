// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
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
  '.',
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
  'z',
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
  'Z',
];
var password = [];
var pwdLength;
var pwdSpecial;
var pwdUpper;
var pwdLower;
var pwdNumber;
var pwdChoosen = [];

function passwordLength () {
var pwdLength = parseInt (prompt ("How long do you want your password?"));
if (pwdLength < 8 || pwdLength > 128){
  alert ('Too many characers or not enough')
  passwordLength ();
  return null;
} else if (pwdLength >= 8 && pwdLength <= 128){
  console.log(pwdLength);
  userChoices ();
  return pwdLength;

} else {
  alert ("Wrong syntax, please enter a number");
  passwordLength ();
  return null;
} }
function userChoices () {
  var pwdSpecial = confirm ("Click ok if you want special characters in your password");
  var pwdUpper = confirm ("Click ok if you want uppercase");
  var pwdLower = confirm ("Click ok if you want lowercase");
  var pwdNumber = confirm ("Click ok if you want a number");
  if (!pwdSpecial && !pwdUpper && !pwdLower && ! pwdNumber){
    alert ("Pick at least one option");
    userChoices ();
    return null;
  }
console.log (pwdSpecial);
console.log (pwdUpper);
console.log (pwdLower);
console.log (pwdNumber);
concatArray ();
}
function concatArray () {
  var pwdChoosen = [];
  if (pwdSpecial) {
    pwdChoosen = pwdChoosen.concat(pwdSpecial)
  }
  if (pwdUpper) {
    pwdChoosen = pwdChoosen.concat(pwdUpper)
  }
  if (pwdLower) {
   pwdChoosen = pwdChoosen.concat(pwdLower) 
  }
  if (pwdNumber) {
    pwdChoosen = pwdChoosen.concat(pwdNumber)
  }
  console.log (pwdChoosen);
  var password = passLoop ();
  var passwordText = document.querySelector ("#password");
  passwordText.value = password;
}
function passLoop() {
password = [];
for (let i = 0; i < passwordLength(); i++) {
  password = password.concat (pwdChoosen[Math.floor (Math.random()* pwdChoosen.length)])
   }
   console.log (passwordLength())
   console.log (password)
   return password.join ("");
}  
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = passwordLength();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
