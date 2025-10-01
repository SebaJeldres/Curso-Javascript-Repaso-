// short circuit


// Falso

// false
// 0
// "" '' ``
// null
// undefined
// NaN

let nombre = "";

let username = nombre || "Sin nombre";

console.log(username);

function fn1() {
    console.log("soy funcion 1");
    return true;
}

function fn2() {
    console.log("soy funcion 2");
    return false;
}

let resultado = fn1() && fn2();