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

// Partie RegEx Identification
/* 
  ^.*              : Début du regex
  (?=.{10,})       : Vérifie si 10 caractères minimums au Mot de Passe
  (?=.*[a-zA-Z])   : Vérifie si contient une majuscule et une minuscule
  (?=.*\d)         : Vérifie si contient au moins un chiffre
  .*$              : Fin du regex
*/
var verifRegEx = /^.*(?=.{10,})(?=.*[a-zA-Z])(?=.*\d).*$/;

var msgError = document.getElementsByClassName("msg-error")[0];
var verifPassword = document.getElementsByClassName("verify")[0];
var verifLogin = document.getElementsByClassName("log")[0];
var loginKey = ["MonsieurX12345"];

verifPassword.addEventListener("click", passwordCheck);

function passwordCheck() {
  if(verifLogin.value == loginKey[0] && verifRegEx.test(password.value) == true) {
    // console.log("Ca fonctionne bien !");
    window.location.replace("../test/dashboard_jure.html");
  } else if(verifLogin.value != loginKey[0] && verifRegEx.test(password.value) == true){
    msgError.classList.add("error");
    msgError.innerHTML = "Identifiant Invalide. Veuillez Recommencer.";
  } else if(verifLogin.value == loginKey[0] && verifRegEx.test(password.value) != true) {
    // console.log("Ca ne fonctionne pas !");
    msgError.classList.add("error");
    msgError.innerHTML = "Mot De Passe Invalide. Veuillez Recommencer.";
  } else {
    msgError.classList.add("error");
    msgError.innerHTML = "Identifiant et Mot De Passe Invalides. Veuillez Recommencer.";
  }
}

/******************************************************/

/************** Partie Formulaire Juré ****************/

// Variables
var select = document.getElementsByTagName("select");
var option = document.getElementsByTagName("option");
var input = document.getElementsByTagName("input");
// var selectStyles = document.getElementsByName("styles");
// var selectIllustrations = document.getElementsByName("illustrations");
// var selectMisePage = document.getElementsByName("misepage");
// var selectEmotion = document.getElementsByName("emotion");
var buttonSaveZero = document.getElementsByClassName("save")[0];
var buttonSaveFirst = document.getElementsByClassName("save")[1];
var buttonSaveSecond = document.getElementsByClassName("save")[2];
var buttonSaveThird = document.getElementsByClassName("save")[3];
var buttonSaveForth = document.getElementsByClassName("save")[4];

var statutZero = document.getElementsByClassName("statut")[0];
var statutFirst = document.getElementsByClassName("statut")[1];
var statutSecond = document.getElementsByClassName("statut")[2];
var statutThird = document.getElementsByClassName("statut")[3];
var statutForth = document.getElementsByClassName("statut")[4];

var totalValuesZero = document.getElementsByClassName("total")[0];
var totalValuesFirst = document.getElementsByClassName("total")[1];
var totalValuesSecond = document.getElementsByClassName("total")[2];
var totalValuesThird = document.getElementsByClassName("total")[3];
var totalValuesForth = document.getElementsByClassName("total")[4];

buttonSaveZero.addEventListener("click", changeStatutZero);
buttonSaveFirst.addEventListener("click", changeStatutFirst);
buttonSaveSecond.addEventListener("click", changeStatutSecond);
buttonSaveThird.addEventListener("click", changeStatutThird);
buttonSaveForth.addEventListener("click", changeStatutForth);

// buttonSaveZero.addEventListener("click", saveValues);

function saveValuesZero() {
  var total;
  var values = [
    select[0].value,
    select[1].value,
    select[2].value,
    select[3].value,
  ];

  total =
    (parseInt(values[0]) +
      parseInt(values[1]) +
      parseInt(values[2]) +
      parseInt(values[3])) /
    values.length;

  totalValuesZero.innerHTML = total + " / 10";
}

