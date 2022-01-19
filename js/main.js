// Variables
var select = document.getElementsByTagName("select");
var option = document.getElementsByTagName("option");
var input = document.getElementsByTagName("input");
// var selectStyles = document.getElementsByName("styles");
// var selectIllustrations = document.getElementsByName("illustrations");
// var selectMisePage = document.getElementsByName("misepage");
// var selectEmotion = document.getElementsByName("emotion");
var buttonSave = document.getElementsByClassName("save")[0];
var totalValues = document.getElementsByClassName("total")[0];

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

for(i = 0; i < select.length ; i++) 
{
  select[i].addEventListener("change", choose);
//   select[i].addEventListener("change", sommeTotal);
}

function choose()
{
  for(j = 0 ; j < select.length ; j++) 
  {
      console.log(select);
    for(k = 0 ; k < select[j].options.length ; k++ ) 
    {
        console.log(option);
      if(select[j].options[k].selected == true && k != 0) {
          var total;

          total= parseInt(select[j].options[k].value) + 
                parseInt(select[j].options[k].value) +
                parseInt(selectMisePage[j].options[k].value) +
                parseInt(selectEmotion[j].options[k].value);
        //   inputReference[j].value = books[k].reference;
        //   inputQuantite[j].value = books[k].quantite;
        //   inputPrixUnitaire[j].value = books[k].prixUnit;
        //   inputPrix[j].value = inputQuantite[j].value * inputPrixUnitaire[j].value;
      } 
    //   else if(select[j].options[k].selected == true && k == 0) 
    //   {
    //       inputReference[j].value = "";
    //       inputQuantite[j].value = "";
    //       inputPrixUnitaire[j].value = "";
    //       inputPrix[j].value = "";
    //   }
    }
  }
  totalValues.innerHTML = total + " / 10";
};


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