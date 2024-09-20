window.addEventListener("load", function() {
    var generate_button = this.document.getElementById("generate_button");
    var pwd_label = this.document.getElementById("pwd_label");
    var cap_letters = this.document.getElementById("cap_letters");
    var small_letters = this.document.getElementById("small_letters");
    var numbers = this.document.getElementById("numbers");
    var special_chars = this.document.getElementById("special_chars");
    var leng_pwd_range = this.document.getElementById("leng_pwd");
    var show_range = this.document.getElementById("show_range");

    generate_button.addEventListener("click", generate_password);
    leng_pwd_range.addEventListener("change", show_value_of_range(leng_pwd_range));
});


function show_value_of_range (range) {
show_range.innerHTML = range.value;
}

function generate_password () {
    var counter = 0;
    var result = "Hello";

    if (counter == 0) {
        counter = counter + 1;
    } else {
        result = "NExt";
    }
    

    pwd_label.innerHTML = result;

}



const small_char = "abcdefghijklmnopqrstuvwxyz";
const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
