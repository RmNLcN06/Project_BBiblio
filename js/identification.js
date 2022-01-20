/************** Partie Identification ****************/
// Variables
var password = document.getElementsByClassName("password")[0];
var show = document.getElementsByClassName("show")[0];

show.addEventListener("click", showPassword);

function showPassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// Sous-Partie Identification : RegEx
/* 
  ^.*              : Début du regex
  (?=.{10,})       : Vérifie si 10 caractères minimums au Mot de Passe
  (?=.*[a-zA-Z])   : Vérifie si contient une majuscule et une minuscule
  (?=.*\d)         : Vérifie si contient au moins un chiffre
  .*$              : Fin du regex
*/
var verifRegEx = /^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d).*$/;

var msgValidationError = document.getElementsByClassName(
  "msg-validation-error"
)[0];
var verifPassword = document.getElementsByClassName("verify")[0];
var verifLogin = document.getElementsByClassName("log")[0];
var loginKey = ["MonsieurX12345"];

verifPassword.addEventListener("click", passwordCheck);

function passwordCheck() {
  if (
    verifLogin.value == loginKey[0] &&
    verifRegEx.test(password.value) == true
  ) {
    // console.log("Ca fonctionne bien !");
    window.location.replace("../test/dashboard_jure.html");
  } else if (
    verifLogin.value != loginKey[0] &&
    verifRegEx.test(password.value) == true
  ) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Identifiant Invalide. Veuillez Recommencer.";
  } else if (
    verifLogin.value == loginKey[0] &&
    verifRegEx.test(password.value) != true
  ) {
    // console.log("Ca ne fonctionne pas !");
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Mot De Passe Invalide. Veuillez Recommencer.";
  } else {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Identifiant et Mot De Passe Invalides. Veuillez Recommencer.";
  }
}
