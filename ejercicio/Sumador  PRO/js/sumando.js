function sumar() {
    console.log("ENTRANDO");
    var numero = 0;
    var total = 0;
    var indiceInicial = 1;
    var numeroInteraccion;
    var valorParada = -1;
    numeroInteraccion = Number(prompt("indica el numero de elementos a sumar"));

    for (i = indiceInicial; i <= numeroInteraccion; i++) {
        numero = prompt("dime un numero" + i);
        if (indiceInicial == valorParada) {
            break;
        }

        total = total + Number(numero);
    }
    console.log("el total es :" + total);
}