function saveValuesFirst() {
  var total;
  var values = [
    select[4].value,
    select[5].value,
    select[6].value,
    select[7].value,
  ];

  total =
    (parseInt(values[0]) +
      parseInt(values[1]) +
      parseInt(values[2]) +
      parseInt(values[3])) /
    values.length;

  totalValuesFirst.innerHTML = total + " / 10";
}

function saveValuesSecond() {
  var total;
  var values = [
    select[8].value,
    select[9].value,
    select[10].value,
    select[11].value,
  ];

  total =
    (parseInt(values[0]) +
      parseInt(values[1]) +
      parseInt(values[2]) +
      parseInt(values[3])) /
    values.length;

  totalValuesSecond.innerHTML = total + " / 10";
}

function saveValuesThird() {
  var total;
  var values = [
    select[12].value,
    select[13].value,
    select[14].value,
    select[15].value,
  ];

  total =
    (parseInt(values[0]) +
      parseInt(values[1]) +
      parseInt(values[2]) +
      parseInt(values[3])) /
    values.length;

  totalValuesThird.innerHTML = total + " / 10";
}

function saveValuesForth() {
  var total;
  var values = [
    select[16].value,
    select[17].value,
    select[18].value,
    select[19].value,
  ];

  total =
    (parseInt(values[0]) +
      parseInt(values[1]) +
      parseInt(values[2]) +
      parseInt(values[3])) /
    values.length;

  totalValuesForth.innerHTML = total + " / 10";
}

function changeStatutZero() {
  if (
    select[0].options[0].selected == true ||
    select[1].options[0].selected == true ||
    select[2].options[0].selected == true ||
    select[3].options[0].selected == true
  ) {
    statutZero.classList.remove("complete");
    statutZero.classList.add("progress");
    statutZero.innerHTML = "En Attente";
  } else {
    statutZero.classList.remove("progress");
    statutZero.classList.add("complete");
    statutZero.innerHTML = "Complet";
    saveValuesZero();
  }
}

function changeStatutFirst() {
  if (
    select[4].options[0].selected == true ||
    select[5].options[0].selected == true ||
    select[6].options[0].selected == true ||
    select[7].options[0].selected == true
  ) {
    statutFirst.classList.remove("complete");
    statutFirst.classList.add("progress");
    statutFirst.innerHTML = "En Attente";
  } else {
    statutFirst.classList.remove("progress");
    statutFirst.classList.add("complete");
    statutFirst.innerHTML = "Complet";
    saveValuesFirst();
  }
}

function changeStatutSecond() {
  if (
    select[8].options[0].selected == true ||
    select[9].options[0].selected == true ||
    select[10].options[0].selected == true ||
    select[11].options[0].selected == true
  ) {
    statutSecond.classList.remove("complete");
    statutSecond.classList.add("progress");
    statutSecond.innerHTML = "En Attente";
  } else {
    statutSecond.classList.remove("progress");
    statutSecond.classList.add("complete");
    statutSecond.innerHTML = "Complet";
    saveValuesSecond();
  }
}

function changeStatutThird() {
  if (
    select[12].options[0].selected == true ||
    select[13].options[0].selected == true ||
    select[14].options[0].selected == true ||
    select[15].options[0].selected == true
  ) {
    statutThird.classList.remove("complete");
    statutThird.classList.add("progress");
    statutThird.innerHTML = "En Attente";
  } else {
    statutThird.classList.remove("progress");
    statutThird.classList.add("complete");
    statutThird.innerHTML = "Complet";
    saveValuesThird();
  }
}

function changeStatutForth() {
  if (
    select[16].options[0].selected == true ||
    select[17].options[0].selected == true ||
    select[18].options[0].selected == true ||
    select[19].options[0].selected == true
  ) {
    statutForth.classList.remove("complete");
    statutForth.classList.add("progress");
    statutForth.innerHTML = "En Attente";
  } else {
    statutForth.classList.remove("progress");
    statutForth.classList.add("complete");
    statutForth.innerHTML = "Complet";
    saveValuesForth();
  }
}

/***************************************************************************/
