//Import doesnt work yet

function importData() {
  var fileInput = document.getElementById("jsonFileInput");
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      var jsonData = JSON.parse(contents);
      displayData(jsonData);
    };
    reader.readAsText(file);
  } else {
    alert("No file selected");
  }
}

function displayData(data) {
  var table = document
    .getElementById("passwordTable")
    .getElementsByTagName("tbody")[0];

  // Clear existing table rows
  table.innerHTML = "";

  data.forEach(function (item) {
    var newRow = table.insertRow();

    var nameCell = newRow.insertCell(0);
    var passwordCell = newRow.insertCell(1);

    nameCell.innerHTML = item.name;
    passwordCell.innerHTML = item.password;
  });
}

function exportData() {
  var table = document
    .getElementById("passwordTable")
    .getElementsByTagName("tbody")[0];
  var rows = table.getElementsByTagName("tr");
  var data = [];

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var rowData = {
      name: cells[0].innerText,
      password: cells[1].innerText,
    };
    data.push(rowData);
  }

  var jsonData = JSON.stringify(data, null, 2);
  var blob = new Blob([jsonData], { type: "application/json" });
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "passwords.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
