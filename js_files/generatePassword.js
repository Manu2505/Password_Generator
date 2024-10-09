const small_char = "abcdefghijklmnopqrstuvwxyz";
const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special_chars = "!@#$%^&*()_+{}|:<>?";

//window.addEventListener("load", function () {});

function showValueOfRange(range) {
  document.getElementById("showRange").innerHTML = range.valueAsNumber;
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

  var length = document.getElementById("lengPassword").valueAsNumber;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("passwordLabel").innerHTML = password;
}
