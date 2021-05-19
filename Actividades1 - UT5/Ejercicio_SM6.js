'use strict'

let opcion =+ (prompt("Introduce una letra: ")); //Quita el + de delante puesto que es una letra, no lo puedes convertir a número
let letra;

switch(opcion){
    case 1: //Aquí sería case 'a': y tendrías que quitar el if de después
        if(letra == 'a'){
            console.log("AZUL");
        }
    break;
    case 2: //Aquí sería case 'v': y tendrías que quitar el if de después
        if(letra == 'v'){
            console.log("VERDE");
        }
    break;
    case 3: //Aquí sería case 'r': y tendrías que quitar el if de después
        if(letra == 'r'){
            console.log("ROJO");
        }
    break;
    default:
        console.log("NO LO SE");
    break;
}
