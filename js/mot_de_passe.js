/************** Partie Changement Mot De Passe ****************/
var passNew = document.getElementsByClassName("pass-new")[0];
var passConfirm = document.getElementsByClassName("pass-confirm")[0];
var checkChangePassword = document.getElementsByClassName("check-password")[0];

checkChangePassword.addEventListener("click", changePassword);
var intervalTimer;

function timerChangePage() {
  intervalTimer = setTimeout(pageConnection, 5000);

  function pageConnection() {
    window.location.replace("./connexion_new.html");
  }
}

function changePassword() {
  if (passNew.value === passConfirm.value) {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Votre nouveau mot de passe a bien été pris en compte. Vous allez être redirigé vers la page d'identification dans quelques secondes.";
    timerChangePage();
  } else {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Votre nouveau mot de passe et la confirmation de votre mot de passe sont différents. Veuillez réessayer.";
  }
}

// Sous-Partie Mot De Passe : RegEx
/* 
  ^.*              : Début du regex
  (?=.{10,})       : Vérifie si 10 caractères minimums au Mot de Passe
  (?=.*[a-zA-Z])   : Vérifie si contient une majuscule et une minuscule
  (?=.*\d)         : Vérifie si contient au moins un chiffre
  .*$              : Fin du regex
*/
var verifRegEx = /^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d).*$/;

var msgValidationError = document.getElementsByClassName("msg-validation-error")[0];
var verifPassword = document.getElementsByClassName("verify")[0];
// var verifLogin = document.getElementsByClassName("log")[0];
// var loginKey = ["MonsieurX12345"];


/*
A RETESTER !!!

verifPassword.addEventListener("click", passwordCheck);

function passwordCheck() {
if(((changePassword() == true) && (verifRegEx.test(passNew.value) == true && verifRegEx.test(passConfirm.value) == true))) {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Votre nouveau mot de passe a bien été pris en compte. Vous allez être redirigé vers la page d'identification dans quelques secondes.";
    timerChangePage();
    // window.location.replace("./connexion_new.html");
} else if(((changePassword() == true) && (verifRegEx.test(passNew.value) != true && verifRegEx.test(passConfirm.value) != true))) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML ="Erreur mot de passe : celui-ci doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et au minimum 10 caractères.";
} else if(((changePassword() != true) && (verifRegEx.test(passNew.value) == true && verifRegEx.test(passConfirm.value) == true))) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML ="Erreur mot de passe : votre mot de passe et votre confirmation sont différents. Veuillez recommencer.";
}   else if(((changePassword() != true) && (verifRegEx.test(passNew.value) != true || verifRegEx.test(passConfirm.value) != true))) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML ="Erreur. Veuillez recommencer en tappant un mot de passe valide. Votre mot de passe et la confirmation doivent être similaire.";
}
}

*/

function passwordCheck() {
  if (
    verifLogin.value == loginKey[0] &&
    verifRegEx.test(password.value) == true
  ) {
    window.location.replace("./connexion_new.html");
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
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Mot De Passe Invalide. Veuillez Recommencer.";
  } else {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Identifiant et Mot De Passe Invalides. Veuillez Recommencer.";
  }
}