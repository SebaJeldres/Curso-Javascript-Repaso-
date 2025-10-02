let numero_aleatorio = 89;
let vidas = 8;
let numero_escojido = "";


function pedir_numero() {

    numero_escojido = prompt("Ingrese un numero")
    numero_escojido = parseInt(numero_escojido)

    return numero_escojido
}


while (vidas > 0){
    console.log(numero_aleatorio)
    numero = pedir_numero();

    if (numero == numero_aleatorio){
        console.log("Adivinaste el numero")
        break

    } else if (numero !== numero_aleatorio) {
        vidas -= 1
        console.log("Numero equivocado, te quedan " + vidas)
    }
    
}

if (vidas === 0) {
    console.log("Se te acabaron las vidas");
}