// Assignment code here
const alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
const specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+",".",",","?","_",";","'",'"',"[","]"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];

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

//Create Password
function generatePassword() {
  let validLength = false;

//Password Length Check
//While the password length is invalid, prompt for a valid password length
var passLength = 0;
  while (!validLength) {
    const userInput = prompt("Please enter a password between 8 and 128 Characters");
    //Correct Password Length
    if (userInput > 7 && userInput < 129) {
      var passLength = userInput;
      validLength = true;
    }
    //Alert user of Incorrect Password length
    else {
      alert(`You entered ${userInput}, which is not between 8 and 128 Characters`)
    }
  }

  console.log(passLength);

  //Confirm for Uppercase Characters
  const isUpper = confirm("Would you like your password to include Uppercase Characters?");

  //Confirm for Special Characters
  const isSpecial = confirm("Would you like your password to include Special Characters?");

  //Confirm for Numeric Characters
  const isNumber = confirm("Would you like your password to include Numbers?")

  //Password Builder
  var passBuild = [];
  var tick = 0;

  while(tick < passLength) {

    //add a random lowercase character to the builder
    var ranLower = Math.floor(Math.random() * alphaLower.length);
    var passBuild = passBuild.concat(alphaLower[ranLower]);
    tick++

    //check if user wanted uppercase characters, then add a random index to builder
    if (isUpper == true) {
      var ranUppChar = Math.floor(Math.random() * alphaUpper.length);
      var passBuild = passBuild.concat(alphaUpper[ranUppChar]);
      tick++
    }

    //check if user wanted number characters, then add a random index to builder
    if (isNumber == true) {
      var ranNumbChar = Math.floor(Math.random() * numbers.length);
      var passBuild = passBuild.concat(numbers[ranNumbChar]);
      tick++
    }

    //check if user wanted special characters, then add a random index to builder
    if (isSpecial == true) {
      var ranSpecialChar = Math.floor(Math.random() * specialChar.length);
      var passBuild = passBuild.concat(specialChar[ranSpecialChar]);
      tick++
    }

  }
  //returns built password and joins the array into a string. 
  return passBuild.join("");


}