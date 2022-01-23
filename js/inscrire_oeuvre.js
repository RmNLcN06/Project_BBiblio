/************** Partie Inscrire Oeuvre Auteur ****************/

/********************* Variables ******************* */
var msgValidationError = document.getElementsByClassName(
  "msg-validation-error"
)[0];
var area = document.getElementsByClassName("area");
var check = document.getElementsByClassName("check");
var verify = document.getElementsByClassName("verify")[0];
var file = document.getElementById("myFile");
var intervalTimer;
/**************************************************** */

/************ AddEventListener + Fonctions *********** */
verify.addEventListener("click", messageSend);

function timerChangePage() {
  msgValidationError.classList.add("validation");
  msgValidationError.innerHTML = "Sauvegarde Des Informations Réussie";
  intervalTimer = setTimeout(pageConnection, 3000);

  function pageConnection() {
    window.location.replace("../dashboards/dashboard_auteur.html");
  }
}

function messageSend() {
  if (
    area[0].value == "" ||
    area[1].value == "" ||
    area[2].value == "" ||
    area[3].value == "" ||
    area[4].value == "" ||
    area[5].value == ""
  ) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Une ou plusieurs informations sont manquantes. Veuillez remplir chaque champ du formulaire.";
  } else if (
    check[0].checked == false &&
    check[1].checked == false &&
    check[2].checked == false &&
    check[3].checked == false
  ) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Vous devez sélectionner une catégorie de participation de votre oeuvre.";
  } else if (file.value == "") {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Vous devez sélectionner un fichier pour pouvoir participer au concours.";
  } else {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Message envoyé. Notre équipe vous contactera dans les plus brefs délais.";
    timerChangePage();
  }
}
/**************************************************** */
