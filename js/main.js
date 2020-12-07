window.onload= function () {
    var text = document.getElementsByClassName("contact");
    text[0].onkeypress= function (event){
        var number = parseInt(event.key);
        if (!isNaN(number)) {
            event.preventDefault()
        } else {
            console.log(number)
        }
    };

    var user = document.getElementsByClassName("contact")[1];
    user.onkeypress=function (event){
     if (event.key==="," || event.key=== "."){
         event.preventDefault()
     }
    };

  var check= document.getElementsByClassName("confirm")[0];
   check.onclick=function (){
       if (check.checked){
           console.log("Согласен")
       } else{
           console.log(" Не согласен")
       }

   };



    var labelcont=document.getElementsByClassName("label-contact");
    var account= document.getElementsByClassName("account")[0];
    var signin=document.getElementById("sign");
    account.onclick = function (){
        labelcont[0].remove()
        labelcont[1].remove()
        labelcont[2].remove()
        console.log(account.innerText)
        account.innerText="Log in to the system"
        console.log(account.innerText)
        console.log(signin.innerText)
        signin.innerText="Sign in"
        console.log(signin.innerText)
        document.getElementsByClassName("policy")[0].remove()
        document.getElementsByClassName("account")[0].remove()

    };


var sign=document.getElementById("sign");
        var cont= document.getElementsByClassName("contact");
        var form =document.getElementsByTagName("form")[0];
        var name=document.getElementsByClassName("contact")[0];
var pass=document.getElementsByClassName("contact")[3];
var passrep=document.getElementsByClassName("contact")[4];
var ok=true;
sign.onclick=function (event) {

    if (name.value ==="") {
        alert("Заполните поле name")
        ok=false
        event.preventDefault()
    }
    if (cont[1].value ==="") {
        alert("Заполните поле username")
        ok=false
        event.preventDefault()
    }
    if (cont[2].value ==="") {
        alert("Заполните поле e-mail")
        ok=false
        event.preventDefault()
    }
    if (pass.value ===""){
        alert("Заполните поле password")
        event.preventDefault()
        ok=false
    }
    if (passrep.value===""){
        alert("Заполните поле repeat-password")
        ok=false
        event.preventDefault()
    }
    if (passrep.value !==pass.value){
        alert("wrong password")
        ok=false
        event.preventDefault()
    }
    if (check.checked){
      console.log("agree")
    } else{
        alert(" Check policy")
        event.preventDefault()
        ok=false
    }

      if (ok){
          alert("OKAY")
      }


};

}