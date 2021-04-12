'use strict'

let opcion =+ (prompt("Introduce una letra: "));
let letra;

switch(opcion){
    case 1:
        if(letra == 'a'){
            console.log("AZUL");
        }
    break;
    case 2:
        if(letra == 'v'){
            console.log("VERDE");
        }
    break;
    case 3:
        if(letra == 'r'){
            console.log("ROJO");
        }
    break;
    default:
        console.log("NO LO SE");
    break;
}