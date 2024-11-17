document.addEventListener("DOMContentLoaded", () => {
  const rangeInput = document.getElementById("pwd_specs_length_selection");
  const checkboxes = document.querySelectorAll(
      "#pwd_specs_caps, #pwd_specs_lowercase, #pwd_specs_numbers, #pwd_specs_special"
  );
  const generateButton = document.getElementById("pwd_generate_button");

  const updatePassword = () => {
    const length = parseInt(rangeInput.value, 10);
    const includeUppercase = document.getElementById("pwd_specs_caps").checked;
    const includeLowercase = document.getElementById("pwd_specs_lowercase").checked;
    const includeNumbers = document.getElementById("pwd_specs_numbers").checked;
    const includeSpecialChars = document.getElementById("pwd_specs_special").checked;

    document.getElementById("pwd_specs_length").textContent = length;

    setSecurityInfo(length, includeUppercase, includeSpecialChars, includeNumbers, includeLowercase);
  };

  rangeInput.addEventListener("input", updatePassword);

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updatePassword);
  });

  generateButton.addEventListener("click", () => {
    const length = parseInt(rangeInput.value, 10);
    const includeUppercase = document.getElementById("pwd_specs_caps").checked;
    const includeLowercase = document.getElementById("pwd_specs_lowercase").checked;
    const includeNumbers = document.getElementById("pwd_specs_numbers").checked;
    const includeSpecialChars = document.getElementById("pwd_specs_special").checked;

    generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
  });

  updatePassword();
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
  const small_char = "abcdefghijklmnopqrstuvwxyz";
  const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special_chars = "!@#$%^&*()_+{}|:<>?";

  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
    document.getElementById("pwd").innerText = "Please select at least one option.";
    return;
  }

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

  document.getElementById("pwd").innerText = password;
}

function setSecurityInfo(length, includeUppercase, includeSpecialChars, includeNumbers, includeLowercase) {
  const indicator = document.getElementById("pwd_specs_security_indicator");
  const indicatorText = document.getElementById("pwd_specs_security_text");

  let score = 0;

  score += Math.min(length, 30) * 2;
  if (includeLowercase) score += 10;
  if (includeUppercase) score += 10;
  if (includeNumbers) score += 10;
  if (includeSpecialChars) score += 10;

  const percentage = Math.min(score, 100);

  let color = "red";
  let text = "Terrible";
  if (percentage > 30) {
    color = "orange";
    text = "Very Bad";
  }
  if (percentage > 50) {
    color = "yellow";
    text = "Okay";
  }
  if (percentage > 70) {
    color = "green";
    text = "Good";
  }
  if (percentage === 100) {
    color = "lightgreen";
    text = "Perfect";
  }

  indicator.style.width = `${percentage*0.65}%`;
  indicator.style.backgroundColor = color;
  indicatorText.innerText = `${text} (${percentage}%)`;
}
