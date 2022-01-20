/************** Partie Identification ****************/
// Variables
var password = document.getElementsByClassName("password")[0];
var passwordConfirm = document.getElementsByClassName("password")[1];
var show = document.getElementsByClassName("show")[0];
var showConfirm = document.getElementsByClassName("show")[1];

show.addEventListener("click", showPassword);
showConfirm.addEventListener("click", showPasswordConfirm);

function showPassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function showPasswordConfirm() {
  if (passwordConfirm.type === "password") {
    passwordConfirm.type = "text";
  } else {
    passwordConfirm.type = "password";
  }
}