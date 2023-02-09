var characterLength = 8;
var choiceArray = ["", "", "", "", "", "", "", "", ""];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  characterLength = parseInt(
    prompt("what shall your password length be? (8-128 characters)")
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8-128. Please try again.");
    return false;
  }

  if (confirm("Would you want any lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you want any uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (
    confirm("Would you want any special characters letters in your password?")
  ) {
    choiceArray = choiceArray.concat(specialCharArray);
  }

  if (confirm("Would you want any numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}
