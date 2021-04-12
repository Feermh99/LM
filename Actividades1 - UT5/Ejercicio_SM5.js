'use strict'

let usuario =+ (prompt("Introduce tu nombre: "));
let mayus;

function compruebaMayus(mayus){
    let primeraMayus;
    if(primeraMayus == usuario){
        console.log("la primera letra es mayus"+ usuario.toUpperCase());
    }
    else{
        console.log("Error")
    }
}