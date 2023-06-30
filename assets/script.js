// Assignment code here
alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+",".",",","?","_",";","'",'"',"[","]"];
numbers = ["1","2","3","4","5","6","7","8","9","0"];


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
function generatePassword() {
  validLength = false;

  while (!validLength) {
    let passLength = prompt("Please enter a password between 8 and 128 Characters");
    if (passLength > 7 && passLength < 129) {
      validLength = true;
    }
    else {
      alert(`You entered ${passLength}, which is not between 8 and 128 Characters`)
    }
  }

let uppChar = confirm("Would you like Uppercase Characters?");
console.log(uppChar);

console.log(`the length is ${passLength} and the Uppercase is ${uppChar}`);



}

//Check to make sure the password length is between 8 and 128 Characters 

//Prompt for lowercase characters

//Prompt for uppercase characters

//prompt for special characters 

//prompt for numeric 

//generate a password that matches the criteria 

//write the password to the page 