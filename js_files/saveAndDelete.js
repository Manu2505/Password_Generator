function savePassword() {
  var passwordName = document.getElementById("nameOfPassword").value;
  var password = document.getElementById("passwordLabel").innerHTML;

  if (passwordName == null || passwordName == "") {
    alert("Please enter a name for the password");
    return null;
  }
  var passwordData = {
    name: passwordName,
    password: password,
  };

  return passwordData;
}

function displayPassword(password_json) {
  var table = document
    .getElementById("passwordTable")
    .getElementsByTagName("tbody")[0];

  insertDataInTable(table, password_json);
}

function insertDataInTable(table, password_json) {
  var newRow = table.insertRow(-1);

  var nameCell = newRow.insertCell(0);
  var passwordCell = newRow.insertCell(1);
  var deleteCell = newRow.insertCell(2);

  deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  nameCell.innerHTML = password_json.name;
  passwordCell.innerHTML = password_json.password;
}

function saveAndWritePassword() {
  var passwordData = savePassword();
  if (passwordData != null) {
    displayPassword(passwordData);
  }
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
