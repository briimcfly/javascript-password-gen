// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt user for password length 

//Check to make sure the password length is between 8 and 128 Characters 

//Prompt for lowercase characters

//Prompt for uppercase characters

//prompt for special characters 

//prompt for numeric 

//generate a password that matches the criteria 

//write the password to the page 