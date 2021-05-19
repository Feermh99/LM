'use strict'

let usuario =+ (prompt("Introduce tu nombre: ")); //No conviertas a número, te sobra el + delante del prompt
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
