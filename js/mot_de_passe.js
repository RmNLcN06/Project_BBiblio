/************** Partie Changement Mot De Passe ****************/

/************************ Variables ********************************/
var passNew = document.getElementsByClassName("pass-new")[0];
var passConfirm = document.getElementsByClassName("pass-confirm")[0];
var msgValidationError = document.getElementsByClassName(
  "msg-validation-error"
)[0];
var verifPassword = document.getElementsByClassName("verify")[0];
var intervalTimer;

// Sous-Partie Mot De Passe : RegEx
/* 
  ^.*              : Début du regex
  (?=.{10,})       : Vérifie si 10 caractères minimums au Mot de Passe
  (?=.*[a-zA-Z])   : Vérifie si contient une majuscule et une minuscule
  (?=.*\d)         : Vérifie si contient au moins un chiffre
  .*$              : Fin du regex
*/
var verifRegEx = /^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d).*$/;
/*******************************************************************/

/************************** Fonctions ******************************/
verifPassword.addEventListener("click", passwordCheck);

function timerChangePage() {
  intervalTimer = setTimeout(pageConnection, 5000);

  function pageConnection() {
    window.location.replace("./connexion_new.html");
  }
}

function passwordCheck() {
  if (
    verifRegEx.test(passNew.value) == true &&
    verifRegEx.test(passConfirm.value) == true &&
    passNew.value === passConfirm.value
  ) {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Votre nouveau mot de passe a bien été pris en compte. Vous allez être redirigé vers la page d'identification dans quelques secondes.";
    timerChangePage();
  } else {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Format Mot De Passe Et/Ou Confirmation Mot De Passe Invalide. Veuillez réessayer.";
  }
}
/*******************************************************************/
