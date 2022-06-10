// Assignment code here
function randlowercase () {
    var character = String.fromCharCode(Math.floor(Math.random()*26)+"a".charCodeAt(0)); 
    return character;
};
function randupercase (){
    var character = String.fromCharCode(Math.floor(Math.random()*26)+"A".charCodeAt(0)); 
    return character;
};
function randnumber () {
    var character = String.fromCharCode(Math.floor(Math.random()*9)+"0".charCodeAt(0)); 
    return character;
};
function randSpecial (){
  switch (Math.floor(Math.random()*4)+1){
    case 1:
      var character = String.fromCharCode(Math.floor(Math.random()*16)+" ".charCodeAt(0)); 
      break;
    case 2:
      var character = String.fromCharCode(Math.floor(Math.random()*7)+":".charCodeAt(0)); 
      break;
    case 3:
      var character = String.fromCharCode(Math.floor(Math.random()*6)+"[".charCodeAt(0)); 
      break;
    case 4:
      var character = String.fromCharCode(Math.floor(Math.random()*4)+"{".charCodeAt(0)); 
      break;
    }
  return character;
};



/*---------------Function for code generate function------------------------------------------------------*/ 
function generatePassword(){
  //define a structure for password
  var password = {
    length:0,
    uppercase:"",
    lowercase:"",
    numeric:"",
    SpecialCharacters:""
  };
  //type in a number for length, it should between 8~128
  while (1){
      password.length = window.prompt("Please type in its length!");
      if (!isNaN(password.length) ){
        if (password.length <8) {
          window.alert("The password length is at least 8, try again!" );
        } 
        else if (password.length >128){
          window.alert("The password length is no more than 128, try again!");
        }
        else {
          window.alert("The length is good!");
          break;
        }
      } else {
        window.alert("Please type in a number!");
      }
  }
  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  while (1){
    password.uppercase = window.prompt("Do you want uppercase ?");
    if (password.uppercase=="yes" || password.uppercase=="no"){
      break;
    } else {
      window.alert("Please type in yes/no!");
    }
  }
  while (1){
    password.lowercase = window.prompt("Do you want lowercase ?");
    if (password.lowercase=="yes" || password.lowercase=="no"){
      break;
    } else {
      window.alert("Please type in yes/no!");
    }
  }
  while (1){
    password.numeric = window.prompt("Do you want numeric ?");
    if (password.numeric=="yes" || password.numeric=="no"){
      break;
    } else {
      window.alert("Please type in yes/no!");
    }
  }
  while (1){
    password.SpecialCharacters = window.prompt("Do you want special characters ?");
    if (password.SpecialCharacters=="yes" || password.SpecialCharacters=="no"){
      break;
    } else {
      window.alert("Please type in yes/no!");
    }
  }
  //give a conclusion of user sets
  window.alert("This is your set \n" + "password length:"+password.length+" \n"+"uppercase:"+  password.uppercase+" \n" +"lowercase:"+ password.lowercase+" \n" +"numeric:"+ password.numeric+" \n"+"special:" +password.SpecialCharacters+" \n");
  //generate a password according to users' sets
  var pw = [];
  for(var n=0; n<password.length; n++){
    
    switch (Math.floor(Math.random()*4)+1){
      case 1:
        var pickChar=randlowercase ();
        break;
      case 2:
        var pickChar=randupercase ();
        break;
      case 3:
        var pickChar=randnumber ();
        break;
      case 4:
        var pickChar=randSpecial ();
        break;
      }
    
    pw[n]=pickChar;
  }
  
    return pw.join('');

};





/*--------------------------------Start codes---------------------------------------*/ 
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
