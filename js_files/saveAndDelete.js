document.addEventListener("DOMContentLoaded", () => {
  const pwdSaver = document.getElementById("pwd_saver");
  const pwdElement = document.getElementById("pwd");
  const resultContainer = document.getElementById("pwd_saver_result_container");
  const resultTableBody = document.querySelector("#pwd_saver_result_table tbody");

  const checkPasswordValue = () => {
    const pwdValue = pwdElement.textContent.trim();
    const hiddenValues = [
      "Here could be your Password. Generate it now!",
      "",
      "Please select at least one option."
    ];

    if (hiddenValues.includes(pwdValue)) {
      pwdSaver.style.display = "none";
    } else {
      pwdSaver.style.display = "block";
    }
  };

  const updateResultContainerVisibility = () => {
    if (resultTableBody.children.length > 0) {
      resultContainer.style.display = "block";
    } else {
      resultContainer.style.display = "none";
    }
  };

  checkPasswordValue();
  updateResultContainerVisibility();

  document.getElementById("pwd_generate_button").addEventListener("click", () => {
    checkPasswordValue();
  });
});

function savePassword() {
  const passwordName = document.getElementById("pwd_saver_input").value.trim();
  const password = document.getElementById("pwd").textContent.trim();

  if (!passwordName) {
    alert("Please enter a name for the password");
    return null;
  }

  return {
    name: passwordName,
    password: password,
  };
}

function displayPassword(password_json) {
  const table = document
      .getElementById("pwd_saver_result_table")
      .getElementsByTagName("tbody")[0];

  insertDataInTable(table, password_json);
  updateResultContainerVisibility();
}

function insertDataInTable(table, password_json) {
  const newRow = table.insertRow(-1);

  const nameCell = newRow.insertCell(0);
  const passwordCell = newRow.insertCell(1);
  const deleteCell = newRow.insertCell(2);

  nameCell.textContent = password_json.name;
  passwordCell.textContent = password_json.password;
  deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
}

function saveAndWritePassword() {
  const passwordData = savePassword();
  if (passwordData) {
    displayPassword(passwordData);
  }
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  updateResultContainerVisibility();
}

function updateResultContainerVisibility() {
  const resultContainer = document.getElementById("pwd_saver_result_container");
  const resultTableBody = document.querySelector("#pwd_saver_result_table tbody");

  if (resultTableBody.children.length > 0) {
    resultContainer.style.display = "block";
  } else {
    resultContainer.style.display = "none";
  }
}
