/* alert("tons") */

document.getElementById("resultado").style.display = "none"

function funSubmit(event) {
    event.preventDefault();
}

function calcula() {

    num1 = verSeleccion1()
    num2 = verSeleccion2()
    monto = leerCantidad()
    tota = convertir(num1, num2, monto)
    document.getElementById("resu").value = Math.round(tota);
    document.getElementById("resultado").style.display = "block"
}

function verSeleccion1() {
    var val1 = document.getElementById("moneda1").value;
    return (val1)
}

function verSeleccion2() {
    var val2 = document.getElementById("moneda2").value;
    return (val2)
}

function leerCantidad() {
    var val1 = document.getElementById("cantidad").value;
    return (val1)
}

function convertir(num1, num2, monto) {
    //alert("entre")
    let tota;
    if (num1 == 1 && num2 == 2) { //primera tanda
        alert("REALIZANDO CONVERSIÓN")
        let pesomx = 20.57;
        tota = monto * pesomx
    } else if (num1 == 1 && num2 == 3) {
        alert("REALIZANDO CONVERSIÓN")
        let pesoco = 3783.5;
        tota = monto * pesoco
    } else if (num1 == 1 && num2 == 4) {
        alert("REALIZANDO CONVERSIÓN")
        let eu = 0.86;
        tota = monto * eu
    } else if (num1 == 1 && num2 == 5) {
        alert("REALIZANDO CONVERSIÓN")
        let le = 0.73;
        tota = monto * le
    } else if (num1 == 1 && num2 == 6) {
        alert("REALIZANDO CONVERSIÓN")
        let yen = 111.47;
        tota = monto * yen
    } else if (num1 == 2 && num2 == 1) { //segunda tanda casos
        alert("REALIZANDO CONVERSIÓN")
        let doll = 0.049;
        tota = monto * doll
    } else if (num1 == 2 && num2 == 3) {
        alert("REALIZANDO CONVERSIÓN")
        let pesco = 183.96;
        tota = monto * pesco
    } else if (num1 == 2 && num2 == 4) {
        alert("REALIZANDO CONVERSIÓN")
        let eu = 0.042;
        tota = monto * eu
    } else if (num1 == 2 && num2 == 5) {
        alert("REALIZANDO CONVERSIÓN")
        let le = 0.036;
        tota = monto * le
    } else if (num1 == 2 && num2 == 6) {
        alert("REALIZANDO CONVERSIÓN")
        let yen = 5.42;
        tota = monto * yen
    } else if (num1 == 3 && num2 == 1) { //tercera tanda casos
        alert("REALIZANDO CONVERSIÓN")
        let doll = 0.00026;
        tota = monto * doll
    } else if (num1 == 3 && num2 == 2) {
        alert("REALIZANDO CONVERSIÓN")
        let pesomx = 0.0054;
        tota = monto * pesomx
    } else if (num1 == 3 && num2 == 4) {
        alert("REALIZANDO CONVERSIÓN")
        let eu = 0.00023;
        tota = monto * eu
    } else if (num1 == 3 && num2 == 5) {
        alert("REALIZANDO CONVERSIÓN")
        let le = 0.00019;
        tota = monto * le
    } else if (num1 == 3 && num2 == 6) {
        alert("REALIZANDO CONVERSIÓN")
        let yen = 0.029;
        tota = monto * yen
    } else if (num1 == 4 && num2 == 1) { //cuarta tanda casos
        alert("REALIZANDO CONVERSIÓN")
        let doll = 1.16;
        tota = monto * doll
    } else if (num1 == 4 && num2 == 2) {
        alert("REALIZANDO CONVERSIÓN")
        let pesomx = 23.85;
        tota = monto * pesomx
    } else if (num1 == 4 && num2 == 3) {
        alert("REALIZANDO CONVERSIÓN")
        let pesoco = 4387.51;
        tota = monto * pesoco
    } else if (num1 == 4 && num2 == 5) {
        alert("REALIZANDO CONVERSIÓN")
        let le = 0.85;
        tota = monto * le
    } else if (num1 == 4 && num2 == 6) {
        alert("REALIZANDO CONVERSIÓN")
        let yen = 129.26;
        tota = monto * yen
    } else if (num1 == 5 && num2 == 1) { //quinta tanda casos
        alert("REALIZANDO CONVERSIÓN")
        let doll = 1.36;
        tota = monto * doll
    } else if (num1 == 5 && num2 == 2) {
        alert("REALIZANDO CONVERSIÓN")
        let pesomx = 28.03;
        tota = monto * pesomx
    } else if (num1 == 5 && num2 == 3) {
        alert("REALIZANDO CONVERSIÓN")
        let pesoco = 5155.89;
        tota = monto * pesoco
    } else if (num1 == 5 && num2 == 4) {
        alert("REALIZANDO CONVERSIÓN")
        let eu = 1.18;
        tota = monto * eu
    } else if (num1 == 5 && num2 == 6) {
        alert("REALIZANDO CONVERSIÓN")
        let yen = 151.91;
        tota = monto * yen
    } else if (num1 == 6 && num2 == 1) { //sexta tanda casos
        alert("REALIZANDO CONVERSIÓN")
        let doll = 0.009;
        tota = monto * doll
    } else if (num1 == 6 && num2 == 2) {
        alert("REALIZANDO CONVERSIÓN")
        let pesomx = 0.18;
        tota = monto * pesomx
    } else if (num1 == 6 && num2 == 3) {
        alert("REALIZANDO CONVERSIÓN")
        let pesoco = 33.94;
        tota = monto * pesoco
    } else if (num1 == 6 && num2 == 4) {
        alert("REALIZANDO CONVERSIÓN")
        let eu = 0.0077;
        tota = monto * eu
    } else if (num1 == 6 && num2 == 5) {
        alert("REALIZANDO CONVERSIÓN")
        let le = 0.0066;
        tota = monto * le
    } else {
        //alert("casos iguales")
        tota = monto;
        return tota
    }
    return tota;
}