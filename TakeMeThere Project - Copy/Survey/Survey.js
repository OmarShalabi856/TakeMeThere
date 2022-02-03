

function check(){
    var str="";
    for(i=1;i<=3;i++){
        if(document.getElementById("w"+i).checked == true){
           str+=document.getElementById("w"+i).value ;
        }
    }
    for(i=1;i<=3;i++){
        if(document.getElementById("m"+i).checked == true){
           str+=document.getElementById("m"+i).value ;
        }
    }

 for(i=1;i<=3;i++){
        if(document.getElementById("t"+i).checked == true){
           str+=document.getElementById("t"+i).value ;
        }
    }

if(str.length==3){
    if(str=="CBC"){
    window.location.href = "../Africa/Egypt/Egypt.html";
     }
     if(str=="CAB"){
        window.location.href = "../Africa/Morocco/Morocco.html";
         }


    if(str=="BAC"){
    window.location.href = "../Asia/India/India.html";
     }


    if(str=="CAC"){
    window.location.href = "../America/Columbia/colombia.html";
     }


    if(str=="AAC"){
    window.location.href =  "../Asia/Russia/Russia.html";
     }


    if(str=="BBC"){
    window.location.href = "../America/Costa Rica/Costa Rica.html";
     }


    if(str=="ABC"){
    window.location.href = "../Asia/Malaysia/malaysia.html";
     }


    if(str=="CCC"){
    window.location.href = "../Asia/UAE/UAE.html";
     }


    if(str=="BCC"){
    window.location.href = "../Europe/Greece/greece.html";
     }

    if(str=="ACC"){
    window.location.href = "../Europe/Norway/norway.html";
     }

if(str=="BAB"){
    window.location.href ="../America/Nicaragua/Nicaragua.html";
     }

if(str=="AAB"){
    window.location.href = "../Asia/Turkey/turkey.html";
     }

if(str=="CBB"){
    window.location.href = " ../Africa/Ethiopia/Ethiopia.html";
     }

if(str=="BBB"){
    window.location.href = "../America/Panama/panama.html";
     }

if(str=="ABB"){
    window.location.href ="../Europe/Germany/germany.html";
     }

if(str=="CCB"){
    window.location.href = "../Europe/Spain/spain.html";
     }

if(str=="BCB"){
    window.location.href = "../America/USA/USA.html";
     }

if(str=="ACB"){
    window.location.href ="../Europe/Switzerland/switzerland.html";
     }

if(str=="CAA"){
    window.location.href = "../America/Guatemala/Guatemala.html";
     }

if(str=="BAA"){
    window.location.href = "../Asia/Philipines/philipines.html";
     }

if(str=="AAA"){
    window.location.href = "../Asia/Mongolia/mongolia.html";
     }

if(str=="CBA"){
    window.location.href = "../Africa/Madagascar/Madagascar.html";
     }

if(str=="ACA"){
    window.location.href = "../Europe/France/france.html";
     }

if(str=="BBA"){
    window.location.href = "../America/Brazil/brazil.html";
     }

if(str=="ABA"){
    window.location.href = "../Europe/Sweden/sweden.html";
     }

if(str=="CCA"){
    window.location.href = "../Africa/South Africa/South Africa.html";
     }

if(str=="BCA"){
    window.location.href = "../Europe/Italy/italy.html";
     }
     alert("You will be redirected to the page of the country");
    }
     else if (str.length<3){
        alert("You should answer all 3 questions");

     }}

