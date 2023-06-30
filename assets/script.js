// Global
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+",".",",","?","_",";","'",'"',"[","]"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

var passBuild = [];
var tick = 0;
var ranNumb = 0;
var isUpper, isSpecial, isNumber;

function characterAdd(charArray) {
  var ranNumb = Math.floor(Math.random() * charArray.length);
  passBuild = passBuild.concat(charArray[ranNumb]);
  tick++
}

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
    else if (userInput == null){
      return;
    }
    //Alert user of Incorrect Password length
    else {
      alert(`You entered ${userInput}, which is not between 8 and 128 Characters`)
    }
  }

  // Force user to choose at least one Character Type. And loop until they do. 
  extraChar = false;
  do {
    var isUpper = confirm("Would you like your password to include Uppercase Characters?");
    var isSpecial = confirm("Would you like your password to include Special Characters?");
    var isNumber = confirm("Would you like your password to include Numbers?");
    if (!isUpper && !isSpecial && !isNumber) {
      alert(`Sorry, you need to include at least one Character type.. ` )
    }
    else{
      extraChar = true;
    }
  } while(!extraChar);

  //Password Builder

  while(tick < passLength) {
    //add a random lowercase character to the builder
    characterAdd(alphaLower);

    //check if user wanted uppercase characters, then add a random index to builder
    if (isUpper) {
      characterAdd(alphaUpper);
    }

    //check if user wanted number characters, then add a random index to builder
    if (isNumber) {
      characterAdd(numbers);
    }

    //check if user wanted special characters, then add a random index to builder
    if (isSpecial) {
      characterAdd(specialChar);
    }
  }


  // Shuffle the built array to avoid patterns 
  function passShuffle(passBuild) {
    passBuild.sort(() => Math.random() - 0.5);
  }
  passShuffle(passBuild);

  //returns built password and joins the array into a string. 
  return passBuild.join("");


}