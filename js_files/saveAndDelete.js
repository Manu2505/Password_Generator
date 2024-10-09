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

function writeJson(password_json) {
  var passwordName = password_json.name;
  var password = password_json.password;

  var table = document
    .getElementById("passwordTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(-1);

  var nameCell = newRow.insertCell(0);
  var passwordCell = newRow.insertCell(1);
  var deleteCell = newRow.insertCell(2);

  deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  nameCell.innerHTML = passwordName;
  passwordCell.innerHTML = password;
}

function saveAndWritePassword() {
  var passwordData = savePassword();
  if (passwordData != null) {
    writeJson(passwordData);
  }
}

function deleteRow(row) {
  var i = row.rowIndex;
  document.getElementById("passwordTable").deleteRow(i);
}
