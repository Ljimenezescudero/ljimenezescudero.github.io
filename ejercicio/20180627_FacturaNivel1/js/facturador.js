var nombreCliente;
var nombreProducto;
var numeroProductos;
var precioUnitario;
var precioTotalSinIVA;
var precioTotalConIVA;
var ivaAplicado;
function calcular(){
    console.log("CALCULANDO FACTURA");
    //DECLARACIÓN DE VARIABLES
    nombreCliente=document.getElementById("nombreCliente").value;
    nombreProducto=document.getElementById("nombreProducto").value;
    numeroProductos=Number(document.getElementById("numeroProductos").value);
    precioUnitario=Number(document.getElementById("precioUnitario").value);
    var es4 = document.getElementById("basico").checked;//De tipo booleano/boolean/bool
    var es10 = document.getElementById("normal").checked;
    var es21 = document.getElementById("alto").checked;
    precioTotalSinIVA = numeroProductos * precioUnitario;
    if (es4==true){
        ivaAplicado=4;
        precioTotalConIVA = precioTotalSinIVA*1.04;
    } else if (es10==true){
        ivaAplicado=10;
        precioTotalConIVA = precioTotalSinIVA*1.1;
    } else if (es21==true){
        ivaAplicado=21;
        precioTotalConIVA = precioTotalSinIVA*1.21;
    }
    mostrarDatos();
}

function mostrarDatos(){
    console.log(nombreCliente);
    console.log(nombreProducto);
    console.log("Unidades:" + numeroProductos);
    console.log("Precio unitario:" + precioUnitario);
    console.log("Precio total:" + precioTotalSinIVA);
    console.log("IVA:" + ivaAplicado);
    console.log("TOTAL:" + precioTotalConIVA);
}