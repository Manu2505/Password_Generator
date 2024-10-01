const small_char = "abcdefghijklmnopqrstuvwxyz";
const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special_chars = "!@#$%^&*()_+{}|:<>?";

window.addEventListener("load", function () {});

function show_value_of_range(range) {
  document.getElementById("show_range").innerHTML = range.valueAsNumber;
}

function generate_password() {
  var includeUppercase = document.getElementById("cap_letters").checked;
  var includeLowercase = document.getElementById("small_letters").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSpecialChars = document.getElementById("special_chars").checked;
  
  console.log("includeUppercase: ", includeUppercase);
  
  let allChars = "";
  if (includeUppercase) allChars += large_char;
  if (includeLowercase) allChars += small_char;
  if (includeNumbers) allChars += numbers;
  if (includeSpecialChars) allChars += special_chars;
  
  console.log("allChars: ", allChars);
  
  var length = document.getElementById("leng_pwd").valueAsNumber;
  console.log("length: ", length);
  
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  console.log("password", password);
  document.getElementById("pwd_label").innerHTML = password;
}
