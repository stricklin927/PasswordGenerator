// Variables
var enter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;

// Variable Values
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "]"];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start of function to generate password
function generatePassword() {
    // Prompts user for number, password length
    enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
    // If statement, validates input 
    if (!enter) {
        alert("Error: You must input a value.");
    }
    else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Error: Value must be between 8 and 128."));
    }
    else {
        confirmNumber = confirm("Does password require numbers?");
        confirmUppercase = confirm("Does password require uppercase letters?");
        confirmLowercase = confirm("Does password require lowercase letters?");
        confirmCharacter = confirm("Does password require special characters?");
    };

    // Else if, 4 false statements
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Error: You must choose at least 1 criteria.");
    }

    // Else if, 4 true statements
    else if (confirmNumber && confirmUppercase && confirmLowercase && confirmNumber) {
        choices = number.concat(upper, lower, character);
    }

    // Else if, 3 true statements
    else if (confirmNumber && confirmUppercase && confirmLowercase) {
        choices = number.concat(upper, lower);
    }
    else if (confirmNumber && confirmUppercase && confirmCharacter) {
        choices = number.concat(upper, character);
    }
    else if (confirmNumber && confirmLowercase && confirmCharacter) {
        choices = number.concat(lower, character);
    }
    else if (confirmUppercase && confirmLowercase && confirmCharacter) {
        choices = upper.concat(lower, character);
    }

    // Else if, 2 true statements
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upper);
    }
    else if (confirmNumber && confirmLowercase) {
        choices = number.concat(lower);
    }
    else if (confirmNumber && confirmCharacter) {
        choices = number.concat(character);
    }
    else if (confirmUppercase && confirmLowercase) {
        choices = upper.concat(lower);
    }
    else if (confirmUppercase && confirmCharacter) {
        choices = upper.concat(character);
    }
    else if (confirmLowercase && confirmCharacter) {
        choices = lower.concat(character);
    }

    // Else if, 1 true statement
    else if (confirmNumber) {
      choices = number;
    }
    else if (confirmUppercase) {
      choices = upper;
    }
    else if (confirmLowercase) {
      choices = lower;
    }
    else if (confirmCharacter) {
      choices = character;
    };

    // Length of password determined by user
    var password = [];

    // Random selection for all true variables
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates new password into textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Copy to clipboard button
var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
  copyPassword();
});
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Copied to Clipboard");
}