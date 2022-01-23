/************** Partie Identification ****************/

/********************* Variables ******************* */
var verifLogin = document.getElementsByClassName("log")[0];
var password = document.getElementsByClassName("password")[0];
var show = document.getElementsByClassName("show")[0];
var msgValidationError = document.getElementsByClassName(
  "msg-validation-error"
)[0];
var verifPassword = document.getElementsByClassName("verify")[0];
var intervalTimer;

// Login + MdP Utilisateur
var loginKeyJudge = ["MonsieurJudge06"];
var loginKeyAuthor = ["MonsieurAuthor06"];

// Sous-Partie Identification : RegEx
/* 
  ^.*              : Début du regex
  (?=.{10,})       : Vérifie si 10 caractères minimums au Mot de Passe
  (?=.*[a-zA-Z])   : Vérifie si contient une majuscule et une minuscule
  (?=.*\d)         : Vérifie si contient au moins un chiffre
  .*$              : Fin du regex
*/
var verifRegEx = /^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d).*$/;

/**************************************************** */

/************ AddEventListener + Fonctions *********** */
show.addEventListener("click", showPassword);

function showPassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

verifPassword.addEventListener("click", passwordCheck);

function timerChangePageJudge() {
  intervalTimer = setTimeout(pageConnection, 3000);

  function pageConnection() {
    window.location.replace("./profil_jure.html");
  }
}

verifPassword.addEventListener("click", passwordCheck);

function timerChangePageAuthor() {
  intervalTimer = setTimeout(pageConnection, 3000);

  function pageConnection() {
    window.location.replace("./profil_auteur.html");
  }
}

function passwordCheck() {
  if (
    verifLogin.value == loginKeyJudge[0] &&
    verifRegEx.test(password.value) == true
  ) {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Connection Juré Réussie. Veuillez Compléter Votre Profil ...";
    timerChangePageJudge();
  } else if (
    verifLogin.value == loginKeyAuthor[0] &&
    verifRegEx.test(password.value) == true
  ) {
    msgValidationError.classList.add("validation");
    msgValidationError.innerHTML =
      "Connection Auteur Réussie. Veuillez Compléter Votre Profil ...";
    timerChangePageAuthor();
  } else if (
    (verifLogin.value != loginKeyJudge[0] ||
      verifLogin.value != loginKeyAuthor[0]) &&
    verifRegEx.test(password.value) == true
  ) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Identifiant Invalide. Veuillez Recommencer.";
  } else if (
    (verifLogin.value == loginKeyJudge[0] ||
      verifLogin.value == loginKeyAuthor[0]) &&
    verifRegEx.test(password.value) != true
  ) {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Mot De Passe Invalide. Il Doit Comporter : une majuscule, une minuscule, au moins un chiffre, au minimum dix caractères.";
  } else {
    msgValidationError.classList.add("error");
    msgValidationError.innerHTML =
      "Identifiant et Mot De Passe Invalides. Veuillez Recommencer.";
  }
}
/**************************************************** */
