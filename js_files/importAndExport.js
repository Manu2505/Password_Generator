function showSelectedFile() {
  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];

  if (file) {
    document.getElementById("selectedFile").innerText = file.name;
  } else {
    document.getElementById("selectedFile").innerText = "No file selected";
  }
}

function importData() {
  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];

  if (file) {
    console.log("File selected: ", file.name);
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      var jsonData = JSON.parse(contents);
      console.log("Data imported: ", jsonData);
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

  data.forEach(function (jsonData) {
    insertDataInTable(table, jsonData);
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
