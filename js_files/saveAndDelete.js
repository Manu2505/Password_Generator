function save_password() {
    var passwordName = document.getElementById("nameOfPassword").value;
    var password = document.getElementById("pwd_label").innerHTML;
    
    if (passwordName == null || passwordName == "") {
      alert("Please enter a name for the password");
      return null;
    }
    var passwordData = {
      name: passwordName,
      password: password
    };
    
    return passwordData;
  }
  
  function write_json(password_json) {
    var passwordName = password_json.name;
    var password = password_json.password;
  
    var table = document.getElementById("password_table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(-1);
  
    var nameCell = newRow.insertCell(0);
    var passwordCell = newRow.insertCell(1);
  
    nameCell.innerHTML = passwordName;
    passwordCell.innerHTML = password;
  }
  
  function save_and_write_password() {
    var passwordData = save_password();
    if (passwordData != null) {
      write_json(passwordData);
    }
  }