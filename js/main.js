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

var totalValues = document.getElementsByClassName("total")[0];

var statutZero = document.getElementsByClassName("statut")[0];
var statutFirst = document.getElementsByClassName("statut")[1];
var statutSecond = document.getElementsByClassName("statut")[2];
var statutThird = document.getElementsByClassName("statut")[3];
var statutForth = document.getElementsByClassName("statut")[4];

console.log(select);
console.log(option);
console.log(input);

// console.log(selectNumber);
// console.log(selectStyles);
// console.log(selectIllustrations);
// console.log(selectMisePage);
// console.log(selectEmotion);
// console.log(buttonSave);
// console.log(totalValues);

buttonSaveZero.addEventListener("click", changeStatutZero);
buttonSaveFirst.addEventListener("click", changeStatutFirst);
buttonSaveSecond.addEventListener("click", changeStatutSecond);
buttonSaveThird.addEventListener("click", changeStatutThird);
buttonSaveForth.addEventListener("click", changeStatutForth);


function changeStatutZero() {
    if(select[0].options[0].selected == true || select[1].options[0].selected == true || select[2].options[0].selected == true || select[3].options[0].selected == true) {
        statutZero.classList.remove("complete");
        statutZero.classList.add("progress");
        statutZero.innerHTML = "En Attente";
    } else {
        statutZero.classList.remove("progress");
        statutZero.classList.add("complete");
        statutZero.innerHTML = "Complet";
    }
}  

function changeStatutFirst() {
    if(select[4].options[0].selected == true || select[5].options[0].selected == true || select[6].options[0].selected == true || select[7].options[0].selected == true) {
        statutFirst.classList.remove("complete");
        statutFirst.classList.add("progress");
        statutFirst.innerHTML = "En Attente";
    }
    else {
        statutFirst.classList.remove("progress");
        statutFirst.classList.add("complete");
        statutFirst.innerHTML = "Complet";
    }
}  

function changeStatutSecond() {
    if(select[8].options[0].selected == true || select[9].options[0].selected == true || select[10].options[0].selected == true || select[11].options[0].selected == true) {
        statutSecond.classList.remove("complete");
        statutSecond.classList.add("progress");
        statutSecond.innerHTML = "En Attente";
    } else {
        statutSecond.classList.remove("progress");
        statutSecond.classList.add("complete");
        statutSecond.innerHTML = "Complet";
    }
}  

function changeStatutThird() {
    if(select[12].options[0].selected == true || select[13].options[0].selected == true || select[14].options[0].selected == true || select[15].options[0].selected == true) {
        statutThird.classList.remove("complete");
        statutThird.classList.add("progress");
        statutThird.innerHTML = "En Attente";
    } else {
        statutThird.classList.remove("progress");
        statutThird.classList.add("complete");
        statutThird.innerHTML = "Complet";
    }
}  

function changeStatutForth() {
    if(select[16].options[0].selected == true || select[17].options[0].selected == true || select[18].options[0].selected == true || select[19].options[0].selected == true) {
        statutForth.classList.remove("complete");
        statutForth.classList.add("progress");
        statutForth.innerHTML = "En Attente";
    } else {
        statutForth.classList.remove("progress");
        statutForth.classList.add("complete");
        statutForth.innerHTML = "Complet";
    }
}  


// buttonSave.addEventListener("click", saveValues);

// function saveValues() {
//     var total;

//     for(i = 0 ; i < selectNumber.length ; i++) {
//         total = parseInt(selectStyles[i].options[i].value) + 
//                 parseInt(selectIllustrations[i].options[i].value) +
//                 parseInt(selectMisePage[i].options[i].value) +
//                 parseInt(selectEmotion[i].options[i].value);
//     }

//     totalValues.innerHTML = total + " / 10";
// }