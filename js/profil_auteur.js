/************** Partie Formulaire Profil Auteur ****************/

/********************* Variables ******************* */
var msgValidationError = document.getElementsByClassName(
  "msg-validation-error"
)[0];
var verify = document.getElementsByClassName("verify")[0];
var intervalTimer;
/**************************************************** */

/************ AddEventListener + Fonctions *********** */
verify.addEventListener("click", timerChangePage);

function timerChangePage() {
  msgValidationError.classList.add("validation");
  msgValidationError.innerHTML = "Sauvegarde Réussie";
  intervalTimer = setTimeout(pageConnection, 3000);

  function pageConnection() {
    window.location.replace("../dashboards/dashboard_auteur.html");
  }
}
/**************************************************** */
