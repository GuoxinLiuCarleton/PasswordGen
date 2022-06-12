// Assignment code here
/*Random functions*/
//define a function to generate a random lowercase char
function randlowercase () {
    var character = String.fromCharCode(Math.floor(Math.random()*26)+"a".charCodeAt(0)); 
    return character;
};
//random lowercase function end
//define a function to generate a random upercase char
function randupercase (){
    var character = String.fromCharCode(Math.floor(Math.random()*26)+"A".charCodeAt(0)); 
    return character;
};
//random upercase char function end
//define a function to generate a random number char
function randnumber () {
    var character = String.fromCharCode(Math.floor(Math.random()*9)+"0".charCodeAt(0)); 
    return character;
};
//random number char function end
//define a function to generate a random special char
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
//random special char function end


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
 
  /*###########Step 1:Start a while loop ask for select wanted types, users must select at least one type, otherwise they have to select again############## */
  while (1){
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
    //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. Also, users' inputs must be yes/no, other inputs will be rejected.
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
    if (password.uppercase=="no" &&password.lowercase=="no"&&password.numeric=="no"&&password.SpecialCharacters=="no"){ 
      window.alert("You must choose at least one among lowercase, uppercase, numeric, and/or special characters!");
    }else {
      break;
    }
  }/*##########################while loop end, next according to the users' selection generate a random password. However, no selection will go back###########################################################*/

  /*#############Step 2: list all possibilities and give detail codes. We have 15 possible inputs 
  Four types: 1111
  Three types: 0111,1011,1101,1110
  Two types: 1001,1010,1100,0101,0110,0011
  One type:1000,0100,0010,0001
  No type will go back
  ########################################################*/
  var pw = [];
  for(var n=0; n<password.length; n++){
    if (password.uppercase=="yes" && password.lowercase=="yes" && password.numeric=="yes" && password.SpecialCharacters=="yes" ){
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
    } else if (password.uppercase=="no" && password.lowercase=="yes" && password.numeric=="yes" && password.SpecialCharacters=="yes" ) {
        switch (Math.floor(Math.random()*3)+1){
          case 1:
            var pickChar=randlowercase ();
            break;
          case 2:
            var pickChar=randnumber ();
            break;
          case 3:
            var pickChar=randSpecial ();
            break;
          }
    } else if (password.uppercase=="yes" && password.lowercase=="no" && password.numeric=="yes" && password.SpecialCharacters=="yes" ) {
        switch (Math.floor(Math.random()*3)+1){
          case 1:
            var pickChar=randupercase ();
            break;
          case 2:
            var pickChar=randnumber ();
            break;
          case 3:
            var pickChar=randSpecial ();
            break;
          }
    } else if (password.uppercase=="yes" && password.lowercase=="yes" && password.numeric=="no" && password.SpecialCharacters=="yes" ) {
        switch (Math.floor(Math.random()*3)+1){
          case 1:
            var pickChar=randlowercase ();
            break;
          case 2:
            var pickChar=randupercase ();
            break;
          case 3:
            var pickChar=randSpecial ();
            break;
          }
    } else if (password.uppercase=="yes" && password.lowercase=="yes" && password.numeric=="yes" && password.SpecialCharacters=="no" ){
        switch (Math.floor(Math.random()*3)+1){
          case 1:
            var pickChar=randlowercase ();
            break;
          case 2:
            var pickChar=randupercase ();
            break;
          case 3:
            var pickChar=randnumber ();
            break;
          }
    } else if (password.uppercase=="no" && password.lowercase=="no" && password.numeric=="yes" && password.SpecialCharacters=="yes" ) {
        switch (Math.floor(Math.random()*2)+1){
          case 1:
            var pickChar=randnumber ();
            break;
          case 2:
            var pickChar=randSpecial ();
            break;
          }
    } else if (password.uppercase=="no" && password.lowercase=="yes" && password.numeric=="no" && password.SpecialCharacters=="yes" ) {
        switch (Math.floor(Math.random()*2)+1){
          case 1:
            var pickChar=randlowercase ();
            break;
          case 2:
            var pickChar=randSpecial ();
            break;
          }
    } else if (password.uppercase=="no" && password.lowercase=="yes" && password.numeric=="yes" && password.SpecialCharacters=="no" ) {
        switch (Math.floor(Math.random()*2)+1){
          case 1:
            var pickChar=randlowercase ();
            break;
          case 2:
            var pickChar=randnumber ();
            break;
          }
    }else if (password.uppercase=="yes" && password.lowercase=="no" && password.numeric=="no" && password.SpecialCharacters=="yes" ) {
        switch (Math.floor(Math.random()*2)+1){
          case 1:
            var pickChar=randupercase ();
            break;
          case 2:
            var pickChar=randSpecial ();
            break;
          }
    }else if (password.uppercase=="yes" && password.lowercase=="no" && password.numeric=="yes" && password.SpecialCharacters=="no" ) {
        switch (Math.floor(Math.random()*2)+1){
          case 1:
            var pickChar=randupercase ();
            break;
          case 2:
            var pickChar=randnumber ();
            break;
          }
    }else if (password.uppercase=="yes" && password.lowercase=="yes" && password.numeric=="no" && password.SpecialCharacters=="no" ) {
        switch (Math.floor(Math.random()*2)+1){
          case 1:
            var pickChar=randlowercase ();
            break;
          case 2:
            var pickChar=randupercase ();
            break;
          }
    }else if (password.uppercase=="no" && password.lowercase=="no" && password.numeric=="no" && password.SpecialCharacters=="yes" ) {
        var pickChar=randSpecial ();
    }else if (password.uppercase=="no" && password.lowercase=="no" && password.numeric=="yes" && password.SpecialCharacters=="no" ) {
        var pickChar=randnumber ();
    }else if (password.uppercase=="no" && password.lowercase=="yes" && password.numeric=="no" && password.SpecialCharacters=="no" ) {
        var pickChar=randlowercase ();
    }else if (password.uppercase=="yes" && password.lowercase=="no" && password.numeric=="no" && password.SpecialCharacters=="no" ) {
        var pickChar=randupercase ();
    } 
    pw[n]=pickChar;
  }
  /*###############For loop end, the generated password will be returned ####################*/
    return pw.join('');

};
/* -------------------------password generation function end-------------------------------------------------------------------------------*/

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
