const small_char = "abcdefghijklmnopqrstuvwxyz";
const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special_chars = "!@#$%^&*()_+{}|:<>?";

//window.addEventListener("load", function () {});

function showValueOfRange(range) {
console.log(range)
  document.getElementById("showRange").innerHTML = range.value;
}

function generatePassword() {
  var includeUppercase = document.getElementById("capLetters").checked;
  var includeLowercase = document.getElementById("smallLetters").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSpecialChars = document.getElementById("specialChars").checked;

  if (
    includeLowercase == false &&
    includeUppercase == false &&
    includeNumbers == false &&
    includeSpecialChars == false
  ) {
    return (document.getElementById("passwordLabel").innerHTML =
      "Please select at least one option");
  }

  let allChars = "";
  if (includeUppercase) allChars += large_char;
  if (includeLowercase) allChars += small_char;
  if (includeNumbers) allChars += numbers;
  if (includeSpecialChars) allChars += special_chars;

  var length = document.getElementById("lengPassword").value;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("passwordLabel").innerHTML = password;

  setSecurityInfo(length, includeUppercase, includeSpecialChars, includeNumbers, includeLowercase)
}

function setSecurityInfo(length, includeUppercase, includeSpecialChars, includeNumbers, includeLowercase){
  var indicator = document.getElementById("security_bar");
  var indicator_text = document.getElementById("security-text");


  var color = "";
  var size = "";
  var text ="";
  if(length <= 6 || (length ===7 && !includeNumbers && !includeSpecialChars) || (length ===8 && !includeUppercase && !includeNumbers && !includeSpecialChars)){
    color="red";
    size="10%";
    text="Password is bad, you need to add more characters!";
  }else if(length <=8 || (length <=10 && !includeNumbers && !includeSpecialChars && !includeUppercase)){
    color="orange";
    size="30%";
    text="Password is not yet good, you should add more characters!";
  }else if(length <=9 || (length <=12 && !includeNumbers && !includeSpecialChars && !includeUppercase)){
    color="yellow";
    size="50%";
    text="Password is OK, but could be improved!";
  }else if(length > 12 && includeLowercase && includeNumbers && includeSpecialChars && includeUppercase){
     color="lightgreen";
     size="100%";
     text="Password is Perfect!";
  }else{
     color="green";
     size="75%";
     text="That is a good Password!";
  }

  indicator.style.backgroundColor = color;
  indicator.style.width = size;

  indicator_text.innerHTML = text;
}