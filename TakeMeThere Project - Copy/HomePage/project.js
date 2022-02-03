 var counter=1;
 setInterval(function () {document.getElementById('r'+counter).checked = true;
 counter++;
 if(counter>3){
   counter=1;
 }
 },5000); 


 function showList(){

document.getElementById("searchList").style.display="flex";


 }
 function hideList(){

  document.getElementById("searchList").style.display="none";

  
   }

   function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    div = document.getElementById("searchList");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) >= 0) {
        a[i].style.display = "block";

      } else {
        a[i].style.display = "none";
      }
    }
  }