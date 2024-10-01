const small_char = "abcdefghijklmnopqrstuvwxyz".split("");
const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const special_chars = "!@#$%^&*()_+{}|:<>?".split("");

window.addEventListener("load", function () {});

function show_value_of_range(range) {
  document.getElementById("show_range").innerHTML = range.valueAsNumber;
}

function generate_password() {
  var includeUppercase = document.getElementById("cap_letters").ckecked;
  var includeLowercase = document.getElementById("small_letters").ckecked;
  var includeNumbers = document.getElementById("numbers").ckecked;
  var includeSpecialChars = document.getElementById("special_chars").ckecked;
  var length = document.getElementById("show_range").valueAsNumber;

  console.log("length: ", length);
  console.log("includeUppercase: ", includeUppercase);

  let allChars = "";
  if (includeUppercase) allChars += large_char;
  if (includeLowercase) allChars += small_char;
  if (includeNumbers) allChars += numbers;
  if (includeSpecialChars) allChars += special_chars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("pwd_label").innerHTML = password;
}
