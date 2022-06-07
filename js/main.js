function numrandom() {
    document.getElementById("parraforandom").innerHTML = "Numero generado: <strong>"+Math.floor(Math.random() * 101)+"</strong>";
}

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.getElementById("reloj").innerHTML = horaImprimible;

    setTimeout("mueveReloj()",1000);
}

function navegador() {
    var w = window.innerWidth
  || document.body.clientWidth
  || document.documentElement.clientWidth;

    var h = window.innerHeight
    || document.body.clientHeight
    || document.documentElement.clientHeight;

    var x = document.getElementById("navegador");
    x.innerHTML = "El tamaño del navegador es: " + w + ", x " + h + ".";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Bienvenido de vuelta " + user);
    } else {
        user = prompt("Por favor ingrese su nombre:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}


function firstFunction() {
    alert("Hola\n quien eres?");
}

function firstFunction2() {
    var r = confirm("Confirmado lo confirmado!");
    if (r == true) {
       x = "OK fue presionado";
    }
    else {
       x = "Cancel fue presionado";
    }
    document.getElementById("test").innerHTML = x;
 }

 function firstFunction3() {
    var txt;
    var person = prompt("Porfavor introduzca su nombre completo:", "Pepito");
    if (person == null || person == "") {
        txt = "el usuario cancelo el prompt.";
    } else {
        txt = "Hola " + person + "! estimado usuario"
    }
    document.getElementById("test1").innerHTML = txt;
}

function download() {
    console.log("probando");
    var save = document.getElementById("nota").value;
    var blob = new Blob([save], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "notadescargada.txt");
  }