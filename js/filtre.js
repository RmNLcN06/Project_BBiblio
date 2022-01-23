/************** Partie Formulaire Juré ****************/

// Variables
var input = document.getElementsByClassName("inputcategory")[0];

input.addEventListener("keyup", researchCategory);

function researchCategory() {
  var td, i, txtValue;
  var filter = input.value.toUpperCase();
  var table = document.getElementsByClassName("research")[0];
  var tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // tr[i].style.display = "";
        tr[i].setAttribute("class", "displayon");
      } else {
        // tr[i].style.display = "none";
        tr[i].setAttribute("class", "displayoff");
      }
    }
  }
}
