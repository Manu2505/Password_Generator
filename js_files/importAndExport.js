function showSelectedFile() {
  const fileInput = document.getElementById("pwd_files_selected");
  const file = fileInput.files[0];

  if (file) {
    document.getElementById("pwd_files_selected").innerText = file.name;
  } else {
    document.getElementById("pwd_files_selected").innerText = "No file selected";
  }
}

function importData() {
  const fileInput = document.getElementById("pwd_files_input");
  const file = fileInput.files[0];

  if (file) {
    console.log("File selected: ", file.name);
    const reader = new FileReader();
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
  const table = document
      .getElementById("pwd_saver_result_table")
      .getElementsByTagName("tbody")[0];

  data.forEach(function (jsonData) {
    insertDataInTable(table, jsonData);
  });
}

function exportData() {
  const table = document
      .getElementById("pwd_saver_result_table")
      .getElementsByTagName("tbody")[0];
  const rows = table.getElementsByTagName("tr");
  const data = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const rowData = {
      name: cells[0].innerText,
      password: cells[1].innerText,
    };
    data.push(rowData);
  }

  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], {type: "application/json"});
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "passwords.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pwd_saver_button").addEventListener("click", saveAndWritePassword);
  document.getElementById("pwd_files_input").addEventListener("change", showSelectedFile);
});