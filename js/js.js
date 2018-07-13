function juegos() {
    console.log("funciona j1");
    var imagenes = document.querySelectorAll("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.opacity = "0.1";
    }
}
function juego1() {
    juegos();
    console.log("alerta juego1");
    var lucha = document.querySelectorAll(".c1");
    for (let i = 0; i < lucha.length; i++) {
        lucha[i].style.opacity = "1";
    }
}
function juego2() {
    console.log("alerta juego 2");
    var deporte = document.querySelectorAll(".c2");
    for (let i = 0; i < deporte.length; i++) {
        deporte[i].style.opacity = "1";
       
    }
}
function juego3() {
    console.log("alerta juego3");
    var fantasia = document.querySelectorAll(".c3");
    for (let i = 0; i < fantasia.length; i++) {
        fantasia[i].style.opacity = "1";
    }
}
function reiniciar() {

    console.log("reiniciando");
    var reiniciando = document.querySelectorAll("reiniciar");
    for (let i = 0; i < reiniciando.length; i++) {
        reiniciando[i].style.opacity = "1";
    }
}

