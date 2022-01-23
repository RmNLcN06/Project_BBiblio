/*********************** Partie Contact ****************************/

/************************ Variables ********************************/
var msgValidationError = document.getElementsByClassName(
  "msg-validation-error"
)[0];
var area = document.getElementsByClassName("area");
var sendMessage = document.getElementsByClassName("verify")[0];
var intervalTimer;

/*******************************************************************/

/************************** Fonctions ******************************/
sendMessage.addEventListener("click", messageSend);

function timerChangePage() {
  intervalTimer = setTimeout(pageConnection, 3000);

  function pageConnection() {
    window.location.replace("../accueil.html");
  }
}

function messageSend() {
  if (
    area[0].value == "" ||
    area[1].value == "" ||
    area[2].value == "" ||
    area[3].value == "" ||
    area[4].value == ""
  ) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Une ou plusieurs informations sont manquantes. Veuillez remplir chaque champ du formulaire.";
  } else {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Message envoyé. Notre équipe vous contactera dans les plus brefs délais.";
    timerChangePage();
  }
}
/*******************************************************************/
